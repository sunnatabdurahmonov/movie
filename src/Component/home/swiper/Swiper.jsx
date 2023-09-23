
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';

export  function App() {
    const [movie,setMovie] = useState('')
  
    useEffect(() => {
      const myFunction = async () => {
    
     
        const options = {
          method: 'GET',
          url: 'https://netflix54.p.rapidapi.com/title/trailers/',
          params: {
            id: '80057281',
            offset: '0',
            limit: '25',
            lang: 'en'
          },
          headers: {
            'X-RapidAPI-Key': 'fb1e8e0073mshd30150cf75d6ceep1275f3jsn492670931fa6',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
          }
        };
        
        try {
          const response = await axios.request(options);
          const movieMap = response.data.map((info) => (
            <SwiperSlide>
              <img className='home-img' src={info.details.interestingMoment._342x192.webp.value.url} alt={info.details.title} />
            </SwiperSlide>
          ))
          setMovie(movieMap)
        }catch (error) {
          console.error(error);
        }
      }
      myFunction()
    },[])
  return (
    <>
     <div className="container">
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {movie}
      </Swiper>
     </div>
    </>
  );
}
export default App