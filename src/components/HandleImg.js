import React, {useState} from 'react'
import ImageHandle from './ImageHandle'
import Toggle from './ThemeToggle'

export default function HandleImg() {
    const [recentImg, setRecentImg] = useState(false)
    const imgHandler = ()=>{
    setRecentImg(!recentImg)
    }
    return (
    <div>
        <ImageHandle recentImg={recentImg} />
        {/* <Toggle imgHandler={imgHandler} /> */}
    </div>
    )
}
