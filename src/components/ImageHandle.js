import React from 'react'
import firstImg from "../assets/Rectangle 2 (1).png"
import secondImg from "../assets/Rectangle 2.png"

const ImageHandle = ({recentImg}) => {
  return (
    <div>
        <img className='hidden md:block' src={recentImg ? firstImg : secondImg} alt="" />
    </div>
  )
}

export default ImageHandle