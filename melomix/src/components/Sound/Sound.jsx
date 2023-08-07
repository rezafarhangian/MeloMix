import React from 'react'

import "./Sound.scss"
export default function Sound({cover ,singer, musicname }) {
  return (
    <div className=' sound'>
        <div className='image-container   rounded overflow-hidden'>
            <img className='w-100 h-100 ' src={cover} alt="" />
        </div>
        <div className='sound-title'>
            <span>{musicname}</span>
            <p>{singer}</p>
        </div>
    </div>
  )
}
