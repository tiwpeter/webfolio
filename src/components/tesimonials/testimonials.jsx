import React from 'react';
import './testimonials.css';
import JON from '../../assets/jonwick.jpg';
import Rock from '../../assets/Therock.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const Testimonials = () => {
  const data = [
    {
      avatar: JON,
      name: 'jonwick',
      review: 'looooooooooooooooosdsdsdsdso',
    },
    {
      avatar: Rock,
      name: 'TheRock',
      review: 'akkkkkk',
    },
  ];

  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className='container testimonials__container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className='testimonial'>
            <div className='client__avatar'>
              <img src={avatar} alt={name} />
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;