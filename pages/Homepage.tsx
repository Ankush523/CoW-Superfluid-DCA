import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useState } from 'react'
import Image from 'next/image'
import React from 'react'
import route from '../images/route2.png'
import arrow from '../images/arrow.png'
import bulb from '../images/bulb3.png'
import Chart from '@/components/Chart'
const Homepage = () => {

    const [fromToken, setFromToken] = useState("0x8aE68021f6170E5a766bE613cEA0d75236ECCa9a"); //USDC ERC20 Contract
    const [toToken, setToToken] = useState("0x5943F705aBb6834Cad767e6E4bB258Bc48D9C947"); //ETH ERC20 Contract

  return (
    <div className='flex flex-row mx-[3%]'>
        <div className='flex flex-col border-r border-r-silver h-[100vh] w-[15%]'>
            <div className='flex flex-col items-center bg-grey1 mr-[10%] rounded-xl mb-[10%]'>
                <Image src={route} alt="route" className='bg-blue1 h-[50px] w-[50px] p-3 rounded-2xl my-[10%]'/>
                <label>Route</label>
                <p className='pb-[15%] text-silver'>USDC to ETH</p>
            </div>
            <div className='flex flex-col items-center bg-grey1 mr-[10%] rounded-xl'>
                <label className='mt-[10%] mb-[5%]'>My Wallet</label>
                <label className='text-3xl pb-[2%]'> - ETH</label>
                <div className='pb-[10%] mt-[5%] pt-[5%] border-t border-t-silver'>
                    <ConnectButton chainStatus="none" showBalance={false} />
                </div>
            </div>
        </div>

        <div className='w-[45%] border-r border-r-silver'>
            <div className='flex flex-col mx-[3%] bg-grey1 rounded-2xl p-[2%]'>
                <label className='bg-orange1 w-[fit-content] px-[3%] py-[1%] rounded-lg text-black1 mb-[4%]'>Invest</label>

                <div className='flex flex-col bg-blue1 rounded-2xl p-[2%]  shadow-2xl'>
                    <label className='text-xl mb-[2%] px-[5px]'>Sell Token</label>
                    <select className='w-[20%] text-3xl rounded-md bg-blue1 text-white1 mb-[3%]' name="fromToken" onChange={(e) => setFromToken(e.target.value)}>
                        <option value="0x8aE68021f6170E5a766bE613cEA0d75236ECCa9a">USDC</option>
                        <option value="0x5943F705aBb6834Cad767e6E4bB258Bc48D9C947">ETH</option>
                        <option value="0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00">DAI</option>
                    </select> 
                    <label className='text-sm mb-[1%]'>Amount : </label>
                    <input className='bg-blue1 border rounded-lg shadow-xl text-5xl' />
                </div>

                <Image src={arrow} alt="arrow" className='w-[50px] mx-[45%]'/>

                <div className='flex flex-col bg-grey2 rounded-2xl p-[2%] mb-[3%] shadow-2xl'>
                    <label className='text-xl mb-[2%]'>Receive Token</label>
                    <select className='w-[20%] text-3xl rounded-md bg-grey2 text-white1 mb-[3%]' name="toToken" onChange={(e) => setToToken(e.target.value)}>
                        <option value="0x5943F705aBb6834Cad767e6E4bB258Bc48D9C947">ETH</option>
                        <option value="0x8aE68021f6170E5a766bE613cEA0d75236ECCa9a">USDC</option>
                        <option value="0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00">DAI</option>
                    </select>
                </div>

                <button className='bg-orange1 text-black1 py-[2%] rounded-xl shadow-2xl'>Start Stream</button>
            </div>
        </div>

        <div className='w-[40%]'>
            <div className='flex flex-col'>
                <div className='flex flex-col bg-grey1 ml-[3%] px-[2%] py-[3%] mb-[5%] rounded-2xl'>
                    <Chart/>
                </div>
                <div className='flex flex-col bg-grey1 ml-[3%] px-[%] rounded-2xl'>
                    <div className='flex flex-col my-[3%] px-[3%]'>
                        <label className='text-2xl text-white1 mb-[2%]'>What is DCA?</label>
                        <p className=''>Dollar-cost averaging is a tool an investor can use to build savings and wealth over a long period while neutralizing the short-term volatility in the market.The purchases occur regardless of the price of assets and at regular intervals. In effect, this strategy removes much of the detailed work of attempting to time the market in order to make purchases of assets at the best prices.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage