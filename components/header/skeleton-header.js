import React from "react";
import { Image } from "../../lib/external-components";
import { VscLoading } from "react-icons/vsc";

const SkeletonHeader = () => {
  return (
    <div className="grid grid-cols-12 gap-2 justify-center items-center bg-lightBg dark:bg-darkBg">
      <div className="col-span-3 sm:col-span-2 block">
        <Image
          src="https://res.cloudinary.com/webniac/image/upload/v1662567294/WEBNIAC/webniac_logo_ordcsr.svg"
          alt="Webniac logo - Custom software development"
          layout="responsive"
          width={100}
          height={80}
        />
      </div>
      <div className="col-span-3 sm:col-span-2 flex flex-row justify-center items-center">
        <VscLoading size={20} className="fill-lightBg dark:fill-darkBg" />
      </div>
      <div className="col-span-6 sm:col-span-8">
        <VscLoading size={20} className="fill-lightBg dark:fill-darkBg" />
      </div>
    </div>
  );
};

export default SkeletonHeader;
