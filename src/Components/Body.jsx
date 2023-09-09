import React from 'react'

const Body = () => {
  return (
    <div>

    <div className='flex items-center justify-center'>
      <img src="./src/assets/Blue-Shape.svg" alt="img1" className='h-64 -rotate-45'/>
      <img src="./src/assets/Pink-Shape.svg" alt="img2" className='absolute h-64 -rotate-[30deg]'/>
      <img src="./src/assets/Purple-shape.svg" alt="img3" className='absolute h-64 -rotate-[15deg]'/>
      <img src="./src/assets/Hero-Model.png" alt="hero" className='absolute h-64'/>
    </div>
    <div className='space-y-4'>
      <h1 className='text-5xl font-bold leading-tight font-playfair'>Host your website in less than 5 minutes</h1>
      <p className='font-lato text-gray-400'>With Hoster , get your website up and running in no less than 5 minutes with the most competitive pricing packages available online.</p>
      <form action="" className='flex flex-col gap-4'>
        <input className='rounded-md px-4 py-3 placeholder:text-gray-400' type="email" placeholder='Enter e-mail address' />
        <button className='rounded-md px-4 py-3 bg-blue-400'>Join Waitlist</button>
      </form>
      <div className='flex gap-2'>
        <img src="./src/assets/Checkmark.svg" alt="" />
        <p className='font-lato text-gray-400'>No spam ,ever . Unsubscribe anytime</p>
      </div>
    </div>
    </div>
  )
}

export default Body