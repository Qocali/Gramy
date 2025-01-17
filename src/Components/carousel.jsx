import React from "react";
import Slider from "react-slick";

import LeftArrow from "../../assets/images/left-arrow.svg";
import RightArrow from "../../assets/images/right-arrow.svg";

export default function Carousel({ title, data }) {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img
            className="slick-next"
            src={LeftArrow}
            alt="prevArrow"
            {...props}
        />
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img
            className="slick-next"
            src={RightArrow}
            alt="nextArrow"
            {...props}
        />
    );
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
    };
    return (
        <div className="card__container">
            <div className="card__container--cta">
                <h1>{title}</h1>
                <div className="row">
                    <h2>See all</h2>
                    <SlickArrowLeft />
                    <SlickArrowRight />
                </div>
            </div>
            <Slider {...settings} className="card__container--inner">
                {data.map((item, index) => {
                    return (
                        <div
                            className="card__container--inner--card"
                            key={index}>
                            <img src={item.url} alt="hero_img" />

                            <div className="card__container--inner--card--date_time">
                                <img
                                    src="https://www.wanderon.in/svg/clock.svg"
                                    alt="time"
                                />
                                <p>4D-5D</p>

                                <img
                                    src="https://www.wanderon.in/svg/map-pin.svg"
                                    alt="location"
                                    style={{ marginLeft: 10 }}
                                />
                                <p>Delhi</p>
                            </div>

                            <h2>Meghalaya Backpacking</h2>
                            <p>
                                starts at <span>₹15,999/-</span>
                            </p>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}
