import ProfitComp from "../../Components/ProfitComp";
import RectComp from "../../Components/rectComp";
import RectLayout from "../../Components/rectLayout";

import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

function Home() {

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
            <p className="-mt-1 text-yellow-400">{0} Tickets</p>
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
        {/* Count */}
        <div className="flex flex-col w-1/3 p-6">
            <div className="flex flex-row justify-around w-full border border-pink-600 rounded-lg">
                  <RiArrowUpSLine color="white" />
                  <RiArrowDownSLine color="white" />
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
    </div>
  </div>;
}

export default Home;