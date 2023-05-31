import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { MdEmail, MdPhone } from "react-icons/md";
import Image from "next/future/image";
import Link from "next/link";
import { useCookieContext } from "../../context/cookie-context";
import Logo from "../header/logo";

const Footer = () => {
  const { dispatch } = useCookieContext();
  return (
    <div className="w-full mt-10 p-2">
      <div className="grid grid-cols-6">
        <div className="col-span-2 sm:col-span-1">
          <Logo />
        </div>
        <div className="col-span-4 sm:col-span-5 flex flex-row justify-around">
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-5 items-center justify-center">
            <Link href="https://www.facebook.com" passHref>
              <a target="_blank">
                <FaFacebookSquare className="fill-white dark:fill-darkContrastText w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] hover:cursor-pointer" />
              </a>
            </Link>
            <Link href="https://www.instagram.com" passHref>
              <a target="_blank">
                <AiFillInstagram className="fill-white dark:fill-darkContrastText w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] hover:cursor-pointer" />
              </a>
            </Link>
            <Link href="https://www.twitter.com" passHref>
              <a target="_blank">
                <AiFillTwitterCircle className="fill-white dark:fill-darkContrastText w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] hover:cursor-pointer" />
              </a>
            </Link>
          </div>
          <div className="flex flex-col gap-1 justify-center">
            <div className="flex flex-row gap-2 items-center">
              <MdEmail className="fill-white dark:fill-darkContrastText" />
              <h6 className="text-white dark:text-darkContrastText text-sm md:text-lg">
                office@webniac.ro
              </h6>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <MdPhone className="fill-white dark:fill-darkContrastText" />
              <h6 className="text-white dark:text-darkContrastText text-sm md:text-lg">
                0742.409.403
              </h6>
            </div>
            <div>
              <button
                onClick={() =>
                  dispatch({ type: "cookieSettingsScreen", payload: true })
                }
                className="text-white dark:text-darkContrastText text-sm md:text-lg"
              >
                Cookies
              </button>
            </div>
            <div>
              <Link href="/gdpr" passHref aria-label="GDPR Policy">
                <button className="text-white dark:text-darkContrastText text-sm md:text-lg">
                  Gdpr
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h6 className="text-white dark:text-darkContrastText text-sm text-center">
          &copy; WEBNIAC - Custom web development, All rights reserved
        </h6>
        <h6 className="text-white dark:text-darkContrastText text-lg">
          {new Date().getFullYear()}
        </h6>
      </div>
    </div>
  );
};

export default Footer;
