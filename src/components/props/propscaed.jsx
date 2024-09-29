import React from 'react'
import Props from '../props/props'

export default function Propscaed() {
  return (
    <div>
        <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
         <Props user="Campus" btn="Add to cart"/>
         <Props user="Pume" btn=""/>
    </div>
  )
}
