import { ConnectButton } from '@rainbow-me/rainbowkit'
import React from 'react'
const Navbar = () => {
  return (
    <div className='flex flex-row mx-[3%] my-[2%] justify-between'>
      <div className='flex flex-row justify-between'>
          <div className='pr-[90%]'>
            <label className='text-lg'>DCA</label>
          </div>

          <div className='flex flex-row ml-[90%] text-lg'>
            <button className='px-[10%] mx-[5%]'>Invest</button>
            <button className='px-[10%] mx-[5%]'>Wrap/Unwrap</button>
          </div>
      </div>

      <div className=''>
        <ConnectButton accountStatus="avatar"/>
      </div>
    </div>
  )
}

export default Navbar