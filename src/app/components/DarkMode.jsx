'use client'
import React from 'react'
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from 'next-themes';

function DarkMode() {
    const { theme, setTheme, systemTheme } = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme ; 
    // currentTheme = theme ปัจจุบัน ___ ถ้า theme ปัจจุบัน === theme ของ window ถ้าไม่ ให้ 
    return (
        <div>
            {currentTheme === 'light' ? <MdLightMode onClick={() => setTheme('dark')} className='text-2xl cursor-pointer hover:text-amber-500' /> : <MdDarkMode onClick={() => setTheme('light')} className='text-2xl cursor-pointer hover:text-amber-500' />}
        </div>
    )
}

export default DarkMode
