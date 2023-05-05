import React,{useEffect, useState} from 'react'
import axios from 'axios'

function Home() {
    const[val, setVal] = useState([])
    const getData = async() =>{
        const res = await axios.get('http://localhost:5000/')
        console.log(res.data)
        setVal(res.data)
      }
    
        useEffect(() => {
            getData()
        }, [])
  return (
    <div>
        <h2>Account:</h2>
        {val.length > 0 && (
            <ul>
            {val.map(res => (
                <li key={res.Id}>{res.Id} -- {res.Name} </li>
            ))}
            </ul>
        )}

    </div>
  )
}

export default Home