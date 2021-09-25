import './App.css';
import MyVerticallyCenteredModal from './components/Modal'
import { Button } from 'react-bootstrap';
import React,{useState,useEffect} from 'react';
import one from './components/images/one.jpg' 
import four from './components/images/four.jpg' 
import three from './components/images/three.jpg' 
import two from './components/images/two.jpg' 

import Strs from "./components/Stories"


function App() {

  const [str, setStr] = useState([])
  const [modalShow, setModalShow] = React.useState(false);
  const [imge, setImge] = useState([])
  const [i, seti] = useState(0)
  const [arr, setArr] = useState([one,four,three,two])
  
  return (
    <div className="App">

    <Strs clasName="str" stories={arr}/>
    </div>
  );
}

export default App;
