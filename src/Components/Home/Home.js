import React from 'react'
import "./Home.css"
import BrailleheadingImg from "../Images/Braille_closeup.jpg"
import Braille from "../Images/Braille.jpg"
import HistoryImg from "../Images/DSC_4050-MR-Braille.jpg"

const Home = () => {
  return (
    <div>
      <div className='HomeHero'>
        <h1 className='herotitle'>Hello, Welcome to my Braille web App.</h1>
        <p>This is my web app. Please navigate the website and see if it is usefull or not.</p>
      </div>
      <div className='whatIsBrail'>
      <img className='braill1stImg' src={BrailleheadingImg} alt="heading"/>
      <div className='homeData'>
      <h2>What is Braille?</h2>
      <p>Braille is a tactile writing system used by people who are visually impaired, 
        including people who are blind, deafblind or who have low vision. It can be 
        read either on embossed paper or by using refreshable braille displays that 
        connect to computers and smartphone devices. Braille can be written using a 
        slate and stylus, a braille writer, an electronic braille notetaker or with 
        the use of a computer connected to a braille embosser.</p>
      </div>
      </div>
        <div className='whatIsBrail'>
        <p>Braille is named after its creator, Louis Braille, a Frenchman who lost his 
          sight as a result of a childhood accident. In 1824, at the age of fifteen, 
          he developed the braille code based on the French alphabet as an improvement 
          on night writing. He published his system, which subsequently included musical 
          notation, in 1829.[1] The second revision, published in 1837, was the first 
          binary form of writing developed in the modern era.</p>
          <img src={Braille} alt="creator"/>
        </div>
          <h2 className='history'>History:</h2>
          <div className='braillHistory'>
          <img src={HistoryImg} alt='History'/>
          <p>Braille was based on a tactile code, now known as night writing, developed by Charles Barbier.
             (The name "night writing" was later given to it when it was considered as a means for soldiers 
             to communicate silently at night and without a light source, but Barbier's writings do not use 
             this term and suggest that it was originally designed as a simpler form of writing and for the 
             visually impaired.) In Barbier's system, sets of 12 embossed dots were used to encode 36 
             different sounds. Braille identified three major defects of the code: first, the symbols represented 
             phonetic sounds and not letters of the alphabet – thus the code was unable to render the orthography 
             of the words. Second, the 12-dot symbols could not easily fit beneath the pad of the reading finger. 
             This required the reading finger to move in order to perceive the whole symbol, which slowed the 
             reading process. (This was because Barbier's system was based only on the number of dots in each 
             of two 6-dot columns but not the pattern of the dots.) Third, the code did not include symbols for 
             numerals or punctuation. Braille's solution was to use 6-dot cells and to assign a specific pattern 
             to each letter of the alphabet. Braille also developed symbols for representing numerals and punctuation.
             At first, Braille was a one-to-one transliteration of the French alphabet, but soon various abbreviations 
             (contractions) and even logograms were developed, creating a system much more like shorthand.
             Today, there are braille codes for over 133 languages. In English, some variations in the braille codes 
             have traditionally existed among English-speaking countries. In 1991, work to standardize the braille 
             codes used in the English-speaking world began. Unified English Braille (UEB) has been adopted in all 
             seven member countries of the International Council on English Braille (ICEB) as well as Nigeria.

For blind readers, Braille is an independent writing system, rather than a code of printed orthography</p>
          </div>
          <h2 className='cradit'>Designed and developed by <a href='https://sidemenuportfolio.netlify.app/' target='_blank'>Jobayer Rahman</a></h2>
    </div>
  )
}

export default Home
