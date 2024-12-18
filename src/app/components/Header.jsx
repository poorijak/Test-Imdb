import React from 'react';
import MenuItems from './MenuItems';
import { AiFillHome } from "react-icons/ai"
import { BsFillInfoCircleFill } from "react-icons/bs";

function Header() {
  return (
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      <div className="flex gap-5">
        <MenuItems title='Home'  address='/' Icon={AiFillHome}/>
        <MenuItems title='About' address='/about' Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex gap-1 items-center">
        <span className='text-2xl font-bold bg-amber-500 rounded-lg py-1 px-2 '>Imdb</span>
        <span className='text-2xl hidden sm:inline'>Clone</span>
      </div>
    </div>
  )
}

export default Header
 