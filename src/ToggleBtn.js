import React, {useState} from 'react'


const ToggleBtn = () => {
  const [recentImg, setRecentImg] = useState(false)
  const imgHandler = ()=>{
    setRecentImg(!recentImg)
  }
  
}

export default ToggleBtn