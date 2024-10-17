import { useState } from "react"
import { FaRegHeart, FaHeart } from "react-icons/fa6"


function Card(props) {  
const {name, sex, age, height, img} = props.user
const [heart, setHeart] = useState(false)
// function heartChange() {
//     setHeart(!heart)
// }
    return (
        <div className="card">
            <span 
                onClick={()=> setHeart(!heart)} 
                className="heart"
            >
                {heart ? <FaHeart className="active"/> : <FaRegHeart />}
            </span>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <ul>
                <li>Cins: {sex}</li>
                <li>Yaş: {age}</li>
                <li>Boy: {height}</li>
            </ul>
        </div>
    )
}

export default Card