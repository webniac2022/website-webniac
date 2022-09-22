import React from "react";
import { motion } from "../../lib/external-components";
import Image from "next/future/image";

const data = [
  { content: "sadhahdas" },
  { content: "adjasdjasdjasd" },
  { content: "asddssjjsdajasd" },
  { content: "dsasadbasdbb" },
  { content: "sdahsdhsdahahads" },
];

const Intro = () => {
  return (
    <div className="w-full mt-16 mb-16 flex flex-col gap-5">
      <Image
        src="https://res.cloudinary.com/webniac/image/upload/v1663832180/WEBNIAC/Asset_4_swmyxb.svg"
        alt="bg"
        width={1615}
        height={891}
        style={{ opacity: 0.8 }}
      />
      <div className="flex flex-row justify-center p-2 mt-10 mb-10">
        <h2 className="font-bold w-full text-6xl sm:text-8xl text-lightContrastText dark:text-darkHeading">
          Principii
        </h2>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-5">
        <div className="border-r-2 border-black dark:border-darkComponents p-2">
          <h2 className="font-bold text-lg sm:text-2xl">Functionalitate</h2>
          <p>
            Suntem axati pe functionalitate si depunem toate eforturile ca
            proiectele noastre sa fie testate inainte de a fi lansate.
          </p>
        </div>
        <div className="p-2">
          <h2 className="font-bold text-lg sm:text-2xl">Accesibilitate</h2>
          <p>
            Suntem axati pe accesibilitate. Toate produsele trebuie sa
            functioneze conform specificatiilor tehnice initiale.
          </p>
        </div>
        <div className="border-r-2 border-black dark:border-darkComponents p-2">
          <h2 className="font-bold text-lg sm:text-2xl">Performanta</h2>
          <p>
            Suntem axati pe performanta. Toate produsele trebuie sa functioneze
            conform specificatiilor tehnice initiale.
          </p>
        </div>
        <div className="p-2">
          <h2 className="font-bold text-lg sm:text-2xl">Scalabilitate</h2>
          <p>
            Suntem axati pe scalabilitate. Toate produsele trebuie sa
            functioneze conform specificatiilor tehnice initiale.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
