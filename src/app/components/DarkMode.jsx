'use client'
import React from 'react'
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from 'next-themes';

function DarkMode() {
    const { theme, setTheme, systemTheme } = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme ;
    return (
        <div>
            {currentTheme === 'dark' ? <MdDarkMode onClick={() => setTheme('light')} className='text-2xl cursor-pointer hover:text-amber-500' /> : <MdLightMode onClick={() => setTheme('dark')} className='text-2xl cursor-pointer hover:text-amber-500' />}
        </div>
    )
}

export default DarkMode
