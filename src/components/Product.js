import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const Product = ({data}) => {

    return (
        <div className="w-max p-3 shadow-lg product">
            <div>
                <img src="https://images.unsplash.com/photo-1593280443077-ae46e0100ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80" alt="" className='w-72 h-80' />
            </div>
            <div>
                <div className="text-xl font-semibold border-b-slate-400 border-b-2 p-3">
                    <h1>{data.title}</h1>
                </div>
                <div className="">
                    <div className="sr-only">
                        <p>{data.description}</p>
                    </div>
                    <div className="flex justify-between my-2 text-lg">
                        <div>
                            <h1>${data.price}</h1>
                        </div>
                        <div className="flex text-yellow-600">
                            {Array.apply(null, Array(Math.floor(data.rating))).map(arr => {

                                return <AiFillStar/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
