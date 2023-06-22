import React, { useEffect } from 'react'
import "./Translater.css"
import { useState } from 'react'

const Translater = () => {
  const [inputValue, setInputValue] = useState("")
  const [brailleValue, setBrailleValuee] = useState("")
  const [symbol, setSymbolls] = useState([])
  // now The braille Data
  const brailleSymbols = {
   " ":" ",
    A : "⠁", a :"⠁", "⠁" :"A",  "⠁" :"a",
    B :"⠃",  b :"⠃", "⠃" :"B",  "⠃" :"b",
    C :"⠉",  c :"⠉", "⠉" :"C",  "⠉" :"c",
    D :"⠙",  d :"⠙", "⠙" :"D",  "⠙" :"d",
    E :"⠑",  e :"⠑", "⠑" :"E",  "⠑" :"e",
    F :"⠋",  f :"⠋", "⠋" :"F",  "⠋" :"f",
    G :"⠛",  g :"⠛", "⠛" :"G",  "⠛" :"g", 
    H :"⠓",  h :"⠓", "⠓" :"H",  "⠓" :"h",
    I :"⠊",  i :"⠊", "⠊" :"I",  "⠊" :"i",
    J :"⠚",  j :"⠚", "⠚" :"J",  "⠚" :"j",
    K :"⠅",  k :"⠅", "⠅" :"K",  "⠅" :"k",
    L :"⠇",  l :"⠇", "⠇" :"L",  "⠇" :"l",
    M :"⠍",  m :"⠍", "⠍" :"M",  "⠍" :"m",
    N :"⠝",  n :"⠝", "⠝" :"N",  "⠝" :"n",
    O :"⠕",  o :"⠕", "⠕" :"O",  "⠕" :"o",
    P :"⠏",  p :"⠏", "⠏" :"P",  "⠏" :"p",
    Q :"⠟",  q :"⠟", "⠟" :"Q",  "⠟" :"q",
    R :"⠗",  r :"⠗", "⠗" :"R",  "⠗" :"r",
    S :"⠎",  s :"⠎", "⠎" :"S",  "⠎" :"s",
    T :"⠞",  t :"⠞", "⠞" :"T",  "⠞" :"t",
    U :"⠥",  u :"⠥", "⠥" :"U",  "⠥" :"u",
    V :"⠧",  v :"⠧", "⠧" :"V",  "⠧" :"v",
    W :"⠺",  w :"⠺", "⠺" :"W",  "⠺" :"w",
    X :"⠭",  x :"⠭", "⠭" :"X",  "⠭" :"x",
    Y :"⠽",  y :"⠽", "⠽" :"Y",  "⠽" :"y",
    Z :"⠵",  z :"⠵", "⠵" :"Z",  "⠵" :"z",
    0 : "⠴", "⠴" : "0",
    1 : "⠂", "⠂" : "1",
    2 : "⠆", "⠆" : "2",
    3 : "⠒", "⠒" : "3",
    4 : "⠲", "⠲" : "4",
    5 : "⠢", "⠢" : "5",
    6 : "⠖", "⠖" : "6",
    7 : "⠶", "⠶" : "7",
    8 : "⠦", "⠦" : "8",
    9 : "⠔", "⠔" : "9"
  }
  const changeFunction =(e)=>{

    setInputValue(e.target.value)
  }
  useEffect(()=>{
    let brailleText =""
      for (let i = 0; i < inputValue.length; i++) {
        const inputSinglw =inputValue.charAt(i);
      // const symbolls =[...symbol, brailleSymbols[inputSinglw]];
      brailleText +=brailleSymbols[inputSinglw]
      setSymbolls(brailleText)
    }
  },[inputValue])
  const brailConvert =()=>{
    setBrailleValuee(symbol)
  }
  const clearfield=()=>{
    setSymbolls("")
    setBrailleValuee('')
    setInputValue("")
  }
  const copyFunction=()=>{
    navigator.clipboard.writeText(brailleValue)
  }
  return (
    <div className='translaterpage'>
      <div className='inputFiels'>
      <textarea className='texttotranslate' placeholder='Enter Your Text' 
      value={inputValue} onChange={changeFunction} onKeyDown={changeFunction}/>
      <div className='texAreaBtn'>
      <button onClick={brailConvert}>Translate</button>
      <button onClick={clearfield}>Clear</button>
      </div>
      </div>
      <div className="outputField">
      <p className='textResult'> {brailleValue}</p>
      <div className='texAreaBtn'>
      <button onClick={copyFunction}>Copy</button>
      <button onClick={clearfield}>Clear</button>
      </div>
      </div>
    </div>
  )
}

export default Translater
