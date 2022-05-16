import React from 'react'

const SocialBtn = (props) => {
  return (
    <div className='mr-5'>
        <button className="border dark:border-white border-[#3a3a3a] rounded-full py-2 px-9">{props.text}</button>
    </div>
  )
}

export default SocialBtn