import React from 'react'
import Image from 'next/image'
import arrow from '../images/arrow.png'
import { useState } from 'react'
import { ethers } from 'ethers'
import GetSF from "../hooks/GetSF";
import { useAccount, useSigner } from 'wagmi'
const SelectToken = () => {

    const [fromToken, setFromToken] = useState("0x8aE68021f6170E5a766bE613cEA0d75236ECCa9a"); //USDC ERC20 Contract
    const [toToken, setToToken] = useState("0x5943F705aBb6834Cad767e6E4bB258Bc48D9C947"); //ETH ERC20 Contract

    console.log(fromToken)
    console.log(toToken)

    const[amount, setAmount] = useState<String>('0')
    const {data:signer} = useSigner()
    const {address} = useAccount()


    const batch = async () => {
        const sf = await GetSF();
        const supertokenx = await sf.loadSuperToken(fromToken);
        const supertoken = supertokenx?.underlyingToken;
        const approve = supertoken.approve({
          receiver : supertokenx.address || '0x0',
          amount : ethers.utils.parseEther("10000")
        });
        const apv = await approve.exec(signer);
        await apv.wait();
        const op = supertokenx.upgrade({amount : ethers.utils.parseEther("10000")});
        const stream = supertokenx.createFlow({
          sender : "0xF7bdD875Ca5449B9B98E756B1157264d325BA359",
          receiver: "0x7E9BC94e21BEb85DaFAF2Afd5530DE876951124D",
          flowRate: "10000"
        }
      );
        const batch = sf.batchCall([op, stream]);
        const res = await batch.exec(signer);
        console.log(res);
    }

    const updatebatch = async () => {
        const sf = await GetSF();
        const supertokenx = await sf.loadSuperToken(fromToken);
        const supertoken = supertokenx?.underlyingToken;
        const approve = supertoken.approve({
          receiver : supertokenx.address || '0x0',
          amount : ethers.utils.parseEther("10000")
        });
        const apv = await approve.exec(signer);
        await apv.wait();
        const op = supertokenx.upgrade({amount : ethers.utils.parseEther("10000")});
        const stream = supertokenx.updateFlow({
          sender : "0xF7bdD875Ca5449B9B98E756B1157264d325BA359",
          receiver: "0x7E9BC94e21BEb85DaFAF2Afd5530DE876951124D",
          flowRate: "1000"
        }
      );
        const batch = sf.batchCall([op, stream]);
        const res = await batch.exec(signer);
        console.log(res);
    }

  return (
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

                <button className='bg-orange1 text-black1 py-[2%] rounded-xl shadow-2xl' onClick={batch}>Start Stream</button>
            </div>
  )
}

export default SelectToken