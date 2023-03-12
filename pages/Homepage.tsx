import React from 'react'
import CryptoChart from '@/components/CryptoChart'
import SelectToken from '@/components/SelectToken'
import DCAInfo from '@/components/DCAInfo'
import Sidebar from '@/components/Sidebar'
const Homepage = () => {

  return (
    <div className='flex flex-row mx-[3%]'>
        <Sidebar/>

        <div className='w-[45%] border-r border-r-silver'>
            <SelectToken/>
        </div>

        <div className='w-[40%]'>
            <div className='flex flex-col'>  
                <CryptoChart/>            
                <DCAInfo/>
            </div>
        </div>
    </div>
  )
}

export default Homepage