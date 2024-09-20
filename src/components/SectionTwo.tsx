import Image from "next/image";

const SectionTwo = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:h-[340px] xl:h-[260px]">
      <Image
        src={"/images/all/image-about-dark.jpg"}
        alt="section two"
        width={350}
        height={350}
        className="w-full h-full  bg-left bg-no-repeat"
      />
      <article className="px-6 flex flex-col gap-5 pt-14 pb-12 lg:w-[380px] xl:w-[580px] md:px-32 lg:px-10 xl:py-12 text-[15px]  flex-shrink-0">
        <h1 className="text-xl tracking-widest font-bold">ABOUT OUR FURNITURE</h1>
        <p className=" leading-relaxed text-darkGray">
          Our multifunctional collection blends design and function to suit your
          individual taste. Male each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need from traditional to contemporary styles or anything in
          between. Product specialists are available to help to create your
          dream space.{" "}
        </p>
      </article>

      <Image
        src={"/images/all/image-about-light.jpg"}
        alt="section two"
        width={350}
        height={350}
        className="w-full h-full object-cover bg-center bg-no-repeat"
      />
    </section>
  );
};

export default SectionTwo;
