import { useContext } from 'react'
import CustomerFrom from './components/customForm'
import HistoryItem from './components/historyItem'
import ResultContext from './hook/ResultContext'

function App() {
  const { result } = useContext(ResultContext)
  return (
    <div className='w-full h-full lg:px-16 px-0 py-9 flex flex-col lg:justify-center justify-start lg:items-start items-center lg:flex-row  gap-6'>
      <div className='md:w-[500px] w-[300px]  flex justify-start items-start '>
        <div className='h-fit w-full'>
          <CustomerFrom />
        </div>
      </div>
      <div className='md:w-[500px] w-[300px] flex  flex-col justify-center items-start '>
        <p className='font-bold text-[20px]'>History: </p>
        {result.map((item, index) => {
          return <HistoryItem key={index} result={item}></HistoryItem>
        })}
      </div>
    </div>
  )
}

export default App
