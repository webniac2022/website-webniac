import React from "react";
import { Image } from "../../lib/external-components";

const TenSection = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2  w-full mt-40 gap-2">
      <div className="col-span-1 row-span-1">
        <Image
          src="https://res.cloudinary.com/webniac/image/upload/v1663260087/WEBNIAC/idea_yndux3.svg"
          alt="avem milioane de idei"
          width={1920}
          height={1080}
          layout="responsive"
        />
      </div>
      <div className="col-span-1 row-span-2">
        <h2 className="text-left text-lg">
          Transformam <span className="text-lightHeading">ideile</span> tale in
          solutii digitale unice, exceptionale, performante si scalabile.
        </h2>{" "}
      </div>
    </div>
  );
};

export default TenSection;
