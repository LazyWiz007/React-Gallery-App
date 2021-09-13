import React,{useEffect, useState} from 'react'
import { Carousel } from 'react-bootstrap'


function CarouselOne(props) {

  const [imge, setImge] = useState([])


  
  

  useEffect(() => {
    
    fetch('https://api.unsplash.com/photos/?client_id=XNAi9EK9lwcu30Be1DgtwfRw7z00EpSJQTR6a4jyJ5c')
    .then(response => response.json())
    .then(json => setImge(json[props.i].links.download))

  })
    return (
        <div>
        <Carousel fade>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imge}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </div>
    )
}

export default CarouselOne
