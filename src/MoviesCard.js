import React from 'react'
import './MoviesCard.css'
import ReactStars from "react-rating-stars-component";

const MoviesCard = ({data}) => {
  return (
    <div className='box-card'>

<img src={data.image }alt='movieimage'/>  

<div className='box-content'>
  
<h1> {data.name}</h1>
<p> {data.description} </p>

<div className='rate-btn'>
<ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
    value={data.rate}
    edit={false}
  />,
<button>show more</button>
</div>

</div>

    </div>
  )
}

export default MoviesCard
