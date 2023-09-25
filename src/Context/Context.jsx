import axios from "axios"
import { createContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { SwiperSlide } from "swiper/react"
import { Card } from "../Component/home/card"

export const HeaderContext = createContext()
export const HeaderContextProvider = ({children}) => {
    const [data2,setData2] = useState('')
    
    useEffect(() => {
    
    const myFunction2 = async ()  => {
    
    
        const options = {
            method: 'GET',
            url: 'https://netflix54.p.rapidapi.com/search/',
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
              // console.log(response.data.titles);
              const movieMap2 = response.data.titles.map((movie) => (
                
                <SwiperSlide>
                  <Link className="link-kino" to='/tarjimaKino'>
                  <Card
                    movieImg={movie.jawSummary.backgroundImage.url}
                    text={movie.jawSummary.title}
                    />
                  </Link>
                </SwiperSlide>
              ))
              setData2(movieMap2)
          } catch (error) {
              console.error(error);
          }
        
     
    }
    myFunction2()
    },[])


      let info = {
        data2,
        setData2 

    }

    
    return (
        <HeaderContext.Provider value={info}>
            {children}
        </HeaderContext.Provider>
    )
}