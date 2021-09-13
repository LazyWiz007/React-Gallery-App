import React from 'react'
import { Card } from 'react-bootstrap'
import Pht from "./images/Gallrey.png"
export default function InCard() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Pht}/>
            <Card.Body>
                <Card.Title>Gallery</Card.Title>
                <Card.Text>
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}
