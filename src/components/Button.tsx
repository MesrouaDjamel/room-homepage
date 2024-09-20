type ButtonProps = {
  text?: string;
  className?: string;
  svgFile?: React.ReactNode;
  onClick?: () => void;
};
const Button = ({ text, svgFile, className, onClick }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {text} {svgFile}
    </button>
  );
};

export default Button;
