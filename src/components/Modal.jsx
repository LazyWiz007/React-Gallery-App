import React,{useState }from 'react'
import {Modal} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import CarouselOne from './Carousel';


function MyVerticallyCenteredModal(props) {
  const [i, seti] = useState(0)

  const RandomNoGen = () => {

    seti(Math.floor(Math.random() * 10))
    
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <CarouselOne i={i}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={RandomNoGen}>Next</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal
