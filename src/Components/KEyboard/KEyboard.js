import React, { useState } from 'react'
import "./KEyboard.css"
const KEyboard = () => {
  const [Placeholder, setPlaceholder] = useState("Your text will appear here")
  const [resultField, setResultField] = useState("")
  const [placeholderClass, setPlaceholderClass] = useState("PlaceHolder")
  const Afuncion =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"A")
  }
  const Bfuncion =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"B")
  }
  const Cfuncion =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"C")
  }
  const Dfuncion =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"D")
  }
  const Efuncion =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"E")
  }
  const Ffuncion =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"F")
  }
  const Gfuncion =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"G")
  }
  const Hfuncion =()=>{
    setPlaceholder("")
    setResultField(resultField +"H")
  }
  const Ifuncion =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"I")
  }
  const Jfuncion =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"J")
  }
  const Kfuncion =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"K")
  }
  const Lfuncion =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"L")
  }
  const Mfuncion =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"M")
  }
  const Nfuncion =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"N")
  }
  const Ofuncion =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"O")
  }
  const Pfuncion =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"P")
  }
  const Qfuncion =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"Q")
  }
  const Rfuncion =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"R")
  }
  const Sfuncion =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"S")
  }
  const Tfuncion =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"T")
  }
  const Ufuncion =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"U")
  }
  const Vfuncion =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"V")
  }
  const Wfuncion =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"W")
  }
  const Xfuncion =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"X")
  }
  const Yfuncion =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"Y")
  }
  const Zfuncion =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"Z")
  }
  const funcion0 =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"0")
  }
  const funcion1 =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"1")
  }
  const funcion2 =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"2")
  }
  const funcion3 =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"3")
  }
  const funcion4 =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"4")
  }
  const funcion5 =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"5")
  }
  const funcion6 =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"6")
  }
  const funcion7 =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"7")
  }
  const funcion8 =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"8")
  }
  const funcion9 =()=>{
    setPlaceholderClass("PlaceHolderHide")
    setResultField(resultField +"9")
  }
  const copyFunction=()=>{
    navigator.clipboard.writeText({resultField}.resultField)
  }
  const clearAll=()=>{
    setPlaceholderClass("PlaceHolder")
    setResultField("")
  }
  return (
    <div className='mainFiels'>
      <div className='resultBoard'>
        <p className={placeholderClass}>{Placeholder}</p>
          <div className='finlaoutput'>
              <p className='keyboardResult'>{resultField}</p>
          </div>
          <div className='kboardResultBtn'>
            <button onClick={copyFunction}>Copy</button>
            <button onClick={clearAll}>Clear</button>
          </div>
      </div>
      <h1 className='dialog'>Alphabates:</h1>
      <div className='alphabetBtn'>
        <button onClick={Afuncion}><span className='brailleCode'>⠁</span> </button>
        <button onClick={Bfuncion}><span className='brailleCode'>⠃</span></button>
        <button onClick={Cfuncion}><span className='brailleCode'>⠉</span></button>
        <button onClick={Dfuncion}><span className='brailleCode'>⠙</span></button>
        <button onClick={Efuncion}><span className='brailleCode'>⠑</span></button>
        <button onClick={Ffuncion}><span className='brailleCode'>⠋</span></button>
        <button onClick={Gfuncion}><span className='brailleCode'>⠛</span></button>
        <button onClick={Hfuncion}><span className='brailleCode'>⠓</span></button>
        <button onClick={Ifuncion}><span className='brailleCode'>⠊</span></button>
        <button onClick={Jfuncion}><span className='brailleCode'>⠚</span></button>
        <button onClick={Kfuncion}><span className='brailleCode'>⠅</span></button>
        <button onClick={Lfuncion}><span className='brailleCode'>⠇</span></button>
        <button onClick={Mfuncion}><span className='brailleCode'>⠍</span></button>
        <button onClick={Nfuncion}><span className='brailleCode'>⠝</span></button>
        <button onClick={Ofuncion}><span className='brailleCode'>⠕</span></button>
        <button onClick={Pfuncion}><span className='brailleCode'>⠏</span></button>
        <button onClick={Qfuncion}><span className='brailleCode'>⠟</span></button>
        <button onClick={Rfuncion}><span className='brailleCode'>⠗</span></button>
        <button onClick={Sfuncion}><span className='brailleCode'>⠎</span></button>
        <button onClick={Tfuncion}><span className='brailleCode'>⠞</span></button>
        <button onClick={Ufuncion}><span className='brailleCode'>⠥</span></button>
        <button onClick={Vfuncion}><span className='brailleCode'>⠧</span></button>
        <button onClick={Wfuncion}><span className='brailleCode'>⠺</span></button>
        <button onClick={Xfuncion}><span className='brailleCode'>⠭</span></button>
        <button onClick={Yfuncion}><span className='brailleCode'>⠽</span></button>
        <button onClick={Zfuncion}><span className='brailleCode'>⠵</span></button>
      </div>
      <h1>Numbers:</h1>
      <div className='numberBtn'>
        <button onClick={funcion0}><span className='brailleCode'>⠴</span> </button>
        <button onClick={funcion1}><span className='brailleCode'>⠂</span></button>
        <button onClick={funcion2}><span className='brailleCode'>⠆</span></button>
        <button onClick={funcion3}><span className='brailleCode'>⠒</span></button>
        <button onClick={funcion4}><span className='brailleCode'>⠲</span></button>
        <button onClick={funcion5}><span className='brailleCode'>⠢</span></button>
        <button onClick={funcion6}><span className='brailleCode'>⠖</span></button>
        <button onClick={funcion7}><span className='brailleCode'>⠶</span></button>
        <button onClick={funcion8}><span className='brailleCode'>⠦</span></button>
        <button onClick={funcion9}><span className='brailleCode'>⠔</span></button>
      </div>
    </div>
  )
}

export default KEyboard
