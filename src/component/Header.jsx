import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import logo from '../assets/logo.png'
import { UseTheme } from '../hooks/UseTheme'

export default function Header() {
    const { theme, handleTheme } = UseTheme();

    return (
        <nav className='p-2 max-w-7xl mx-auto'>
            <div className='flex justify-between items-center'>
                <a
                    className='flex items-center text-2xl text-gray-300'
                    href="#">
                    <img
                        className='h-20 w-20 object-cover'
                        src={logo}
                        alt="logo-png" />
                    Chat2PDF
                </a>
                <div className='flex items-center space-x-6'>
                    <button
                        onClick={handleTheme}
                        className='relative w-5 h-5 cursor-pointer'>
                        <BsSun size={20} className={`absolute inset-0 text-yellow-500 transition-all duration-300 ${theme ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
                        <BsMoon size={20} className={`absolute inset-0 text-blue-400 transition-all duration-300 ${theme ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
                    </button>
                    <div className='relative w-5 h-5'>
                        <button className='cursor-pointer'><CgProfile size={20} /></button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
