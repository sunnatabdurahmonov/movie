import React, { useEffect, useState } from 'react'
import '../kinoId/kinoId.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios';

 export const KinoId = () => {
    const { kinoId } = useParams();
    console.log(kinoId);
    const [kinoId1,setKinoId1] = useState('')
    useEffect(() => {
    
        const mykinoId = async ()  => {
        
        
            const options = {
                method: 'GET',
                url: `https://netflix54.p.rapidapi.com/search/${kinoId}`,
                params: {
                  query: 'stranger',
                  offset: '4',
                  limit_titles: '50',
                  limit_suggestions: '20',
                  lang: 'en'
                },
                headers: {
                  'X-RapidAPI-Key': 'ba543beb6cmsh53468101855d482p1c46c7jsn65cb1da67182',
                  'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
                }
              };
              
              try {
                  const response = await axios.request(options);
                  const kinoIdmap = response.data.titles.map((kino) => (
                    <img src={kino.jawSummary.backgroundImage.url} alt="" />
                  ))
                  setKinoId1(kinoIdmap)
              } catch (error) {
                  console.error(error);
              }
            
         
        }
        mykinoId()
        },[])


  return (
    <div>
      {kinoId1}
    </div>
  )
}

export default KinoId
