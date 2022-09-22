import React from "react";
import Image from "next/future/image";

const BeforeIntro = () => {
  return (
    <div className="w-full">
      <Image
        src="https://res.cloudinary.com/webniac/image/upload/v1663854502/WEBNIAC/Asset_4_swmyxb_ezkm2m.svg"
        alt="bg"
        width={1615}
        height={891}
        style={{ opacity: 0.8 }}
        priority
      />
    </div>
  );
};

export default BeforeIntro;
