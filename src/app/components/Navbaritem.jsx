'use client'

import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

function Navbaritem({title , param}) {

    const searchParams = useSearchParams(); // ดึงค่าจาก url 
    const type = searchParams.get('type'); // ดึงค่าจาก genre จาก url

  return (
    <div>
      <Link className={`hover:text-amber-600 font-semibold ${type === param ? 'underline underline-offset-8 decoration-4 decoration-amber-500 round-lg ' : ''} `} href={`/?type=${param}`}>{title}</Link>
    </div>
  )
}

export default Navbaritem
