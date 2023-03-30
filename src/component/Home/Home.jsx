import React, { useEffect } from 'react'
import MovieListing from "../MovieListing/MovieListing"
import movieAPI from '../../common/apis/movieAPI'
import {APIKey} from '../../common/apis/movieApiKey'
const Home = () => {
  const text ='Avatar'
    // useEffect(() =>{
    //    const getMovie = async() =>{
    //      const response = await movieAPI.get(`?apiKey =${APIKey}%s=${text}&type=movie`)
    //      .catch((err) =>{
    //       console.log('Err', err)
    //      })
       
    //      console.log(response)
    //    }  
    //    getMovie()
    // },[])
    console.log(APIKey)
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  )
}

export default Home