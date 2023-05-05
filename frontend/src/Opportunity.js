import React,{useEffect, useState} from 'react'
import axios from 'axios'

function Opportunity() {
  const[data, setData] = useState([])
  const getData = async() =>{
    const res = await axios.get('http://localhost:5000/opportunity')
    console.log(res.data)
    setData(res.data)
  }

    useEffect(() => {
        getData()
    }, [])
  return (
    <div>
      <h2>Opportunity: </h2>
      {data.length > 0 && (
            <ul>
            {data.map(res => (
                <li key={res.Id}>{res.Id} -- {res.Name}</li>
            ))}
            </ul>
        )}
    </div>
  )
}

export default Opportunity