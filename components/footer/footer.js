import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { MdEmail, MdPhone } from "react-icons/md";
import Image from "next/future/image";
import Link from "next/link";
import { useAppContext } from "../../context/context";

const Footer = () => {
  const { toggleCookies } = useAppContext();
  return (
    <div className="w-full mt-16 p-2">
      <div className="grid grid-cols-3 grid-rows-2 sm:grid-rows-1 p-2">
        <div className="col-span-2 sm:col-span-1 flex flex-col gap-1 items-center justify-center">
          <Image
            src="https://res.cloudinary.com/webniac/image/upload/v1662567294/WEBNIAC/webniac_logo_ordcsr.svg"
            alt="Webniac logo"
            width={80}
            height={50}
          />
          <div className="flex flex-row gap-1">
            {" "}
            <FaFacebookSquare className="fill-white w-[24px] h-[24px]" />
            <AiFillInstagram className="fill-white w-[24px] h-[24px]" />
            <AiFillTwitterCircle className="fill-white w-[24px] h-[24px]" />
          </div>
        </div>
        <div className="col-span-1 flex flex-row justify-center items-center">
          <button onClick={toggleCookies} className="text-lg text-white">
            Cookies
          </button>
        </div>
        <div className="col-span-3 sm:col-span-1 flex flex-col gap-1 items-center justify-center">
          <div className="flex flex-row justify-center items-center gap-1">
            <MdEmail className="fill-white w-[24px] h-[24px]" />
            <h5 className="text-white">office@webniac.ro</h5>
          </div>
          <div className="flex flex-row justify-center items-center gap-1">
            <MdPhone className="fill-white w-[24px] h-[24px]" />
            <h5 className="text-white">0742.409.403</h5>
          </div>
        </div>
      </div>
      <div className="w-full justify-center items-center">
        <h2 className="text-center text-xl text-white">
          &copy;{new Date().getFullYear()} Toate drepturile rezervate WEBNIAC
        </h2>
      </div>
    </div>
  );
};

export default Footer;
