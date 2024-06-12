import { useContext, useRef, useState } from 'react'
import urlHelper from '../helper/url.helper'
import axios from 'axios'
import { promiseToast } from '../util/promiseToast'
import toast from 'react-hot-toast'
import ResultContext from '../hook/ResultContext'
import CVideo from './customVideo'

export default function CustomerFrom() {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const isProcessing = useRef(false)
  const { setResult: setGlobalResult } = useContext(ResultContext)

  const handleFileChange = (event) => {
    setResult(null)
    setSelectedVideo(event.target.files[0])
  }
  const [result, setResult] = useState(null)
  const handleUpload = () => {
    if (selectedVideo && !isProcessing.current) {
      isProcessing.current = true
      setResult(null)
      const formData = new FormData()
      formData.append('video', selectedVideo)
      console.log('predict')
      const uploadPromise = axios.post(urlHelper.predict(), formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      promiseToast(uploadPromise, 'Done', 'Something wrong', 'Processing')
      uploadPromise
        .then((res) => {
          console.log(res)
          setResult(res.data)
          setGlobalResult({ videoName: selectedVideo.name, ...res.data })
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          isProcessing.current = false
        })
    } else {
      if (isProcessing.current) {
        toast.error('The video is being processed, please wait a moment')
      } else {
        toast.error('Please select a video')
      }
    }
  }
  return (
    <div className=' w-full h-full flex flex-col items-start  gap-4'>
      <div className='flex flex-col gap-2 w-full h-fit'>
        <div className='flex flex-row gap-4 w-full h-fit'>
          <p className='font-bold'>File: </p>
          <input type='file' accept='video/*' onChange={handleFileChange} />
        </div>
        <div className=' flex flex-row gap-4 w-full h-fit'>
          <p className='font-bold'>Model:</p>
          <select>
            <option value={1}>RNN + CNN</option>
          </select>
        </div>
      </div>
      <div className='flex flex-col w-full h-fit'>
        <CVideo selectedVideo={selectedVideo} />
        {result && (
          <div className='flex h-fit w-full gap-4'>
            <p>{'Real: ' + result?.real}</p>
            <p>{'AI: ' + result?.ai}</p>
          </div>
        )}
      </div>
      <button
        onClick={() => {
          handleUpload()
        }}
        className='border-blue-700 border-2 px-3 py-2 rounded-md bg-black text-white font-medium w-full h-fit'
      >
        Predict
      </button>
    </div>
  )
}
