import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, History } from "swiper/modules";
import axios from "axios";
import { Card } from "../card";
import { Link } from "react-router-dom";
import { HeaderContext } from "../../../Context/Context";

export  function App5() {
  const {data2} = useContext(HeaderContext)


    //     const [data2,setData2] = useState('')
    // useEffect(() => {
    
    // const myFunction2 = async ()  => {
    
    
    //     const options = {
    //         method: 'GET',
    //         url: 'https://netflix54.p.rapidapi.com/search/',
    //         params: {
    //           query: 'stranger',
    //           offset: '4',
    //           limit_titles: '50',
    //           limit_suggestions: '20',
    //           lang: 'en'
    //         },
    //         headers: {
    //           'X-RapidAPI-Key': 'fb1e8e0073mshd30150cf75d6ceep1275f3jsn492670931fa6',
    //           'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    //         }
    //       };
          
    //       try {
    //           const response = await axios.request(options);
    //           const movieMap2 = response.data.titles.map((movie) => (
    //             <SwiperSlide>
    //                 <Link className="link-kino">
    //                 <Card
    //                 movieImg={movie.jawSummary.backgroundImage.url}
    //                 text={movie.jawSummary.title}
    //                 />
    //                 </Link>
    //             </SwiperSlide>
    //           ))
    //           setData2(movieMap2)
    //       } catch (error) {
    //           console.error(error);
    //       }
        
     
    // }
    // myFunction2()
    // },[])
  return (
    <>
      <Swiper
        navigation={true}
        history={{
          key: "slide"
        }}
        modules={[Navigation, Pagination, History]}

        breakpoints= {{
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
        {data2.slice(40,50)}
      </Swiper>
    </>
  );
}
export default App5















