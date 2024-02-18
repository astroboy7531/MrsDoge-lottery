import React, { useState } from "react";

import ProfitComp from "../../Components/ProfitComp";
import RectComp from "../../Components/RectComp";
import RectLayout from "../../Components/rectLayout";

import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

function Home() {

  // Difine Contstant

  const COST_PER_TICKET = 0.00000892;

  // Define the Variables

  const profitArr = [
    {
      nth: 1,
      ticketCost: 0.00000892,
      percent: 30,
      reward: 'Nan'
    },
    {
      nth: 2,
      ticketCost: 0.00000892,
      percent: 20,
      reward: 'Nan'
    },
    {
      nth: 3,
      ticketCost: 0.00000892,
      percent: 10,
      reward: 'Nan'
    },
  ]

  const totalCount = {
    totalBuyCount: 0,
    totalBtc: 0,
    burnCount: 0
  }

  const yourTicket = 0;

  const selectArr = [500, 200, 100, 50, 20, 10, 5, 1];

  const [selectCount, setSelectCount] = useState(0);

  const [topBuyers, setTopBuyers] = useState([
    {
      address: 'No Buyer',
      tickets: 'N/A',
      ToWin: 0,
      LastBuy: 'N/A'
    },
    {
      address: 'No Buyer',
      tickets: 'N/A',
      ToWin: 0,
      LastBuy: 'N/A'
    },
    {
      address: 'No Buyer',
      tickets: 'N/A',
      ToWin: 0,
      LastBuy: 'N/A'
    },
  ])

  // Define function

  const setTicketCount = (count: number) => {
    console.log('setTicketCount ==> ', count);
    // if(count == 1){
    //   setSelectCount(flag => flag + 1);
    // } else if(count == -1){
    //   let temp = Math.max(0, selectCount-1);
    //   setSelectCount(temp);
    // }
    let temp = Math.max(0, selectCount + count);
    setSelectCount(temp);
    console.log('selectCount ==> ', selectCount)
  }

  return <div className="flex flex-row">
    {/* Side bar */}
    <div className="w-[200px] min-h-screen bg-[#3B3363]">
      <div className="flex flex-col justify-center">
        <img src="./assets/logo.png" alt="logo file" className="mx-auto mt-5" />
        <p className="text-[26px] text-white text-center font-bold">MrsDoge</p>

        <div className="flex flex-row justify-around items-center border-y-2 border-yellow-500 bg-[#2C254A] px-6 py-2 text-yellow-500 font-bold text-[22px] mt-6">
          <img className="w-[30px] h-[30px]" src="./assets/metamask.png" />
          <p>Connect</p>
        </div>
        {/* Ticket List */}
        <div className="flex flex-row items-center justify-start gap-2 pl-5 mt-5">
          <img src="./assets/ticketImg.svg"></img>
          <div className="flex flex-col gap-0">
            <p className="text-white">Your Tickets</p>
            <p className="-mt-1 text-yellow-400">{yourTicket} Tickets</p>
          </div>
        </div>

        {/* Your BTC Spent */}
        <div className="flex flex-row items-center justify-start gap-2 pl-5 mt-5">
          <img src="./assets/spentImg.svg"></img>
          <div className="flex flex-col gap-0">
            <p className="text-white">Your BTC Spent</p>
            <p className="-mt-1 text-yellow-400">{0} Tickets</p>
          </div>
        </div>

      </div>
    </div>

    {/* Main Panel */}
    <div className="flex flex-col bg-[#2C254A] w-[calc(100%-200px)] p-10">
      {/* First Part */}
      <div className="flex flex-row items-center justify-between gap-6">
        <RectComp src={'pot'} headTitle={'BNB'} miniTitle={'ROUND POT SIZE'} />
        <RectComp src={'sandClock'} headTitle={'Buy a Ticket To Start the Round!'} miniTitle={''} />
        <RectComp src={'ticketPrice'} headTitle={'0.00000892'} miniTitle={'TICKET PRICE'} />
        <RectComp src={'round'} headTitle={'12'} miniTitle={'ROUND Number'} />
      </div>

      {/* Second Part */}
      <div className="flex flex-row">
        {/* Left */}
        <div className="w-1/3">
          <RectLayout>
            <p className="text-yellow-500 text-[20px] font-bold">
              PROFITABILITY METRICS
            </p>
            {/* <ProfitComp /> */}
            {profitArr.map((value, index) =>
              <ProfitComp
                nth={value.nth}
                ticketPrice={value.ticketCost}
                percent={value.percent}
                reward={value.reward}
              />
            )}
          </RectLayout>
        </div>

        {/* Ticket Counter */}
        <div className="flex flex-col w-1/3 p-6 mt-20">
          {/* Counter */}
          <div className="flex flex-row px-8 justify-between items-center w-full border border-pink-600 rounded-lg mb-4">
            <RiArrowUpSLine
              size={40}
              className="cursor-pointer text-gray-500 hover:text-white"
              onClick={() => setTicketCount(1)}
            />
            <div className="text-gray-500 text-[20px] flex flex-row items-center gap-2">
              <span className="font-bold text-[28px] text-white">{selectCount}</span><span> Ticket</span>
            </div>
            <RiArrowDownSLine
              size={40}
              className="cursor-pointer text-gray-500 hover:text-white"
              onClick={() => setTicketCount(-1)}
            />
          </div>
          {/* Selector */}
          <div className="w-full flex flex-wrap justify-between">
            {selectArr.map((value, index) => (
              <div
                className="border border-pink-500 rounded-xl text-white hover:bg-pink-600 w-[calc(25%-6px)] mt-2 text-center cursor-pointer"
                onClick={() => setSelectCount(value)}
              >
                {value}
              </div>
            ))}
          </div>
          {/* Buy Button */}
          <div className="w-full rounded-2xl bg-blue-400 p-2 mt-4 hover:shadow-blue-500 shadow-lg text-center font-bold text-[24px]">
            BUY({Math.floor(COST_PER_TICKET * selectCount * 100000000) / 100000000} BNB)
          </div>
        </div>

        {/* Right */}
        <div className="w-1/3">
          <RectLayout>
            <p className="text-yellow-500 text-[20px] font-bold">
              ROUND STATISTICS
            </p>
            <div className='flex flex-row mt-2'>
              <p className='mr-auto text-white'>Total Tickets Bought:</p>
              <p className='ml-auto font-bold text-blue-400'>{totalCount.totalBuyCount} Ticket</p>
            </div>
            <div className='flex flex-row mt-4'>
              <p className='mr-auto text-white'>BNB Spent On Tickets:</p>
              <p className='ml-auto font-bold text-blue-400'>{totalCount.totalBuyCount} Ticket</p>
            </div>
            <div className='flex flex-row mt-4'>
              <p className='mr-auto text-white'>Tokens Bought Back And Burned:</p>
              <p className='font-bold text-[#fe41e2] ml-auto'>{totalCount.burnCount} Ticket</p>
            </div>
          </RectLayout>
        </div>

      </div>

      {/* Last Part */}
      <RectLayout>
        <div className="flex flex-col gap-4 text-gray-300">
          <p className="text-yellow-500 font-bold text-[20px]">
            TOP BUYERS
          </p>
          {/* table */}
          <table className="w-full border-spacing-2">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Address</th>
                <th>Tickets</th>
                <th>To Win</th>
                <th>Last Buy</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {topBuyers.map((value, index) => <tr className="text-[22px] py-2">
                <td className="flex justify-center">
                  <div className="bg-blue-500 text-black rounded-full w-8">{index + 1}</div>
                </td>
                <td>{value.address}</td>
                <td>{value.tickets}</td>
                <td>{value.ToWin}</td>
                <td>{value.LastBuy}</td>
              </tr>)}

            </tbody>
          </table>
        </div>
      </RectLayout>
    </div>
  </div>;
}

export default Home;