import './App.css';
import RoundNevBall from './Components/RoundNevBall/RoundNevBall';
import {Routes , Route} from "react-router-dom"
// All pages
import Home from  "./Components/Home/Home"
import Dev from  "./Components/Dev/Dev"
import KEyboard from  "./Components/KEyboard/KEyboard"
import Translater from  "./Components/Translater/Translater"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Keyboard' element={<KEyboard/>}/>
          <Route path='/Translater' element={<Translater/>}/>
          <Route path='/Dev' element={<Dev/>}/>
        </Routes>
        <RoundNevBall className="nevbar"/>
      </header>
    </div>
  );
}

export default App;
