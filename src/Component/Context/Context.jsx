// import axios from "axios"
// import { useEffect, useState } from "react"
// import { SwiperSlide } from "swiper/react"

// export const HeaderContext = createContext()


// export const HeaderContextProvider = ({children}) => {

//     const [movie,setMovie] = useState('')


//     useEffect(() => {
//         const myFunction = async () => {
      
       
//           const options = {
//             method: 'GET',
//             url: 'https://netflix54.p.rapidapi.com/title/trailers/',
//             params: {
//               id: '80057281',
//               offset: '0',
//               limit: '25',
//               lang: 'en'
//             },
//             headers: {
//               'X-RapidAPI-Key': '27a16d6e27msh374d55903e28f5ep1e99afjsne64f3f1d7d9e',
//               'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
//             }
//           };
          
//           try {
//             const response = await axios.request(options);
//             console.log(response);
//             const movieMap = response.data.map((info) => (
//               <SwiperSlide>
//                 <img src={info.details.interestingMoment._342x192.webp.value.url} alt={info.details.title} />
//               </SwiperSlide>
//             ))
//             setMovie(movieMap)
//           }catch (error) {
//             console.error(error);
//           }
//         }
//         myFunction()
//       },[])


//       let info = {
//        movie,
//        setMovie,

//     }

    
//     return (
//         <HeaderContext.Provider value={info}>
//             {children}
//         </HeaderContext.Provider>
//     )
// }