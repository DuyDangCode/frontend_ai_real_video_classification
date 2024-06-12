import { memo } from 'react'

export default memo(function CVideo({ selectedVideo }) {
  return (
    <div className='w-full h-fit'>
      {selectedVideo && (
        <video src={URL.createObjectURL(selectedVideo)} controls />
      )}
    </div>
  )
})
