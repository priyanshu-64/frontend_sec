import React from 'react'
// import './Search.css'

export default function Search() {
  return (
    <>
    <div className=' '>


<form onsubmit="event.preventDefault();" role="search">
<div className='flex'>


  <button type="submit" className='bg-blue-500 md:h-9 h-7 rounded-lg pr-2 text-white'>  <input id="search" type="search" placeholder="Search..." autofocus required className='w-24 md:w-64 
   focus-visible:bg-gray-900  text-white text-center md:h-9 h-7 rounded-xl mr-2' />Go </button>    
</div>
</form>
    </div>
    </>
  )
}
