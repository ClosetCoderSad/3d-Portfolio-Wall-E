import React from 'react'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    return (
            <div className='absolute w-[100vw] h-[100px] flex justify-between items-center z-20 px-6'>
                <h1 className='sm:text-3xl text-2xl font-bold ml-4 font-oxanium text-gray-300'>Abrar.<span className='bg-gradient-to-br from-red-500 to-red-800 rounded-full p-1 text-gray-300'>A</span></h1>
                <ul className='hidden md:flex text-lg'>
                    <li className='p-5 hover:text-white ease-in-out duration-500 font-oxanium text-gray-200'><a href='#about'>About</a></li>
                    <li className='p-5 hover:text-white ease-in-out duration-500 font-oxanium text-gray-200'><a href='#experience'>Experience</a></li>
                    <li className='p-5 hover:text-white ease-in-out duration-500 font-oxanium text-gray-200'><a href='#projects'>Projects</a></li>
                    <li className='p-5 hover:text-white ease-in-out duration-500 font-oxanium text-gray-200'><a href='#contact'>Contact</a></li>
                </ul>

                
                <div onClick={handleNav} className='block md:hidden mr-6 cursor-pointer'>
                    {nav? <AiOutlineClose size={20} color='white'/>:<AiOutlineMenu size={20} color='white'/>}
                </div>

                <div className={nav?'block fixed h-full left-0 top-0 w-[50%] bg-[#202121] bg-opacity-90 ease-in-out duration-500 z-50'
                    : 'fixed left-[-100%]'}>
                    <ul className='p-8 text-xl mt-12'>
                        <li className='p-2 hover:text-white ease-in-out duration-500 font-oxanium text-gray-200' onClick={closeNav}><a href='#about'>About</a></li>
                        <li className='p-2 hover:text-white ease-in-out duration-500 font-oxanium text-gray-200' onClick={closeNav}><a href='#experience'>Experience</a></li>
                        <li className='p-2 hover:text-white ease-in-out duration-500 font-oxanium text-gray-200' onClick={closeNav}><a href='#projects'>Projects</a></li>
                        <li className='p-2 hover:text-white ease-in-out duration-500 font-oxanium text-gray-200' onClick={closeNav}><a href='#contact'>Contact</a></li>
                    </ul>
                </div>
            </div>
    )
}

export default Navbar