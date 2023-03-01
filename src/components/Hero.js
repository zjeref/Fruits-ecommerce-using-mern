import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

import hero1 from '../assests/hero-bg1.png'
import hero2 from '../assests/hero-bg2.png'

const Hero = () => {
    return (
        <div className='min-w-screen min-h-[70vh] flex items-center relative'>
            <div className='w-full h-full absolute top-0 left-0'>
                <img src={hero1} alt="" className='w-full h-full object-cover -z-20' />
            </div>
            <div className='w-full h-full absolute top-0 left-0'>
                <img src={hero2} alt="" className='w-full h-full object-cover -z-10' />
            </div>
            <div className='flex justify-center md:w-1/2 z-10'>
                <div className='max-w-lg p-4 space-y-4 '>
                    <div>
                        <h3 className='text-green-700 text-3xl italic'>100% Natural Food</h3>
                        <h1 className='text-6xl font-semibold text-blue-900'>Choose the best healthier way <br /> of life</h1>
                    </div>
                    <div className=' text-blue-900 bg-yellow-300 btn active:bg-yellow-500 hover:bg-yellow-400'>
                        <button className='text-2xl'>Explore Now</button>
                        <BsFillArrowRightCircleFill style={{ fontSize: '25px' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
