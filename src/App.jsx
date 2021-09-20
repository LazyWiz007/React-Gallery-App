import './App.css';
import MyVerticallyCenteredModal from './components/Modal'
import { Button } from 'react-bootstrap';
import React,{useState,useEffect} from 'react';
import one from './components/images/one.jpg' 
import four from './components/images/four.jpg' 
import three from './components/images/three.jpg' 
import two from './components/images/two.jpg' 
// import InCard from './components/Card';
// import Pht from "./components/images/Gallrey.png"
// import Txt from "./components/images/Txt.png"
import Strs from "./components/Stories"


function App() {

  const [str, setStr] = useState([])
  const [modalShow, setModalShow] = React.useState(false);
  const [imge, setImge] = useState([])
  const [i, seti] = useState(0)
  const [arr, setArr] = useState([one,four,three,two])
  
  // function abc(){

  //   for (var j=0;j<10;j++)
  //   {
  //     seti(j);
  //    fetch('https://api.unsplash.com/photos/?client_id=XNAi9EK9lwcu30Be1DgtwfRw7z00EpSJQTR6a4jyJ5c')
  //   .then(response => response.json())
  //   .then(json =>  setArr([...arr,json[i].links.download])); 
  //   }
  // }

  // useEffect(() => {
  //   axios.get('https://api.unsplash.com/photos/?client_id=XNAi9EK9lwcu30Be1DgtwfRw7z00EpSJQTR6a4jyJ5c')
  //   .then(res => setArr(res.data.urls));

    

  // }, [])

  


  return (
    <div className="App">

    <Strs clasName="str" stories={arr}/>
    
    {/* <button >Next</button> */}
    
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
