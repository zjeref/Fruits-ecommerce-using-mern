import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Offer from '../components/Offer'
import About from '../components/About'
import Products from '../components/Products'
import Testimonial from '../components/Testimonials'

const Home = () => {
    //TODO testimony data
    return (
        <div>
            <Header />
            <Hero />
            <Offer/>
            <About/>
            <Products/>
            <Testimonial/> 
        </div>
    )
}

export default Home
