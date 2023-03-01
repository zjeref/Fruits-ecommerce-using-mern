import React from 'react'
import offer1 from '../assests/offer1.png'
import offer2 from '../assests/offer2.png'

const Offer = () => {
    return (
        <div className="w-full flex justify-center my-[10vh]">
            <div className="max-w-5xl flex space-x-8">
                <div className="offer">
                    <img src={offer1} alt="" />
                </div>
                <div className="offer">
                    <img src={offer2} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Offer
