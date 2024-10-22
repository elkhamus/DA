import { Outlet } from "react-router"
import { Container } from "react-bootstrap"
import Footer from "./Footer"
import Header from "./Header"

const data = {
  sizes: {"m":"Mini, 6sm","sm": "Kiçik, 23sm", "md": "Orta, 30sm", "lg": "Böyük, 35sm"},
  pizza: [
    {name: "Spaysi İtalyan", prices: {"sm": 13, "md": 21, "lg": 27}, desc: "Pizza sousu, İtalyan sosisi, Pepperoni, Pul bibər, Mozarella", img: "336x224_ee1a9a36f2aab60de8e957a309976f07.jpg"},
    {name: "Papa Miks", prices: {"lg": 20}, desc: "Çiken Barbekyu, Hot N Spaysi, Marqarita, Klassik Pepperoni", img: "336x224_3156bc879a85a6fc09d57895cd45d04a.jpg"},
    {name: "Qarışıq Ət BBQ", prices: {"sm": 15, "md": 23, "lg": 29}, desc: "BBQ Sousu, Mal əti, Pepperoni, İtalyan Sosisi, Vetçina, Mozzarella", img: "336x224_8a7726c327a867444654c77d733ea2c9.jpg"},
    {name: "Bonanza", prices: {"sm": 13, "md": 20, "lg": 25}, desc: "BBQ Sousu, Mal əti, Vetçina, Pomidor, Mozzarella, Halapeno bibəri", img: "336x224_d5b98a93267cc8e7cbf93275f7148e98.jpg"},
    {name: "Qarışıq ət", prices: {"sm": 14, "md": 22, "lg": 28}, desc: "Pizza sousu, Mal Əti, Pepperoni, İtalyan Sosisi, Vetçina, Mozzarella", img: "336x224_3905c3a91f3b9c786a289f6b8d9e6713.jpg"},
    {name:"Super Papa",prices: {"sm": 12, "md": 18, "lg": 23}, desc: "Pizza sousu, Pepperoni, İtalyan Sosisi, Vetçina, Göbələk, Yaşıl Bibər, Qara Zeytun, Mozzarella", img: "336x224_7fb7c5adb0f5a2b332b78dfa393f2378.jpg"},
    {name:"Cheddar Dabl Burger",prices: {"sm": 12, "md": 20, "lg": 25}, desc: "1000 ada sousu, Mal əti, Pomidor, Mozzarella, Cheddar", img: "336x224_272af9ab17eaa7d57062c927e94164b1.jpg"},
    {name:"Cheddar Çiken Club",prices: {"sm": 11, "md": 18, "lg": 22}, desc: "Pizza sousu, Qril toyuğu, Pomidor, Vetçina, Mozzarella, Cheddar, Ranç sousu", img: "336x224_12e23e16599c1a699587c3ec857fcb8f.jpg"},
    {name:"Litl İtaliya" , prices: {"sm": 11, "md": 17, "lg": 22}, desc: "Pizza sousu, Pepperoni, İtalyan Sosisi, Göbələk, Qara Zeytun, Oreqano, Mozzarella", img: "336x224_6d96f0c3d4f91efe33b75e40d8a1ea0c.jpg"},
    {name:"Çiken Çizburger" , prices: {"sm": 12, "md": 19, "lg": 23}, desc: "1000 ada sousu, Qril Toyuğu, Turşu Xiyar, Pomidor, Mozzarella", img: "336x224_55dc22481753618bf6d61dfb087099f2.jpg"},
    {name:"Dabl Çizburger" , prices: {"sm": 12, "md": 19, "lg": 23}, desc: "1000 ada sousu, Mal Əti, Turşu Xiyar, Pomidor, Mozzarella", img: "336x224_394544511c5df922b24da5c78f5b3dd2.jpg"},
    {name:"Çiken Göbələk" , prices: {"sm": 12, "md": 19, "lg": 23}, desc: "Göbələk sousu, Qril toyuğu, Turşu xiyar, Göbələk, Mozzarella", img: "336x224_e3a441242ae92df92dd6fb3b523d2fb1.jpg"},
    {name:"Havay" , prices: {"m":5.50,"sm": 12, "md": 19, "lg": 23}, desc: "Pizza sousu, Qril Toyuğu, Ananas, Ekstra Mozzarella", img: "336x224_245ffe808437b1c9e2d782bf320baa6c.jpg"},
    {name:"Marinera" , prices: {"m":5.50,"sm": 10, "md": 18, "lg": 22}, desc: "Pizza sousu, Qril Toyuğu, Ananas, Ekstra Mozzarella", img: "336x224_c80b4c545b7e8884beded2d4c2f5551b.jpg"},
    {name:"Qril Çiken Parmezan" , prices: {"m":5.50,"sm": 11, "md": 17, "lg": 21}, desc: "Pizza sousu, Sarımsaqlı Parmezan sousu, Qril Toyuğu, Vetçina, Pomidor, Mozzarella, Halapeno Bibəri", img: "336x224_f077c7209864bc10ba687d9c5fd2bd54.jpg"},
    {name:"Çiken Parmezan" , prices: {"sm": 11, "md": 17, "lg": 21}, desc: "Pizza sousu, Sarımsaqlı parmezan sousu, Çiken Poppers, Göbələk, Mozzarella, İtalyan Ədviyyatları", img: "336x224_b13328cf37671350c49a3d6644504d39.jpg"},
    {name:"Çiken Ranç" , prices: {"m":5.50,"sm": 11, "md": 16, "lg": 21}, desc: "Pizza sousu, Sarımsaqlı parmezan sousu, Çiken Poppers, Göbələk, Mozzarella, İtalyan Ədviyyatları", img: "336x224_a875457644d14093cd4bc0a47f647576.jpg"},
    {name:"Acılı Çiken Ranç" , prices: {"m":5.50,"sm": 11, "md": 16, "lg": 22}, desc: "Ranç Sousu, Qril Toyuğu, Göbələk, Halapeno Bibəri, Pomidor, Mozzarella", img: "336x224_c74c8cc3aa537477ed5fdc54d3214e41.jpg"},
    {name:"Çiken Barbekyu" , prices: {"sm": 10, "md": 16, "lg": 22}, desc: "Qril Toyuq, Göbələk, Barbekyu Sousu, Mozzarella Pendiri", img: "336x224_15135b56809cd2a5d12ca173e680e81e.jpg"},
    {name:"Vestern Barbekyu" , prices: {"m":5.50,"sm": 10, "md": 16, "lg": 22}, desc: "Pizza sousu, Mal Əti, Göbələk, Mozzarella, Barbekyu Sousu", img: "336x224_7d15ebac61849618ea980d6c70b520bf.jpg"},
    {name:"Nyu Orleans" , prices: {"sm": 10, "md": 15, "lg": 21}, desc: "Sarımsaq Sousu, Qril Toyuğu, Qarğıdalı, Göbələk, Yaşıl Bibər, Mozzarella", img: "336x224_70c8a9940967f04db780cde16feeeccf.jpg"},
    {name:"Rastik" , prices: {"m":5.50,"sm": 10, "md": 15, "lg": 20}, desc: "BBQ Sousu, Göbələk, Pepperoni, Italyan Sosisi, Yaşıl bibər, Mozzarella", img: "336x224_adeb5a28a7792448f0ee2127948fa01c.jpg"},
    {name:"4 Pendir" , prices: {"sm": 11, "md": 16, "lg": 22}, desc: "Pizza sousu, Mozzarella ,Feta ,Parmezan, Cheddar", img: "336x224_5e5aaab1bded23b900fb49edce788888.jpg"},
    {name:"Hot and Spaysi" , prices: {"m":5.50}, desc: "Pizza sousu, Mal Əti, Pomidor, Yaşıl Bibər, Halapeno Bibəri, Mozzarella", img: "336x224_4933b236cad07c946ddd5ea4b41cf1cf.jpg"},
    {name:"Hot N Spaysi" , prices: {"sm": 10, "md": 16, "lg": 21}, desc: "Pizza sousu, Mal Əti, Pomidor, Yaşıl Bibər, Halapeno Bibəri, Mozzarella", img: "336x224_4933b236cad07c946ddd5ea4b41cf1cf.jpg"},
    {name:"Meksika" , prices: {"m":5.50,"sm": 9, "md": 15, "lg": 20}, desc: "Pizza sousu, Qril Toyuğu, Pomidor, Göbələk, Yaşıl Bibər, Halapeno Bibəri, Mozzarella", img: "336x224_b4765fad0ffac0ed9bf9b5c512ca552a.jpg"},
    {name:"Amerikan Hot" , prices: {"m":5.50,"sm": 9, "md": 14, "lg": 19}, desc: "Pizza sousu, Mozzarella pendiri, Pepperoni, Halapeno Bibəri", img: "336x224_ec836ad55fb828a2816c7f52d317cabb.jpg"},
    {name:"Klassik Pepperoni" , prices: {"m":5.50,"sm": 9, "md": 14, "lg": 19}, desc: "Pizza sous, Pepperoni, Ekstra Mozzarella", img: "336x224_35c4eb8d6c59dd507e7cce1f2c15a987.jpg"},
    {name:"Karnaval" , prices: {"m":5.50,"sm": 9, "md": 14, "lg": 19}, desc: "Pizza Sous, Göbələk, Qara Zeytun, Pepperoni, Mozzarella", img: "336x224_09e9a3d604c6811fe50a621c3d3940c8.jpg"},
    {name:"Vegetarian" , prices: {"m":5.50,"sm": 9, "md": 13, "lg": 18}, desc: "Pizza sous, Pomidor, Göbələk, Yaşıl Bibər, Qara Zeytun, Mozzarella", img: "336x224_e4f2d3721cdf82009bce80eed2ee655e.jpg"},
    {name:"Acılı Vegetarian" , prices: {"m":5.50,"sm": 9, "md": 13, "lg": 18}, desc: "Pizza Sous, Halapeno Bibəri, Pomidor, Göbələk, Qara Zeytun, Yaşıl Bibər, Mozzarella", img: "336x224_b410922d6c221fedffd15777f463bb02.jpg"},
    {name:"Yunan" , prices: {"sm": 8, "md": 13, "lg": 16}, desc: "Pizza sousu, Pomidor, Pepperonçini, Feta Pendiri, Mozzarella, Qara Zeytun, Oreqano", img: "336x224_f537b94b02b4e15bf61f1aad74b7a77b.jpg"},
    {name:"Marqarita" , prices: {"m":5.50,"sm": 8, "md": 13, "lg": 16}, desc: "Pizza sousu, Ekstra Mozzarella, Pomidor, Oreqano", img: "336x224_f8da8b4b68e91c8a697aed2baf03f041.jpg"},
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
