import React from "react";
import { Image } from "../../lib/external-components";

const NinthSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 w-full mt-40 gap-10">
      <div className="col-span-1 block">
        <Image
          src="https://res.cloudinary.com/webniac/image/upload/v1663233459/WEBNIAC/Asset_1_wtm7ps.svg"
          alt="avem milioane de idei"
          width={1920}
          height={1080}
          layout="responsive"
        />
      </div>
      <div className="col-span-1 flex flex-row justify-center items-center">
        <h2 className="text-left text-2xl w-[70%]">
          Iti construim website-ul de la zero astfel incat afacerea ta sa fie
          reprezentata minunat si in mediul online.
        </h2>
      </div>
    </div>
  );
};

export default NinthSection;
