import { Outlet } from "react-router"
import { Container } from "react-bootstrap"
import Footer from "./Footer"
import Header from "./Header"

const data = {
  pizza: [
    {name: "Spaysi İtalyan", desc: "Pizza sousu, İtalyan sosisi, Pepperoni, Pul bibər, Mozarella", img: "336x224_ee1a9a36f2aab60de8e957a309976f07.jpg"},
    {name: "Papa Miks", desc: "Çiken Barbekyu, Hot N Spaysi, Marqarita, Klassik Pepperoni", img: "336x224_3156bc879a85a6fc09d57895cd45d04a.jpg"},
    {name: "Qarışıq Ət BBQ", desc: "BBQ Sousu, Mal əti, Pepperoni, İtalyan Sosisi, Vetçina, Mozzarella", img: "336x224_8a7726c327a867444654c77d733ea2c9.jpg"},
    {name: "Bonanza", desc: "BBQ Sousu, Mal əti, Vetçina, Pomidor, Mozzarella, Halapeno bibəri", img: "336x224_d5b98a93267cc8e7cbf93275f7148e98.jpg"},
    {name: "Qarışıq ət", desc: "Pizza sousu, Mal Əti, Pepperoni, İtalyan Sosisi, Vetçina, Mozzarella", img: "336x224_3905c3a91f3b9c786a289f6b8d9e6713.jpg"}
  ]
} 

function App() {
  return (
    <>
      <Header />
      <Container className="py-3">
        <Outlet context={data} />
      </Container>
      <Footer />
    </>
  )
}

export default App
