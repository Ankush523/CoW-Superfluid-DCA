import { ConnectButton } from '@rainbow-me/rainbowkit'
import Image from 'next/image'
import React from 'react'
import logo from "../images/dca.png"
const Navbar = () => {
  return (
    <div className='flex flex-row mx-[3%] my-[2%] justify-between'>
      <div className='flex flex-row justify-between'>

            <Image src={logo} alt="logo" className='w-[40%]'/>


          <div className='flex flex-row ml-[80%]  text-lg'>
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