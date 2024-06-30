import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <Swiper spaceBetween={50} slidesPerView={1} autoplay={{ delay: 3000 }}>
        <SwiperSlide><img src="https://via.placeholder.com/600x300" alt="Banner 1" /></SwiperSlide>
        <SwiperSlide><img src="https://via.placeholder.com/600x300" alt="Banner 2" /></SwiperSlide>
        <SwiperSlide><img src="https://via.placeholder.com/600x300" alt="Banner 3" /></SwiperSlide>
      </Swiper>
      <div className="home-links">
        <Link to="/section1" className="home-link">Section 1</Link> {/* Link를 사용하여 Section1으로 이동 */}
        <Link to="/section2" className="home-link">Section 2</Link>
        <Link to="/section3" className="home-link">Section 3</Link>
        <Link to="/section4" className="home-link">Section 4</Link>
        <Link to="/section5" className="home-link">Section 5</Link>
      </div>
    </div>
  );
}

export default Home;