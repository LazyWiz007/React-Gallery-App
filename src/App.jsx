import './App.css';
import MyVerticallyCenteredModal from './components/Modal'
import { Button } from 'react-bootstrap';
import React,{useState} from 'react';
import InCard from './components/Card';
import Pht from "./components/images/Gallrey.png"
import Txt from "./components/images/Txt.png"

function App() {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="App">

    <Button className="Alb1" variant="" onClick={() => setModalShow(true)}>
    <img width="100px" src={Pht}/>
    </Button>

    <Button className="Alb1" variant="" onClick={() => setModalShow(true)}>
    <img width="100px" src={Txt}/>
    </Button>

    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </div>
  );
}

export default App;
