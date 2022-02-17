import React, { useEffect,useState } from 'react'
import Youtube from 'react-youtube'
import {imgUrl,API_KEY } from '../../Constants/Constants'
import axios from '../../axios'
import './RowPost.css'

function RowPost(props) {
  const [movies,setMovies] = useState([])
  const [urlId,setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.urls).then((response)=>{
      console.log(response.data.results)
      setMovies(response.data.results)
    })
   },[])
   

   const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

 const handlerMovie = (id)=>{
   console.log(id)
   axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
     if(response.data.results.length!==0){
       console.log(response.data.results[0])
       setUrlId(response.data.results[0])
     }
       else{
         console.log('Array is empty')
       }     

   })

 }
  return (
    <div className='row'>
        <h1>{props.title}</h1>
        <div className='posters'>
          {movies.map((obj)=>
            <img onClick={()=>handlerMovie(obj.id)} className= {props.isSmall ? 'small_poster':'poster'} alt='poster' src={`${imgUrl+obj.backdrop_path}`}></img>
          )}
        </div>
      { urlId &&  <Youtube opts={opts}  videoId={urlId.key}/>}

    </div>
  )

}

export default RowPost