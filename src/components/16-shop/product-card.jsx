import React from 'react'
import { Button, Card, CardSubtitle } from 'react-bootstrap'

const ProductCard = ({id,image,title,desc,price}) => {
    const AddToCard = () => {
      alert(`${title} isimli urun sepete eklendi.`)
    }
    
  return (
    <Card>
    <Card.Img className='w-auto' fluid variant="top" src={`img/${image}`} />
    <Card.Body className='text-center'>
      <Card.Title className='mt-5 mt-sm-3'>{title}</Card.Title>
      <Card.Text>
        {desc}
      </Card.Text>
      <CardSubtitle>${price}</CardSubtitle>
      <Button variant="outline-warning" className='mt-3' onClick={AddToCard}>AddToCard</Button>
    </Card.Body>
  </Card>
  )
}

export default ProductCard