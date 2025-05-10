import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";

export default function Dashboard() {

  return (
    <React.Fragment>
      <section className='w-full grid grid-cols-3 gap-3 px-5'>
        <Cards arrow={FaLongArrowAltDown} color='bg-[#5956d3]' numbers1={'26K'} number2={'-12.4%'} CardName={'Users'}/>
        <Cards arrow={FaLongArrowAltUp} color='bg-[#2998fe]' numbers1={'$6,200'} number2={'40.9%'} CardName={'Product'}/>
        <Cards arrow={FaLongArrowAltUp} color='bg-[#fcb01e]' numbers1={'2.49%'} number2={'84.7%'} CardName={'Category'}/>
        <Cards arrow={FaLongArrowAltDown} color='bg-[#e95353]' numbers1={'44K'} number2={'-23.6%'} CardName={'Orders'}/>
      </section>
    </React.Fragment>
  )
}

function Cards({arrow: ArrowIcon, color, numbers1, number2, CardName}) {
  return (
    <div className={`p-3 rounded relative min-h-40 ${color}`}>
      <div>
        <p className='flex  items-center font-bold leading-9 text-2xl text-white gap-1'>{numbers1}
          <span className='text-[18px] leading-[27px] font-bold flex items-center gap-0'>({number2} < ArrowIcon className='px-0 font-normal text-[14px] leading-0' />)</span>
        </p>
        <p className='font-semibold text-white'>{CardName}</p>
      </div>
      <BsThreeDotsVertical className='absolute top-[20px] end-[15px] font-bold text-white' />
    </div>
  )
}