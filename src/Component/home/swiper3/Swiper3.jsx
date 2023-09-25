import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import axios from 'axios';
import { Card2 } from './card2';
import { Link } from 'react-router-dom';

export function App3() {



    const [data3,setData3] = useState('')
    useEffect(() => {
    
    const myFunction3 = async ()  => {
    
    
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
              const movieMap2 = response.data.titles.map((movie) => (
                <SwiperSlide>
                     <Link className="link-kino" to='/tarjimaKino'>
                     <Card2
                    movie2Img={movie.jawSummary.backgroundImage.url}
                    text2={movie.jawSummary.title}
                    />
                     </Link>
                </SwiperSlide>
              ))
              setData3(movieMap2)
          } catch (error) {
              console.error(error);
          }
        
     
    }
    myFunction3()
    },[])
  return (
    <>
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}

        breakpoints= {{
            1056: {
                slidesPerView: 1,
                spaceBetween: 10
              },
            800: {
              slidesPerView: 4,
              spaceBetween: 20
            },
            550: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            400: {
                slidesPerView: 2,
                spaceBetween: 20
              }
          }}
        className="mySwiper"
      >
        {data3.slice(0,6)}
       
      </Swiper>
    </>
  );
}
export default App3
