export default function HistoryItem({ result }) {
  return (
    <div className=' flex w-full h-fit flex-col mt-3'>
      <div className='flex flex-row  gap-3'>
        <p className='font-bold'>Video name: </p>
        <p>{result.videoName}</p>
      </div>
      <div className='flex flex-row gap-2 '>
        <p className='font-bold'>Result:</p>
        <div className='flex flex-col'>
          <div className='flex flex-row gap-1'>
            <p>AI:</p>
            <p>{result?.ai}</p>
          </div>
          <div className='flex flex-row gap-1'>
            <p>Real:</p>
            <p>{result?.real}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
