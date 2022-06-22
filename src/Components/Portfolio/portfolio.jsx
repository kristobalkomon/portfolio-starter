import React from 'react'
import './portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import Mercedes from "../../img/mercedes_avatar.png";
import 'swiper/css'
import { themeContext } from '../../context'
import { useContext } from 'react'
import "swiper/css/pagination";
import { Pagination } from "swiper";

import Modal from '../../Components/Modal/modal';


const Portfolio = () => {

   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;

   return (
      <div className='portfolio' id='Portfolio'>
         <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
         <span>Portfolio</span>
         <Swiper
            spaceBetween={10}
            slidesPerView={1}
            grabCursor={true}
            pagination={{
            clickable: true,
            }}
            breakpoints={{
               640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
               },
               768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
               },
               1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
               },
            }}
            modules={[Pagination]}
            className='portfolio-slider'
         >
            <SwiperSlide>
               <img src={Sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
               <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
               <img src={HOC} alt="" />
            </SwiperSlide>
            <SwiperSlide>
               <img src={MusicApp} alt="" />
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

export default Portfolio