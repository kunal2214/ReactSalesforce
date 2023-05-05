import React,{useEffect, useState} from 'react'
import axios from 'axios'

function Contact() {
  const[data, setData] = useState("")
  const getData = async() =>{
    const res = await axios.get('http://localhost:5000/contact')
    console.log(res.data)
    setData(res.data)
  }

    useEffect(() => {
        getData()
    }, [])
  return (
    <div>
      <h2>Contact : </h2>
      {data.length > 0 && (
            <ul>
            {data.map(res => (
                <li key={res.Id}>{res.Id} -- {res.Name} -- {res.Phone}</li>
            ))}
            </ul>
        )}

    </div>
  )
}

export default Contact