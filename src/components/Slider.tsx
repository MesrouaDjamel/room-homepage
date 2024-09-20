"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import Header from "./Header";

// const images = [
//   {
//     src: "/images/mobile/mobile-image-hero-1.jpg",
//     title: "Discover innovative ways to decorate",
//     description: `We provide unmatched quality,comfort, and style for property
//                 owners across the country. Our experts combine from and function
//                 in bringing your vision to life. Create a room in your own style
//                 with our collection and make your property a reflection of you
//                 and what you love.`,
//   },
//   {
//     src: "/images/mobile/mobile-image-hero-2.jpg",
//     title: "We are available all across the globe",
//     description: `With store over the world , it’s easy for you to find furniture
// for your home or place of business. Locally, we’re in most
// major cities throughout the country. Find the branch nearest
// you using our store locator. Any questions? don’t hesitate
// to contact us today.   `,
//   },
//   {
//     src: "/images/mobile/mobile-image-hero-3.jpg",
//     title: "Manufactured with the best materials  ",
//     description: `our modern furniture store provide a high level of quality. Our
// company has invested in advanced as consistent to ensure that
// every product is made as perfect and as consistent as possible.
// With three decades of experience in this industry, we understand what customers want for their home and office.`,
//   },
// ];

const imagesDesktop = [
  {
    src: "/images/desktop/desktop-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    description: `We provide unmatched quality,comfort, and style for property
                owners across the country. Our experts combine from and function
                in bringing your vision to life. Create a room in your own style
                with our collection and make your property a reflection of you
                and what you love.`,
  },
  {
    src: "/images/desktop/desktop-image-hero-2.jpg",
    title: "We are available all across the globe",
    description: `With store over the world , it’s easy for you to find furniture
for your home or place of business. Locally, we’re in most
major cities throughout the country. Find the branch nearest
you using our store locator. Any questions? don’t hesitate 
to contact us today.   `,
  },
  {
    src: "/images/desktop/desktop-image-hero-3.jpg",
    title: "Manufactured with the best materials  ",
    description: `our modern furniture store provide a high level of quality. Our
company has invested in advanced as consistent to ensure that
every product is made as perfect and as consistent as possible.
With three decades of experience in this industry, we understand what customers want for their home and office.`,
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === imagesDesktop.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? imagesDesktop.length - 1 : prevSlide - 1
    );
  };

  

  return (
    <div className={`relative flex flex-col lg:flex-row xl:h-[540px] `}>
      <div className="relative overflow-hidden  w-full flex flex-col   ">
        {/* Image Slider */}
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            width: "100%",
          }}
        >
          {imagesDesktop.map((image, index) => (
            <div key={index} className="relative flex-shrink-0 w-full">
              <Image
                src={image.src}
                alt="Image Hero 1"
                height={360}
                width={300}
                priority={true}
                className=" h-[360px] md:h-[540px] brightness-50 w-full bg-left bg-no-repeat bg-cover "
              />

              <div className="xl:hidden absolute bottom-0 right-0">
                <Button
                  onClick={prevSlide}
                  className="bg-black px-6 py-4 hover:bg-hoverColor transition-all ease-in-out duration-300"
                  svgFile={
                    <svg width="14" height="24">
                      <path
                        d="M13 0L1 12l12 12"
                        stroke="#FFF"
                        fill="none"
                        fillRule="evenodd"
                      />
                    </svg>
                  }
                />

                <Button
                  onClick={nextSlide}
                  className="bg-black px-6 py-4 hover:bg-hoverColor transition-all ease-in-out duration-300"
                  svgFile={
                    <svg width="14" height="24">
                      <path
                        d="M1 0l12 12L1 24"
                        stroke="#FFF"
                        fill="none"
                        fillRule="evenodd"
                      />
                    </svg>
                  }
                />
              </div>
            </div>
          ))}
        </div>
        <Header  />
      </div>

      {/* Description Below the Slider */}

      <div className="relative lg:max-w-[450px] xl:max-w-[600px] px-6 flex  md:pl-24 lg:pl-12 lg:pt-24  xl:pt-32 flex-col gap-5 pt-14 pb-12 transition-transform ease-in-out duration-500">
        <h1 className="text-4xl tracking-widest font-bold">
          {imagesDesktop[currentSlide].title}
        </h1>
        
        <p className=" leading-relaxed text-darkGray">
          {imagesDesktop[currentSlide].description}
        </p>

        <Button
          text="Shop now"
          className="uppercase tracking-[20px] pt-14 lg:pt-4 flex items-center"
          svgFile={
            <svg width="40" height="12">
              <path
                d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                fill="#000"
                fillRule="nonzero"
              />
            </svg>
          }
        />
        <div className="hidden xl:block absolute bottom-0 left-0">
          <Button
            onClick={prevSlide}
            className="bg-black px-6 py-4 hover:bg-hoverColor transition-all ease-in-out duration-300"
            svgFile={
              <svg width="14" height="24">
                <path
                  d="M13 0L1 12l12 12"
                  stroke="#FFF"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            }
          />

          <Button
            onClick={nextSlide}
            className="bg-black px-6 py-4 hover:bg-hoverColor transition-all ease-in-out duration-300"
            svgFile={
              <svg width="14" height="24">
                <path
                  d="M1 0l12 12L1 24"
                  stroke="#FFF"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
