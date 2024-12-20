'use client'
import React from 'react';
import { useEffect } from 'react';

function Error({ error, reset }) {
    useEffect(() => {
        console.log(error)
    } , [error])
  return (
    <div className="text-center p-5">
      <h1>Something went wrong. Please try again later.</h1>
      <button className='hover:text-amber-500' conClick={() => reset()}>Try Again</button>
    </div>
  );
}

export default Error;
