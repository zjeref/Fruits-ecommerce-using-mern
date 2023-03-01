import React, { useContext } from 'react'
import Product from './Product'
import { ProductContext } from '../App'

import { BsFillArrowRightCircleFill } from 'react-icons/bs'


const Products = () => {
    const productContext = useContext(ProductContext)
    const products = productContext.productData
    console.log(products)

    return (
        <div className="w-full flex flex-col items-center bg-red-50 py-5">
            <div className="text-center mb-10">
                <h3 className="text-green-700 text-3xl italic">Categories</h3>
                <h1 className="text-4xl font-bold text-blue-900">Our Products</h1>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
                {products.map((product) => {
                    return <Product key={product.id} data={product} />
                })
                }
            </div>
            <div className=' btn text-white bg-teal-900 my-8 hover:bg-emerald-700 active:bg-emerald-800'>
                <button>Learn More</button>
                <BsFillArrowRightCircleFill style={{ fontSize: '25px' }} />
            </div>
        </div>
    )
}

export default Products
