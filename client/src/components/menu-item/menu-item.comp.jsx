import React from "react";
import { useNavigate } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();

  const large = size ? "md:h-96" : "";

  return (
    <div
      className={`${large} menu-item cursor-pointer min-w-[30%] h-48 md:h-60 flex flex-auto items-center justify-center overflow-hidden mt-0 mb-4 mx-2 border-[1px] border-black`}
      onClick={() => navigate(linkUrl)}
    >
      <div
        className="background-image w-full h-full bg-center bg-cover"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content h-16 md:h-24 px-2 md:px-6 flex flex-col items-center justify-center border-[1px] border-black opacity-70 absolute bg-white">
        <h1 className="text-xl uppercase text-[#4a4a4a] font-bold">{title}</h1>
        <span className="text-base font-thin">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
