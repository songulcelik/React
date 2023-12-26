import React from 'react'
import { Card, CardBody, CardSubtitle, CardTitle, Col, Image, Row } from 'react-bootstrap'
import { LiaBirthdayCakeSolid } from "react-icons/lia";
const Person = ({id,image,name,age}) => {
  return (
    <Card className='mb-3'>
       <CardBody>
        <Row className='align-items-center'>
            <Col xs="3">
                <Image src={`img/${image}`} roundedCircle className='img-fluid'/>
            </Col>
            <Col xs="9">
            <CardTitle>{name}</CardTitle>
            <CardSubtitle><LiaBirthdayCakeSolid />{age}</CardSubtitle>
            </Col>
        </Row>
       </CardBody>
    </Card>
  )
}

export default Person