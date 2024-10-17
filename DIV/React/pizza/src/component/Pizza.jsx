import { useOutletContext } from "react-router"
import Item from "./Item"

function Pizza() {
  const data = useOutletContext()

  return (
    <div>
      {data.pizza.map((p, i) => <Item key={i} />)}
    </div>
  )
}

export default Pizza