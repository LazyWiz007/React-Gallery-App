import './App.css';
import MyVerticallyCenteredModal from './components/Modal'
import { Button } from 'react-bootstrap';
import React,{useState,useEffect} from 'react';
// import InCard from './components/Card';
// import Pht from "./components/images/Gallrey.png"
// import Txt from "./components/images/Txt.png"
import Strs from "./components/Stories"
import axios from 'axios';

function App() {

  const [str, setStr] = useState([])
  const [modalShow, setModalShow] = React.useState(false);
  const [imge, setImge] = useState([])
  const [i, seti] = useState(0)
  const [arr, setArr] = useState(["https://images.unsplash.com/photo-1631342566940-d9caf7cff0de?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"])
  
  function abc(){

    for (var j=0;j<10;j++)
    {
      seti(j);
     fetch('https://api.unsplash.com/photos/?client_id=XNAi9EK9lwcu30Be1DgtwfRw7z00EpSJQTR6a4jyJ5c')
    .then(response => response.json())
    .then(json =>  setArr([...arr,json[i].links.download])); 
    }
  }

  // useEffect(() => {
  //   axios.get('https://api.unsplash.com/photos/?client_id=XNAi9EK9lwcu30Be1DgtwfRw7z00EpSJQTR6a4jyJ5c')
  //   .then(res => setArr(res.data.urls));

    

  // }, [])

  


  return (
    <div className="App">

    <Strs clasName="str" stories={arr}/>
    
    <button onClick={abc}>Next</button>
    
    {/* <Button className="Alb1" variant="" onClick={() => setModalShow(true)}>
    <img width="100px" src={Pht}/>
    </Button>

    <Button className="Alb1" variant="" onClick={() => setModalShow(true)}>
    <img width="100px" src={Txt}/>
    </Button>

    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}

    </div>
  );
}

export default App;
