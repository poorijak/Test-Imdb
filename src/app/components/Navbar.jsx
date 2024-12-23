import React from 'react'
import Navbaritem from './Navbaritem'

function Navbar() {
  return (
    <div className='flex dark:bg-gray-600 bg-amber-100 justify-center p-4 gap-5 lg:text-lg'>
      <Navbaritem
        title='Trending'
        param='fetchTrending'
      />

      {/* param ส่ง url ไปที่  Navbaritems = fetchTrending  */}

      <Navbaritem
        title='Top Rated'
        param='fetchTopRated'
      />

      {/* param ส่ง url ไปที่  Navbaritems = fetchTopRated */}
    </div>
  )
}

export default Navbar
