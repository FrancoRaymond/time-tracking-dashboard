import { useEffect, useState } from 'react'
import { data } from './assets/data'
import avatar from './assets/images/image-jeremy.png'
import ellipsis from './assets/images/icon-ellipsis.svg'
import exercise from './assets/images/icon-exercise.svg'
import play from './assets/images/icon-play.svg'
import selfCare from './assets/images/icon-self-care.svg'
import social from './assets/images/icon-social.svg'
import study from './assets/images/icon-study.svg'
import work from './assets/images/icon-work.svg'

function App() {
  const [period, setPeriod] = useState('Weekly')
  const [timeframeFinder, setTimeframeFinder] = useState(1)
  const item = period.toLowerCase()

const images = {
  Exercise : exercise,
  Social : social,
  Work : work,
  Play : play,
  Study : study,
  SelfCare : selfCare
}

useEffect(() => {
  if(period === 'Daily') setTimeframeFinder(0)
  if(period === 'Weekly') setTimeframeFinder(1)
  if(period === 'Monthly') setTimeframeFinder(2)
},[period])


  return (
    <div className='px-2 py-7'>
      <header className='rounded-2xl bg-blue-950'>
        <div className='p-7 flex flex-row gap-5 items-center bg-blue-700 rounded-2xl'>
          <img src={avatar} alt="" className='size-14 rounded-full border-2 border-white'/>
          <div>
            <span className='text-sm text-gray-400'>Report for</span>
            <h1 className='text-xl font-semibold text-white'>Jeremy Robson</h1>
          </div>
        </div>
        <div className='flex justify-between px-10 py-5'>
          <span onClick={() => setPeriod('Daily')} className={`${period === 'Daily' ? 'text-white text-lg' : 'text-gray-400'} font-semibold cursor-pointer transition duration-300`}>Daily</span>
          <span onClick={() => setPeriod('Weekly')} className={`${period === 'Weekly' ? 'text-white text-lg' : 'text-gray-400'} font-semibold cursor-pointer transition duration-300`}>Weekly</span>
          <span onClick={() => setPeriod('Monthly')} className={`${period === 'Monthly' ? 'text-white text-lg' : 'text-gray-400'} font-semibold cursor-pointer transition duration-300`}>Monthly</span>
        </div>
      </header>
      {
        data.map(activity => (
          <div key={activity.title} className='rounded-xl bg-blue-950'>      
            <div className='flex flex-col p-5'>
         
              <div className='flex justify-between items-center'>
                <h1 className='text-white font-semibold'>{activity.title}</h1>
                <img src={ellipsis} alt="" className='h-1 cursor-pointer'/>
              </div>
              {  
                //console.log(Object.entries(activity.timeframes)[timeframeFinder][1]) 
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default App