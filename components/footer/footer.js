import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { MdEmail, MdPhone } from "react-icons/md";
import Image from "next/future/image";
import Link from "next/link";
import { useAppContext } from "../../context/context";

const Footer = () => {
  const { toggleCookies } = useAppContext();
  return (
    <div className="w-full mt-10 p-2">
      <div className="grid grid-cols-6">
        <div className="col-span-2 sm:col-span-1">
          <Image
            src="https://res.cloudinary.com/webniac/image/upload/v1662567294/WEBNIAC/webniac_logo_ordcsr.svg"
            alt="logo WEBNIAC"
            width={500}
            height={500}
          />
        </div>
        <div className="col-span-4 sm:col-span-5 flex flex-row justify-around">
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-5 items-center justify-center">
            <Link href="https://www.facebook.com" passHref>
              <a target="_blank">
                <FaFacebookSquare className="fill-white w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] hover:cursor-pointer" />
              </a>
            </Link>
            <Link href="https://www.instagram.com" passHref>
              <a target="_blank">
                <AiFillInstagram className="fill-white w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] hover:cursor-pointer" />
              </a>
            </Link>
            <Link href="https://www.twitter.com" passHref>
              <a target="_blank">
                <AiFillTwitterCircle className="fill-white w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] hover:cursor-pointer" />
              </a>
            </Link>
          </div>
          <div className="flex flex-col gap-1 justify-center">
            <div>
              <button
                className="text-white text-sm md:text-lg"
                onClick={toggleCookies}
              >
                Cookies
              </button>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <MdEmail className="fill-white" />
              <h6 className="text-white text-sm md:text-lg">
                office@webniac.ro
              </h6>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <MdPhone className="fill-white" />
              <h6 className="text-white text-sm md:text-lg">0742.409.403</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h6 className="text-white text-sm text-center">
          &copy; WEBNIAC - Custom web development, All rights reserved
        </h6>
        <h6 className="text-white text-sm">{new Date().getFullYear()}</h6>
      </div>
    </div>
  );
};

export default Footer;
