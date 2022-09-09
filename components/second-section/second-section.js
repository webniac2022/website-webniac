import React from "react";
import {
  imgOne,
  imgTwo,
  imgThree,
  imgFive,
  imgFour,
  imgSix,
} from "../../lib/imges-local";
import { Image } from "../../lib/external-components";

const SecondSection = () => {
  const imges = [imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix];
  return (
    <div className="mt-10">
      <div className="flex justify-center mb-10">
        <h1 className="text-lightContrastText dark:text-darkHeading text-center text-5xl p-2 font-bold">
          Abordarea noastra
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-2">
        {imges.map((im, i) => (
          <div
            className="bg-lightComponents dark:bg-darkComponents rounded shadow-md flex flex-col gap-2 p-3"
            key={i}
          >
            <h3 className="text-lg text-center text-darkContrastText dark:text-darkContrastText">
              1. Gandire
            </h3>
            <div className="block">
              <Image
                src={im}
                alt={im}
                layout="responsive"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondSection;
