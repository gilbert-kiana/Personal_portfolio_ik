import React from "react";
import "./testimonials.css";
import Avtr1 from "../../assets/avatar1.jpg";
import Avtr2 from "../../assets/avatar2.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const data = [
    {
      avater: Avtr1,
      name: "Madelein albright",
      review:
        "Working with Gilbert was simple. My favorite part was how he managed to get my exact needs in the website.Would recommend him to anyone.",
    },
    {
      avater: Avtr2,
      name: "Obed Tinega",
      review:
        "Working with Gilbert was a fantastic experience. He delivered our website within strict deadlines and exceeded our expectations. He is a skilled and reliable web developer who pays great attention to detail and communicates clearly. We will definitely continue working with him and highly recommend him to others. Thank you, Gilbert, for your outstanding work!",
    },
  ];

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avater, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avater} alt="client   " />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
