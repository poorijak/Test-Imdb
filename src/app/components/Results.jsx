import React from 'react'

function Results({ results }) {
  // results คือ props ที่รับมาจาก page.js
  return (
    <div>
        {
          results.map((result) => (
            <div key={result.id}>
              <h2>{result.title}</h2>
            </div>
          ))
        }
    </div>
  )
}

export default Results
