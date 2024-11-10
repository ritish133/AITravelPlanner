import React from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom'
import { Button } from '../button'

function Hero() {
  return (
    <div className='flex flex-col items-center gap-9 w-screen h-screen bg-[url("/bg.jpg")] bg-cover overflow-hidden'>
      
      <h1
      className='font-extrabold text-[50px] text-center mt-16'
      ><span className='text-[#f56551]'>Plan Your Next Trip with AI:</span> <br />
        Personalized Itineraries at Your Fingertips</h1>

      <p className='text-xl text-gray-500 text-center custom'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</p>
   
      <Link to={'/create-trip'}>
        <Button> Get Started, It's Free </Button>
      </Link>
    </div>
  )
}

export default Hero