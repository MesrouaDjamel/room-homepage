"use client";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import Button from "../../src/components/Button";
import SectionTwo from "../../src/components/SectionTwo";

export function CarouselWithContent() {
  return (
    <>
      <Carousel
        placeholder={<div>Loading ...</div>}
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        loop={true}
        className=" bg-red-900 lg:h-[534px] overflow-hidden"
        prevArrow={({ handlePrev }) => (
          <Button
            onClick={handlePrev}
            className="absolute top-0 right-[62px]  bg-black px-6 py-4 hover:bg-hoverColor transition-all ease-in-out duration-300"
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
        )}
        nextArrow={({ handleNext }) => (
          <Button
            onClick={handleNext}
            className="absolute top-0 right-0 bg-black px-6 py-4 hover:bg-hoverColor transition-all ease-in-out duration-300"
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
        )}
      >
        <div className="relative h-96 w-full">
          <div className="flex ">
            <div className="relative w-full">
              <Image
                src={"/images/desktop/desktop-image-hero-1.jpg"}
                alt="Image Hero 1"
                height={360}
                width={300}
                className="w-full h-full bg-black object-cover"
              />
            </div>
            <article className=" lg:max-w-[600px]  px-6 flex flex-col gap-5 pt-14 pb-12">
              <h1 className="text-4xl tracking-widest font-bold">
                Discover innovative ways to decorate
              </h1>
              <p className=" leading-loose text-darkGray">
                We provide unmatched quality,comfort, and style for property
                owners across the country. Our experts combine from and function
                in bringing your vision to life. Create a room in your own style
                with our collection and make your property a reflection of you
                and what you love.
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
          </div>
        </div>

        <div className="relative h-full w-full">
          <Image
            src={"/images/mobile/mobile-image-hero-2.jpg"}
            alt="Image Hero 2"
            height={360}
            width={300}
            className="w-full  object-cover"
          />
          <article className="  z-50 px-6 flex flex-col gap-5 pt-14 pb-12">
            <h1 className="text-4xl tracking-widest font-bold">
              We are available all across the globe{" "}
            </h1>
            <p className=" leading-loose text-darkGray">
              With store over the world , it’s easy for you to find furniture
              for your home or place of business. Locally, we’re in most major
              cities throughout the country. Find the branch nearest you using
              our store locator. Any questions? don’t hesitate to contact us
              today.
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
        </div>

        <div className="relative h-full w-full">
          <Image
            src={"/images/mobile/mobile-image-hero-3.jpg"}
            alt="Image Hero 3"
            height={360}
            width={300}
            className="w-full object-cover"
          />
          <article className="  z-50 px-6 flex flex-col gap-5 pt-14 pb-12">
            <h1 className="text-4xl tracking-widest font-bold">
              Manufactured with the best materials{" "}
            </h1>
            <p className=" leading-loose text-darkGray">
              our modern furniture store provide a high level of quality. Our
              company has invested in advanced as consistent to ensure that
              every product is made as perfect and as consistent as possible.
              With three decades of experience in this industry, we understand
              what customers want for their home and office.
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
        </div>
      </Carousel>

      <SectionTwo />
    </>
  );
}
