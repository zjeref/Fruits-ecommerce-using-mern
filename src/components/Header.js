import React from 'react'
import logo from '../assests/logo.png'
import { FaShoppingCart, FaSearch } from 'react-icons/fa'

const Header = () => {
    return (
        <div className="w-full  flex justify-center p-6 select-none">
            <div className="w-full max-w-7xl flex justify-between text-2xl items-center">
                <div className="flex space-x-2">
                    <img src={logo} alt="" className='w-6 ' />
                    <h1>Organick</h1>
                </div>
                <div className="flex space-x-4">
                    <div>Home</div>
                    <div>About</div>
                    <div>Pages</div>
                    <div>Shop</div>
                    <div>Projects</div>
                    <div>News</div>
                </div>
                <div className="flex space-x-4">
                    <div className="flex items-center bg-white pl-4  rounded-full">
                        <input type="h-full" placeholder='Search' className='active:border-none' />
                        <button className="h-full p-4 rounded-full bg-teal-700 text-white"><FaSearch /></button>
                    </div>
                    <div className="flex items-center bg-white pr-4  rounded-full space-x-2 ">
                        <button className="h-full p-4 rounded-full bg-teal-900 text-white"><FaShoppingCart /></button>

                        <span className="font-semibold text-blue-900">Cart</span>
                        <span className="font-semibold text-blue-900">(0)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
