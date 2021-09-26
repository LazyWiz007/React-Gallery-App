import './App.css';
import React,{useState} from 'react';
import one from './components/images/one.jpg' 
import four from './components/images/four.jpg' 
import three from './components/images/three.jpg' 
import two from './components/images/two.jpg' 
import Strs from "./components/Stories"
import Bubbles from './components/stroies'
import '@gobistories/gobi-web-integration'


function App() {

 
  const [arr, setArr] = useState([one,four,three,two])

  return (
    <div className="App">

    <Strs clasName="str" stories={arr}/>
    <h1>Example stories:</h1>
    <Bubbles/>
    
  
    

    </div>
  );
}

export default App;
