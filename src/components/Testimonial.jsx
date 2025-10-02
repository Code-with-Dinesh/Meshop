import React from 'react';
import happy from '../assets/Images/happy.jpg';
import mudgil from '../assets/Images/mudgil.jpg';
import sahil from '../assets/Images/sahil.jpg';
import me from '../assets/Images/me.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonial = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h3 className="text-center mb-8 text-3xl font-semibold">Our Testimonials</h3>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 2, spaceBetween: 40 },
        }}
      >
        {[happy, me, sahil, mudgil].map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="p-4 w-full">
              <div className="h-full bg-gray-100 p-6 sm:p-8 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
                  purus eu libero efficitur varius.
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={img}
                    className="w-14 h-14 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      {idx === 0
                        ? 'Harpreet Singh'
                        : idx === 1
                        ? 'Dinesh Sharma'
                        : idx === 2
                        ? 'Sahil Jalandhara'
                        : 'Navneet Sharma'}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {idx === 0
                        ? 'UI Developer'
                        : idx === 1
                        ? 'Frontend Developer'
                        : idx === 2
                        ? 'Backend Developer'
                        : 'Python Developer'}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
