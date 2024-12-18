import React from 'react';
import MenuItems from './MenuItems';
import { AiFillHome } from "react-icons/ai"
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from 'next/link';
import DarkMode from './DarkMode';

function Header() {
    return (
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <div className="flex gap-5">
                <MenuItems title='Home' address='/' Icon={AiFillHome} />
                <MenuItems title='About' address='/about' Icon={BsFillInfoCircleFill} />
            </div>
            <div className='flex items-center gap-4'>
                <DarkMode />
                <Link href={'/'} className="flex gap-1 items-center">
                    <span className='text-2xl font-bold bg-amber-500 rounded-lg py-1 px-2 '>Imdb</span>
                    <span className='text-2xl hidden sm:inline'>Clone</span>
                </Link>
            </div>
        </div>
    )
}

export default Header
