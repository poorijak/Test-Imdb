import React from 'react'
import Link from 'next/link'

function MenuItems({title , address , Icon}) {
  return (
    <Link href={address} className='hover:text-amber-500'>
        <Icon className="text-2xl sm:hidden"/>
        <p className='uppercase hidden sm:inline-block text-sm'>{title}</p>
    </Link>
  )
}

export default MenuItems
