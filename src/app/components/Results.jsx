import React from 'react'
import Card from './card'

function Results({ results }) {
  // results คือ props ที่รับมาจาก page.js
  return (
    <div className=''>
      <div className='sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4 w-full'>
        {
          results.map((result) => (
            <Card key={result.id} result={result} />
          ))
        }
      </div>
    </div>
  )
}

export default Results
