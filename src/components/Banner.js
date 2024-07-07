import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  const banners = [
    { id: 1, image: `${process.env.PUBLIC_URL}/placeholder.png`, title: 'Discover Paris', description: 'The city of light awaits you.' },
    { id: 2, image: `${process.env.PUBLIC_URL}/placeholder.png`, title: 'New York Adventure', description: 'Experience the excitement of the Big Apple.' },
    { id: 3, image: `${process.env.PUBLIC_URL}/placeholder.png`, title: 'Tokyo Journey', description: 'Explore the vibrant culture of Tokyo.' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: dots => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div style={{ textAlign: "center", fontSize: "12px" }}>
        {i + 1} / {banners.length}
      </div>
    )
  };

  return (
    <div>
      <Slider {...settings}>
        {banners.map(banner => (
          <div key={banner.id}>
            <img src={banner.image} alt={banner.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textShadow: '2px 2px 4px #000' }}>
              <h2>{banner.title}</h2>
              <p>{banner.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
