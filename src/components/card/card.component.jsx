import React from 'react'
import '../card/card.style.css'

const Card = ({monster})=>{
  return(
    <div className="card-container">
      <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt="monster"/>
      <h1>{monster.name}</h1>
      <small>{monster.email}</small>
      <small>{monster.address.city}</small>
    </div>
  )
}

export default Card