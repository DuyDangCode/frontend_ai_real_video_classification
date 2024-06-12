import { Toaster } from 'react-hot-toast'
import ResultContext from './hook/ResultContext'
import useResult from './hook/useResult'

function Provider({ children }) {
  const [result, setResult] = useResult()
  return (
    <ResultContext.Provider value={{ result, setResult }}>
      {children}
      <Toaster position='bottom-right' reverseOrder={false} />
    </ResultContext.Provider>
  )
}

export default Provider
