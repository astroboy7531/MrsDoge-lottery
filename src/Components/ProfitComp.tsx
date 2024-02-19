interface ProfitCompProps {
    nth: number,
    ticketPrice: number,
    percent: number,
    reward: number
}

const ProfitComp = ({
    nth, ticketPrice, percent, reward
}:ProfitCompProps) => {
    // const nth = 1;
    // const ticketPrice = '0.00000892';
    // const percent = '30';
    // const reward = 'NaN'

  return (
    <div className='flex flex-col mt-4'>
        <div className='flex flex-row'>
            <p className='mr-auto text-white'>Tickets Needed To Be FIRST PLACE:</p>
            <p className='font-bold text-[#fe41e2] ml-auto'>{nth} Ticket</p>
        </div>
        <div className='flex flex-row'>
            <p className='mr-auto text-white'>Cost Of Tickets:</p>
            <p className='font-bold text-[#fe41e2] ml-auto'>{ticketPrice} BTC</p>
        </div>
        <div className='flex flex-row'>
            <p className='mr-auto text-white'>Percentage That The First Place Wins:</p>
            <p className='font-bold text-[#fe41e2] ml-auto'>{percent} % </p>
        </div>
        <div className='flex flex-row'>
            <p className='mr-auto text-white'>Amount To Be Won:</p>
            <p className='font-bold text-[#fe41e2] ml-auto'>{reward} BTC</p>
        </div>
    </div>
  )
}

export default ProfitComp