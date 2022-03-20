import React from "react";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  className,
  ...otherProps
}) => {
  const baseClass = `h-12 uppercase text-base font-bold
                     cursor-pointer flex justify-center items-center`;

  const extraClass = () => {
    if (isGoogleSignIn)
      return `bg-[#4285f4] text-white hover:bg-[#357ae8] border-none`;

    if (inverted)
      return `bg-white text-black border-[1px] border-black
              hover:text-white hover:bg-black hover:border-none`;

    return `bg-black text-white 
            hover:bg-white hover:text-black hover:border-[1px] hover:border-black`;
  };
  return (
    <button
      className={` ${baseClass} ${extraClass()} ${className} `}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
