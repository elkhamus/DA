import { useOutletContext } from "react-router"
import { Col, Row } from "react-bootstrap"
import Item from "./Item"

function Pizza() {
  const data = useOutletContext()
  const sizes = data.sizes
  const pizza = data.pizza

  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      {pizza.map((p, i) => <Col key={i}><Item p={p} sizes={sizes} /></Col>)}
    </Row>
  )
}

export default Pizza