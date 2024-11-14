type ButtonProps = {
  text: string;
};

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className=" 
        hover:bg-primaryblue hover:text-MainWhite
        active:bg-primaryblue
        focus:bg-primaryblue
          focus:text-MainWhite
          active:text-MainWhite
        text-primaryblue
          p-2 border-2
        border-primaryblue 
          rounded-2xl w-32 
          font-semibold 
          mx-2">{(text)}  
          
          
          </button>
  )

};

export default Button;
