import { useCallback, useState } from 'react'

const useResult = (initValue = []) => {
  const [result, setResult] = useState(initValue)
  const updateResult = useCallback((newItem) => {
    setResult((prev) => {
      const newArr = [...prev]
      newArr.unshift(newItem)
      if (newArr.length > 5) {
        newArr.pop()
      }
      return newArr
    })
  }, [])

  return [result, updateResult]
}

export default useResult
