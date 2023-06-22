import React, { useState } from 'react'
import "./RoundNevBall.css"
import {Link , useLocation} from "react-router-dom"
import { useEffect } from 'react'

const RoundNevBall = () => {
    const [MlinkClass, setMlinkClass] = useState("mLinkHide")
    const [meunIcon, setMenuIcon] = useState("fa-solid fa-bars")
    const [HLinkClass, setHLinkClass] = useState("link")
    const [TLinkClass, setTLinkClass] = useState("link")
    const [KLinkClass, setKLinkClass] = useState("link")
    const [DLinkClass, setDLinkClass] = useState("link")
    const [clickLink, setClickLink] = useState(0)
    const changeMvisibal =()=>{
        if(MlinkClass ==="mLinkHide"){
            setMlinkClass("menuLinks")
            setMenuIcon("fa-solid fa-xmark")
        }
        if(MlinkClass ==="menuLinks"){
            setMlinkClass("mLinkHide")
            setMenuIcon("fa-solid fa-bars")
        }
    }
    const location = useLocation()
    const currentLocation = location.pathname;
useEffect(()=>{
  if(currentLocation === "/"){
    setHLinkClass("linkActive")
    setTLinkClass("link")
    setKLinkClass("link")
    setDLinkClass("link")
  }
  if(currentLocation === "/Translater"){
    setHLinkClass("link")
    setTLinkClass("linkActive")
    setKLinkClass("link")
    setDLinkClass("link")
  }
  if(currentLocation === "/Keyboard"){
    setHLinkClass("link")
    setTLinkClass("link")
    setKLinkClass("linkActive")
    setDLinkClass("link")
  }
  if(currentLocation === "/Dev"){
    setHLinkClass("link")
    setTLinkClass("link")
    setKLinkClass("link")
    setDLinkClass("linkActive")
  }
},[clickLink])
const linkBtnAction =()=>{
  setClickLink( clickLink + 1)
  console.log(clickLink)
  if(MlinkClass==="mLinkHide"){
    setMenuIcon("fa-solid fa-xmark")
    setMlinkClass("menuLinks")
  }
  if(MlinkClass==="menuLinks"){
    setMenuIcon("fa-solid fa-bars")
    setMlinkClass("mLinkHide")
  }
}
  return (
    <div className='menu'>
    <div className='nemuitems'>
    <div className={MlinkClass}>
        <Link className={HLinkClass} onClick={linkBtnAction} to="/"><i class="fa-solid fa-house"></i></Link>
        <Link className={TLinkClass} onClick={linkBtnAction} to="Translater"><i class="fa-solid fa-braille"></i></Link>
        <Link className={KLinkClass} onClick={linkBtnAction} to="Keyboard"><i class="fa-solid fa-keyboard"></i></Link>
        <Link className={DLinkClass} onClick={linkBtnAction} to="Dev"><i class="fa-solid fa-code"></i></Link>
        <div className='space'></div>
    </div>
    <div className='menuButton' onClick={changeMvisibal}>
        <h1><i class={meunIcon}></i></h1>
      </div>
    </div>
    </div>
  )
}

export default RoundNevBall
