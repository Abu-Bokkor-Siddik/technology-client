import React from 'react'
 // import Swiper core and required modules
 import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
    
 import { Swiper, SwiperSlide } from 'swiper/react';
 
 // Import Swiper styles
 import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/pagination';
 import 'swiper/css/scrollbar';

const Carosol = ({singeldata}) => {
    
  

  return (
    <div>
   
    
   
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
          
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          navigation
         className='max-w-[1400px] h-[700px]'
        
         
        >
          <SwiperSlide> <img className='h-[800px] w-[1400px]' src={singeldata?.img1} alt="" /></SwiperSlide>

         
          <SwiperSlide>
          <img  className='h-[800px] w-[1400px]' src={singeldata?.img2} alt="" /></SwiperSlide>
          <SwiperSlide>
          <img  className='h-[800px] w-[1400px]' src={singeldata?.img3} alt="" />
          </SwiperSlide>
         
        </Swiper>
      
      
    </div>
  )
}

export default Carosol
