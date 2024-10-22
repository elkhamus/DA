import { useState } from 'react'
import { Button, Card, Form, InputGroup } from 'react-bootstrap'

function Item({p, sizes}) {
  const {name, desc, img, prices} = p 
  const path = "./assets/img/"
  const [price, setPrice] = useState( Object.values(prices)[0] )
  const [size, setSize] = useState( Object.keys(prices)[0] )
  const [quant, setQuant] = useState(1)

  function sizeChange(e) { 
    setSize(e.target.value)
    setPrice(prices[e.target.value])
  }

  return (
    <Card>
      <Card.Img src={path + img} alt={name} variant="top" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <div>
          <Form.Select onChange={sizeChange}>
            {Object.keys(prices).map(s => <option value={s}>{sizes[s]}</option>)}
          </Form.Select>
          <InputGroup className="m-3">
            <Button onClick={()=>setQuant(quant > 1 ? quant - 1 : quant)} variant="outline-secondary">-</Button>
            <h5 className='px-3 pt-2'>{quant}</h5>
            <Button onClick={()=>setQuant(quant + 1)} variant="outline-secondary">+</Button>
          </InputGroup>
        </div>
        <h3>{quant * price}₼</h3>
        <Button variant="primary">Ye məni</Button>
      </Card.Body>
    </Card>
  )
}

export default Item