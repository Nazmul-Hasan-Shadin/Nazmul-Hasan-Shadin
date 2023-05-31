import React from 'react';
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus illum dolor libero aliquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus illum dolor libero aliquam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus illum dolor libero aliquam ',
    },
    {
      img: profilePic3,
      review:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus illum dolor libero aliquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus illum dolor libero aliquam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus illum dolor libero aliquam ',
    },
    {
      img: profilePic4,
      review:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus illum dolor libero aliquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus illum dolor libero aliquam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus illum dolor libero aliquam ',
    },
    {
      img: profilePic2,
      review:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus illum dolor libero aliquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus illum dolor libero aliquam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus illum dolor libero aliquam ',
    },
  ];
  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>client always get</span>
        <span>Exceptional Work</span>
        <span>From me....</span>
      </div>

      <Swiper
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
