import React from 'react'

import logo from '@/app/assets/logo.png'
import Image from 'next/image'

const LogoSlider = () => {
  return (
    <div className='w-full flex flex-col items-center  my-8'>
      <span className=' bg-orange-500 font-bold text-[#3C336A] py-1 px-2 rounded-md '>Trusted Partners Worldwide for Success</span>
   <div className="overflow-hidden whitespace-nowrap w-full">
      <div className="flex animate-scroll">
        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((src, i) => (
          <div key={i} className="mx-6 flex-shrink-0">
            <Image src={logo} width={150} height={80} alt="logo" />
          </div>
        ))}
      </div>
      </div>
   </div>
  )
}

export default LogoSlider