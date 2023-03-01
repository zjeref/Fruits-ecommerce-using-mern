import React, { useEffect } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import TestiBG from '../assests/testi-bg.png'


const Testimonials = () => {


    return (
        <div className="w-full flex flex-col items-center py-10 relative my-[10vh] h-min">
            <div className="absolute w-full h-full -z-20 ">
                <img src={TestiBG} alt="" className='w-full h-full object-cover' />
            </div>
            <div className="text-center mb-10  py-10">
                <h3 className="text-green-700 text-3xl italic">Testimonial</h3>
                <h1 className="text-4xl font-bold text-blue-900">What our Customer Saying?</h1>
            </div>
            <div className="flex flex-col items-center max-w-7xl">
                <div className="flex flex-col items-center space-y-4 my-4">
                    <div>
                        <img src="https://images.unsplash.com/photo-1544168190-79c17527004f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="" className='w-20 h-20 rounded-full' />
                    </div>
                    <div className="flex">
                        {Array.apply(null, Array(Math.floor(3))).map(arr => {

                            return <AiFillStar />
                        })}
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt repudiandae odio ea dolorem tenetur facere molestias temporibus quasi eum vero.</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-blue-900">Sara Taylor</h3>
                        <p>Consumer</p>
                    </div>
                </div>

                <div className="w-full text-center mt-[10vh] grid grid-cols-2 md:grid-cols-4 gap-4 ">
                    <div className="testimonial-circle">
                        <h1 className="text-3xl font-bold">100%</h1>
                        <h1>Organic</h1>
                    </div>
                    <div className="testimonial-circle">
                        <h1 className="text-3xl font-bold">285</h1>
                        <h1>Active Product</h1>
                    </div>
                    <div className="testimonial-circle">
                        <h1 className="text-3xl font-bold">350+</h1>
                        <h1>Organic Orchads</h1>
                    </div>
                    <div className="testimonial-circle">
                        <h1 className="text-3xl font-bold">25+</h1>
                        <h1>Years of Farming</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
