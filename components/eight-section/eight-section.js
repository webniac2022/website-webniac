import React from "react";
import { Image } from "../../lib/external-components";

const EightSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 w-full mt-40 gap-5">
      <div className="col-span-1 block">
        <Image
          src="https://res.cloudinary.com/webniac/image/upload/v1663232240/WEBNIAC/digital_products_spkkly.svg"
          alt="avem milioane de idei"
          width={1920}
          height={1080}
          layout="responsive"
        />
      </div>
      <div className="col-span-1 flex flex-row justify-center items-center">
        <h2 className="text-left text-2xl w-[70%]">
          Ai o idee geniala? Te ajutam sa o pui in practica. Iti facem aplicatia
          web de la zero.
        </h2>
      </div>
    </div>
  );
};

export default EightSection;
