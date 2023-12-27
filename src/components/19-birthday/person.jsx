import React from 'react'
import { Card, CardBody, CardSubtitle, CardTitle, Col, Image, Row } from 'react-bootstrap'
import { LiaBirthdayCakeSolid, LiaTrashAlt } from "react-icons/lia";
const Person = ({id,image,name,age,deletePerson}) => {
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
       <span className='position-absolute end-0 me-3 mt-2 fs-2 text-danger ' style={{cursor:"pointer"}} onClick={() =>deletePerson(id)}>
        <LiaTrashAlt/>
       </span>
    </Card>
  )
}

export default Person