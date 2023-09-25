import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Card4 } from './card4';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { PiFilmSlateDuotone } from 'react-icons/pi'
import {LiaThumbsUpSolid} from 'react-icons/lia'
import '../accordion/accordion.scss'
import { AiOutlineEye, AiOutlinePlusCircle } from 'react-icons/ai';

export  function BasicAccordion() {
    const [accordion1,setAccordion1] = useState('')



    useEffect(() => {
    
        const myAccordion = async ()  => {
        
        
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
                  const movieMap4 = response.data.titles.map((user) => (
                    
                      <Link className="link-kino" to='/tarjimaKino'>
                      <Card4
                        card4Img={user.jawSummary.backgroundImage.url}
                        card4Text={user.jawSummary.title}
                        />
                      </Link>
                
                  ))
                  setAccordion1(movieMap4)
              } catch (error) {
                  console.error(error);
              }
            
         
        }
        myAccordion()
        },[])


  return (
    <div>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<AiOutlinePlusCircle className='plus'/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='accordion-list'><PiFilmSlateDuotone/> Filmlar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           {accordion1.slice(10,20)}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion  className='accordion'>
        <AccordionSummary
          expandIcon={<AiOutlinePlusCircle className='plus' />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='accordion-list'> <LiaThumbsUpSolid/>Reytinggi yuqori</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           {accordion1.slice(20,30)}
          </Typography>
        </AccordionDetails>
      </Accordion>

       <Accordion  className='accordion'>
        <AccordionSummary
          expandIcon={<AiOutlinePlusCircle className='plus' />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className='accordion-list'> <AiOutlineEye/>Ko'p ko'rilgan</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           {accordion1.slice(30,40)}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default BasicAccordion