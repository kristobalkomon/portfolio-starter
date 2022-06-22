import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/card';
import CV from './CV.pdf';
import { themeContext } from '../../context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Services = () => {

   const transition = { duration: 2, type: 'spring' };

   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;

   return (
      <div className='services' id='Services'>
         <div className="awesome">
            <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
            <span>services</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               <br />
               Aut dolore laborum debitis error a perferendis labore neque quas rerum non</span>
            <a href={CV} download>
               <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
         </div>
         <div className="cards">
            <motion.div
               initial={{ left: "25rem" }}
               whileInView={{ left: "14rem" }}
               transition={transition}
               style={{ left: '14rem' }}>
               <Card
                  emoji={HeartEmoji}
                  heading={'Design'}
                  details={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
               />
            </motion.div>
            <motion.div
               initial={{ left: '-24rem' }}
               whileInView={{ left: '-4rem' }}
               transition={transition}
               style={{ left: '-4rem', top: '12rem' }}>
               <Card
                  emoji={Glasses}
                  heading={'Developer'}
                  details={"HTML, CSS, JavaScript, React"}
               />
            </motion.div>
            <motion.div
               initial={{ left: '33rem' }}
               whileInView={{ left: '12rem' }}
               transition={transition}
               style={{ left: '12rem', top: '24rem' }}>
               <Card
                  emoji={Humble}
                  heading={'UI/UX'}
                  details={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore exercitationem"}
               />
            </motion.div>
            <div className="blur s-blur2" style={{ background: 'var(--purple)' }}></div>
         </div>
      </div>
   )
}

export default Services