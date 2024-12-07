import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full py-4 flex absolute top-0 left-0 justify-center items-center'>
            <div className='flex space-x-8 text-xl uppercase tracking-wider'>
                <a href='#home' className='text-neutral-100 font-orbitron hover:text-secondary transition duration-200 transform hover:scale-110'>Home</a>
                <a href='#about' className='text-neutral-100 font-orbitron hover:text-secondary transition duration-200 transform hover:scale-110'>About</a>
                <a href='#team' className='text-neutral-100 font-orbitron hover:text-secondary transition duration-200 transform hover:scale-110'>Team</a>
                <a href='#contact' className='text-neutral-100 font-orbitron hover:text-secondary transition duration-200 transform hover:scale-110'>Contact</a>
            </div>
        </div>
    )
}

export default Navbar