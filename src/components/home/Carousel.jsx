import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// const imageProp = ["pizza", "burger", "milkshake"];
const imageProp = [
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://plus.unsplash.com/premium_photo-1675864534274-3652b78bfff1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fHww",

    "https://plus.unsplash.com/premium_photo-1695868328526-0a36982f9cdb?dpr=1&w=306&auto=format&fit=crop&q=60&crop=entropy&cs=tinysrgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8bWlsa3NoYWtlfGVufDB8MHx8fDE3MTk3NDc3MTN8MQ&ixlib=rb-4.0.3"
];

function CarouselComponent() {
    return (
        <Carousel
            autoPlay
            navButtonsAlwaysVisible
            infiniteLoop
            showStatus={false}
            emulateTouch
            showThumbs={false}
        >
            {imageProp.map((image, index) => {
                return (
                    <div
                        key={index}
                        style={{ maxHeight: "36rem" }}
                        className="object-center brightness-50"
                    >
                        <img
                            src={image}
                            alt="pizza"
                        />
                    </div>
                );
            })}
        </Carousel>
    );
}

export default CarouselComponent;
