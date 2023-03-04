import { ConnectButton } from '@rainbow-me/rainbowkit'
import Image from 'next/image'
import React from 'react'
import route from '../images/route2.png'
const Homepage = () => {
  return (
    <div className='flex flex-row mx-[3%]'>
        <div className='flex flex-col border-r border-r-silver h-[100vh] w-[15%]'>
            <div className='flex flex-col items-center bg-grey1 mr-[10%] rounded-xl mb-[10%]'>
                <Image src={route} alt="route" className='bg-blue1 h-[50px] w-[50px] p-3 rounded-2xl my-[10%]'/>
                <label>Route</label>
                <p className='pb-[15%] text-silver'>BUSD to  ETH</p>
            </div>
            <div className='flex flex-col items-center bg-grey1 mr-[10%] rounded-xl'>
                <label className='mt-[10%] mb-[5%]'>My Wallet</label>
                <label className='text-3xl pb-[2%]'> - ETH</label>
                <div className='pb-[10%] mt-[5%] pt-[5%] border-t border-t-silver'>
                    <ConnectButton chainStatus="none" showBalance={false} />
                </div>
            </div>
        </div>

        <div>
            <label>Swap</label>
        </div>

        <div>
            <label>Graph</label>
        </div>
    </div>
  )
}

export default Homepage