import React from 'react'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    return (
            <div className='w-[100vw] h-[100px] flex justify-between items-center z-20 px-6 bg-black'>
                <Link to="/"><h1 className='sm:text-3xl text-2xl font-bold pl-4 font-oxanium text-gray-300'>Abrar.<span className='bg-gradient-to-br from-red-500 to-red-800 rounded-full p-1 text-gray-300'>A</span></h1></Link>
                <ul className='hidden md:flex text-lg'>
                    <Link to="/about"><li className='p-5 hover:text-white ease-in-out duration-500 font-oxanium text-gray-200'>About</li></Link>
                    <Link to="/experience"><li className='p-5 hover:text-white ease-in-out duration-500 font-oxanium text-gray-200'>Experience</li></Link>
                    <Link to="projects"><li className='p-5 hover:text-white ease-in-out duration-500 font-oxanium text-gray-200'>Projects</li></Link>
                    <Link to="contact"><li className='p-5 hover:text-white ease-in-out duration-500 font-oxanium text-gray-200'>Contact</li></Link>
                </ul>

                
                <div onClick={handleNav} className='block md:hidden pr-4 cursor-pointer'>
                    {nav? <AiOutlineClose size={20} color='white'/>:<AiOutlineMenu size={20} color='white'/>}
                </div>

                <div className={nav?'block fixed h-full left-0 top-0 w-[50%] bg-[#202121] bg-opacity-90 ease-in-out duration-500 z-50'
                    : 'fixed left-[-100%]'}>
                    <ul className='p-8 text-xl mt-12'>
                        <Link to="/about"><li className='p-2 hover:text-white ease-in-out duration-500 font-oxanium text-gray-200' onClick={closeNav}>About</li></Link>
                        <Link to="/experience"><li className='p-2 hover:text-white ease-in-out duration-500 font-oxanium text-gray-200' onClick={closeNav}>Experience</li></Link>
                        <Link to="/projects"><li className='p-2 hover:text-white ease-in-out duration-500 font-oxanium text-gray-200' onClick={closeNav}>Projects</li></Link>
                        <Link to="/contact"><li className='p-2 hover:text-white ease-in-out duration-500 font-oxanium text-gray-200' onClick={closeNav}>Contact</li></Link>
                    </ul>
                </div>
            </div>
    )
}

export default Navbar