import Button from "./Button";
type TProductDescriptionProps = {
    title :string
    desc : string
}
const ProductDescription = ({title,desc}:TProductDescriptionProps) => {
  return (
    <article className="px-6 flex flex-col gap-5 pt-14 pb-12">
      <h1 className="text-4xl tracking-widest font-bold">
        Discover innovative ways to decorate
        {title}
      </h1>
      <p className=" leading-relaxed text-darkGray">
        We provide unmatched quality,comfort, and style for property owners
        across the country. Our experts combine from and function in bringing
        your vision to life. Create a room in your own style with our collection
        and make your property a reflection of you and what you love.
        {desc}
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
  );
}

export default ProductDescription