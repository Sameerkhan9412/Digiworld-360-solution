import React from 'react'

import logo from '@/app/assets/logo.png'
import Image from 'next/image'
const LogoSlider = () => {
  return (
   <div className="carousel">
    <div className="group">
      {
        [1,2,3,4,5].map((item,key)=>{
          return <div className="card" key={key}>
            <Image
              src={logo}
              alt="Digiworld Logo"
              width={200}
              priority
            />
          </div>
        })
      }
    </div>
    <div area-hidden="true" className="group">
      {
        [1,2,3,4,5].map((item,key)=>{
          return <div className="card" key={key}>
            <Image
              src={logo}
              alt="Digiworld Logo"
              width={200}
              priority
            />
          </div>
        })
      }
    </div>
   </div>
  )
}

export default LogoSlider