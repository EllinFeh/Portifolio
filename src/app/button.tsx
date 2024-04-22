type ButtonProps = {
    text: string;
  };
  
  const Button: React.FC<ButtonProps> = ({ text }) => {
    return(
        <button className="animate__animated animate__backInDown text-primaryblue p-2 border-2 border-primaryblue rounded-2xl w-48 font-semibold mx-2">{(text)}</button>
    )

  };
  
  export default Button;
