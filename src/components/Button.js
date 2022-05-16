import React from 'react'
import {FaArrowUp} from "react-icons/fa"

const Button = (props) => {
  return (
    <div>
        <button className="border border-[#FFC300] rounded-full p-4">{props.text}<FaArrowUp className='inline ml-3 rotate-45 dark:text-gray-300' /></button>
    </div>
  )
}

// export {imgHandler}
export default Button