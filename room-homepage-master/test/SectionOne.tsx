"use client";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";

const SectionOne = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage((prev) =>
      prev === mobileImages.length - 1 ? 0 : prev + 1
    );
  };
  const previousSlide = () => {
    setCurrentImage((prev) =>
      prev === 0 ? mobileImages.length - 1 : prev - 1
    );
  };
  const mobileImages = [
    "/images/mobile/mobile-image-hero-1.jpg",
    "/images/mobile/mobile-image-hero-2.jpg",
    "/images/mobile/mobile-image-hero-3.jpg",
  ];
  return (
    <section className="">
      <div className="relative bg-green-600">
        <div className="w-full h-[360px] relative  bg-red-700 overflow-hidden">
          <div
            className={`flex h-full w- transition-transform ease-in-out duration-500
                -translate-x-[-${currentImage * 100}%]
                `}
          >
            {mobileImages.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt="section one"
                width={1440}
                height={600}
                className={`w-max h-full object-cover flex-1 ${
                  index === currentImage ? "opacity-100 w-max" : "opacity-50"
                }`}
              />
            ))}
          </div>
        </div>

        <Header />

        <div className="absolute bottom-0 right-0">
          <Button
            onClick={previousSlide}
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

      <article className="px-6 flex flex-col gap-5 pt-14 pb-12">
        <h1 className="text-4xl tracking-widest font-bold">
          Discover innovative ways to decorate
        </h1>
        <p className=" leading-relaxed text-darkGray">
          We provide unmatched quality,comfort, and style for property owners
          across the country. Our experts combine from and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>

        <Button
          text="Shop now"
          className="uppercase tracking-[20px] pt-14 flex items-center"
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
      </article>
    </section>
  );
};

export default SectionOne;
