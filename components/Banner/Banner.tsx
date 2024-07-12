
import React from 'react'
import Slider from './Slider'
import SideBar from './Sidebar'

function Banner() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-9 my-10'>
        <div className="md:col-span-2 order-last md:order-first">
            <SideBar/>
        </div>
        <div className="md:col-span-7 order-first md:order-last">
            <Slider/>
        </div>
    </div>
  )
}

export default Banner