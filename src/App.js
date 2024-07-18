import logo from './logo.svg';
import './App.css';
import Movies from './Movies';
import MoviesCard from './MoviesCard';
import AddMovie from './AddMovie';
import { useState } from 'react';
import ReactStars from "react-rating-stars-component";

function App() {

  const [allmovies , setallmovies]= useState(Movies)
  console.log(allmovies)
  const ajoutermovie=(x)=>{
return (setallmovies([x,...allmovies]))

  }

  const [search , setsearch]= useState("")
const [newrate,setnewrate]=useState(0)


  const ratingChanged = (y) => {
    return(setnewrate(y));
  };
  return (
<div>

<AddMovie   fnct={ajoutermovie}/>
<input type="text" placeholder='search'   onChange={(e)=>setsearch(e.target.value) } />

<ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
    edit={true}
  />,

    <div className="box-content">
    {allmovies.filter((el)=>el.name.toLowerCase().includes(search.toLowerCase()) && el.rate>=newrate).map((el)=><MoviesCard data={el}/>)}  
    </div>

    
    </div>
  );
}

export default App;
