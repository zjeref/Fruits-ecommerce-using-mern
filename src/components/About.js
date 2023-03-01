import React from 'react'
import about1 from '../assests/about1.png'
import organicicon from '../assests/organic-icon.png'
import qualityicon from '../assests/quality-icon.png'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

const About = () => {
    return (
        <div className="flex w-full relative justify-end h-[60vh] items-center my-[10vh]">
            <div className='w-full h-full absolute top-0 left-0 -z-10'>
                <img src={about1} alt="" className='w-full h-full object-fill ' />
            </div>
            <div className="md:w-1/2 max-w-2xl space-y-5 pr-10 ">
                <div className='flex flex-col justify-center'>
                    <div className='space-y-3'>
                        <h3 className='text-green-700 text-3xl italic'>Aboutus</h3>
                        <h1 className='text-4xl font-bold text-blue-900'>We Believe in Working <br /> Accredited Farmers</h1>
                        <p className='text-slate-600'>Simply dummy text of the printing and typestetting industry. Lored had ceased to been the industry's standard dummy text ever since the 1500s. when an unknown printer took a gallery</p>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <div className="w-24">
                                <img src={organicicon} alt="" />
                            </div>
                            <div>
                                <h1 className="font-semibold text-2xl">Organic Foods Only</h1>
                                <p className='text-slate-600'>Simple dummy text of the printing and typestetting</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-24">
                                <img src={qualityicon} alt="" />
                            </div>
                            <div>
                                <h1 className='font-semibold text-2xl'>Quality Standards</h1>
                                <p className='text-slate-600'>Simple dummy text of the printing and typestetting</p>
                            </div>
                        </div>
                    </div>
                    <div className=' btn text-white bg-teal-900 hover:bg-emerald-700 active:bg-emerald-800'>
                        <button>Shop Now</button>
                        <BsFillArrowRightCircleFill style={{ fontSize: '25px' }} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About
