import React, { useEffect, useState } from 'react'
import {API_KEY,imgUrl} from '../../Constants/Constants';
import axios from '../../axios';
import "./Banner.css";
function Banner() {
  const [movie,setMovie] = useState()
    useEffect(() => {
       axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
     //console.log(response.data.results[0])
     //setMovie(response.data.results[2])
     setMovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])
   })
   },[])

  
  
  return (
    <div 
    style={{backgroundImage:`url(${movie ? imgUrl+movie.backdrop_path :""})`}}
     className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title :""}</h1>
        </div>
        <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My List</button>
        </div>
                <h1 className='description'>{movie ? movie.overview :""}</h1>
                <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner