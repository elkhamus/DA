import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App'
import Card from './Card'
import Counter from './Counter'

const data = [
  {name:"Elxan", sex:"m", age:"19", height:"180", img:"https://media.licdn.com/dms/image/v2/D4D03AQEjNNf0N66YnA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727692690688?e=1733356800&v=beta&t=uTvIQEpQTqsXo0J7DH90CzdrQSnPmyejPl5QnJU8l9U"},
  {name:"Şahin", sex:"m", age:"22", height:"170", img:"https://cdn-icons-png.flaticon.com/512/149/149071.png"},
  {name:"Tofiq", sex:"m", age:"20", height:"177", img:"https://media.licdn.com/dms/image/v2/D4D03AQFNnATw4GQU_Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1700586875372?e=1733356800&v=beta&t=wI9qPDyIKLUqlM0o-4RjUnipCbCsE9EeJBVp7E8-5Rs"}
]

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <>
    <Counter />
    <div className="flex">
      {data.map((item, i) => <Card user={item} key={i} />)}
    </div>
    </>
  ) 
