import React from 'react'
import Card from './card'

function Results({ results }) {
  // results คือ props ที่รับมาจาก page.js
  return (
    <div>
        {
          results.map((result) => (
            <Card key={result.id} result={result}/>
          ))
        }
    </div>
  )
}

export default Results
