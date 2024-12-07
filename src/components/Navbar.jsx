import React, { useState } from 'react'
import logo from "../assets/logo.png"
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='w-full py-4 flex fixed bg-transparent backdrop-blur-md z-50 top-0 left-0 justify-between md:justify-center items-center px-4 md:px-8'>
            <div className='hidden md:flex absolute left-5 top-4 w-10'>
                <img src={logo} alt="Stellar Explorers" />
            </div>
            <div className='flex md:hidden w-10'>
                <img src={logo} alt="Stellar Explorers" />
            </div>
            <div className='hidden md:flex space-x-8 text-xl uppercase tracking-wider'>
                <a href='#home' className='text-neutral-100 font-orbitron hover:text-secondary transition duration-200 transform hover:scale-110'>Home</a>
                <a href='#about' className='text-neutral-100 font-orbitron hover:text-secondary transition duration-200 transform hover:scale-110'>About</a>
                <a href='#team' className='text-neutral-100 font-orbitron hover:text-secondary transition duration-200 transform hover:scale-110'>Team</a>
                <a href='#contact' className='text-neutral-100 font-orbitron hover:text-secondary transition duration-200 transform hover:scale-110'>Contact</a>
            </div>
            <div className='md:hidden'>
                <button onClick={() => setIsOpen(!isOpen)} className='text-neutral-100 focus:outline-none'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className='absolute top-16 left-0 w-full bg-neutral-900 flex flex-col items-center space-y-4 py-4 md:hidden'>
                    <a href='#home' onClick={()=>setIsOpen(false)} className='text-neutral-100 font-orbitron hover:text-secondary transition duration-200 transform hover:scale-110'>Home</a>
                    <a href='#about' onClick={()=>setIsOpen(false)} className='text-neutral-100 font-orbitron hover:text-secondary transition duration-200 transform hover:scale-110'>About</a>
                    <a href='#team' onClick={()=>setIsOpen(false)} className='text-neutral-100 font-orbitron hover:text-secondary transition duration-200 transform hover:scale-110'>Team</a>
                    <a href='#contact' onClick={()=>setIsOpen(false)} className='text-neutral-100 font-orbitron hover:text-secondary transition duration-200 transform hover:scale-110'>Contact</a>
                </div>
            )}
        </div>
    )
}

export default Navbar