import React from 'react'
import Button from './Button'

const Project = (props) => {
  return (
    <div className='py-4 border-b border-b-[#c4c4c4] relative'>
        <h1 className='font-semibold text-2xl md:text-3xl'> {props.title} </h1>
        <p className='text-lg mb-14'> {props.desc} </p>
        <div className='absolute right-0 bottom-4'>
            <a href={props.link} target="_blank"><Button text="Live site" py="3" /></a>
        </div>
    </div>
  )
}

export default Project