let n = 18
let name = 'React'
let str = `Welcome to ${name}`
let jsx = <h2>{str}</h2>
let img = 'https://seeklogo.com/images/R/react-logo-65B7CD91B5-seeklogo.com.png'
let arr = ['Bir', 'Iki', 'Uc']
let obj = {name: 'Elxan', age: 19}
let style = {
  width: '200px',
  boxShadow: '3px 2px 10px silver'
}
function getElxansInfo(){  
  return `${obj.name} - ${obj.age}`
}

function App() {
  return (
    <>
      <div>{jsx}{n}</div>
      <p><img src={img} style={style} alt="" /></p>
      <p>{arr}</p>
      <p>{getElxansInfo()}</p>
    </>
  )
}

export default App
