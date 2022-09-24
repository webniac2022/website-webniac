import React, { useState, useEffect } from "react";
import { motion } from "../../lib/external-components";
import { MdArrowDropDown } from "react-icons/md";
import Skeleton from "./skeleton";

const data = [
  {
    title: "UI/UX Design",
    id: "ui",
    content:
      "UI/UX I'm baby chartreuse master cleanse hashtag roof party retro pop-up. Meh small batch master cleanse, ugh aesthetic yes plz hoodie organic thundercats wolf dreamcatcher Brooklyn whatever. You probably haven't heard of them yes plz hella normcore adaptogen enamel pin 90's poutine bodega boys fashion axe williamsburg. Yes plz roof party pok pok ethical. Sus scenester microdosing readymade, unicorn iPhone art party shoreditch you probably haven't heard of them chartreuse. Tumblr bruh leggings chicharrones paleo iceland disrupt ramps lo-fi big mood chambray bitters.",
  },

  {
    title: "Aplicatii web",
    id: "apps",
    content:
      "Aplicatii web I'm baby chartreuse master cleanse hashtag roof party retro pop-up. Meh small batch master cleanse, ugh aesthetic yes plz hoodie organic thundercats wolf dreamcatcher Brooklyn whatever. You probably haven't heard of them yes plz hella normcore adaptogen enamel pin 90's poutine bodega boys fashion axe williamsburg. Yes plz roof party pok pok ethical. Sus scenester microdosing readymade, unicorn iPhone art party shoreditch you probably haven't heard of them chartreuse. Tumblr bruh leggings chicharrones paleo iceland disrupt ramps lo-fi big mood chambray bitters.",
  },
  {
    title: "Website-uri",
    id: "website",
    content:
      "Websiteuri I'm baby chartreuse master cleanse hashtag roof party retro pop-up. Meh small batch master cleanse, ugh aesthetic yes plz hoodie organic thundercats wolf dreamcatcher Brooklyn whatever. You probably haven't heard of them yes plz hella normcore adaptogen enamel pin 90's poutine bodega boys fashion axe williamsburg. Yes plz roof party pok pok ethical. Sus scenester microdosing readymade, unicorn iPhone art party shoreditch you probably haven't heard of them chartreuse. Tumblr bruh leggings chicharrones paleo iceland disrupt ramps lo-fi big mood chambray bitters.",
  },
  {
    title: "Magazine online",
    id: "ecommerce",
    content:
      "Ecommerce I'm baby chartreuse master cleanse hashtag roof party retro pop-up. Meh small batch master cleanse, ugh aesthetic yes plz hoodie organic thundercats wolf dreamcatcher Brooklyn whatever. You probably haven't heard of them yes plz hella normcore adaptogen enamel pin 90's poutine bodega boys fashion axe williamsburg. Yes plz roof party pok pok ethical. Sus scenester microdosing readymade, unicorn iPhone art party shoreditch you probably haven't heard of them chartreuse. Tumblr bruh leggings chicharrones paleo iceland disrupt ramps lo-fi big mood chambray bitters.",
  },
  {
    title: "Optimizare SEO",
    id: "seo",
    content:
      "SEO I'm baby chartreuse master cleanse hashtag roof party retro pop-up. Meh small batch master cleanse, ugh aesthetic yes plz hoodie organic thundercats wolf dreamcatcher Brooklyn whatever. You probably haven't heard of them yes plz hella normcore adaptogen enamel pin 90's poutine bodega boys fashion axe williamsburg. Yes plz roof party pok pok ethical. Sus scenester microdosing readymade, unicorn iPhone art party shoreditch you probably haven't heard of them chartreuse. Tumblr bruh leggings chicharrones paleo iceland disrupt ramps lo-fi big mood chambray bitters.",
  },
  {
    title: "Mentenanta",
    id: "Mentenanta",
    content:
      "Mentenanta I'm baby chartreuse master cleanse hashtag roof party retro pop-up. Meh small batch master cleanse, ugh aesthetic yes plz hoodie organic thundercats wolf dreamcatcher Brooklyn whatever. You probably haven't heard of them yes plz hella normcore adaptogen enamel pin 90's poutine bodega boys fashion axe williamsburg. Yes plz roof party pok pok ethical. Sus scenester microdosing readymade, unicorn iPhone art party shoreditch you probably haven't heard of them chartreuse. Tumblr bruh leggings chicharrones paleo iceland disrupt ramps lo-fi big mood chambray bitters.",
  },
];

const FourthSection = () => {
  const [tabOpen, setTabOpen] = useState({ id: "", state: false, content: "" });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getPreviewContent = (content) => {
    return content.split(" ").splice(0, 20).join(" ");
  };
  const handleClickAnimation = (id, content) => {
    if (tabOpen.id === id && tabOpen.state) {
      setTabOpen({ id: id, state: false, content: "" });
    } else {
      setTabOpen({ id: id, state: true, content: content });
    }
  };

  if (!isMounted) return <Skeleton data={data} />;
  return (
    <div className="w-full flex mt-16 flex-col gap-16 mb-16" id="servicii">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex flex-row justify-center"
      >
        <h2 className="text-6xl sm:text-8xl font-bold text-lightContrastText dark:text-darkHeading">
          Servicii
        </h2>
      </motion.div>
      {/* Content servicii */}
      <div className="w-full flex flex-col gap-6">
        {data.map((d, i) => (
          <motion.div
            initial={{ opacity: 0, x: -100, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            whileHover={{
              scale: 0.95,
              cursor: "pointer",
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              bounce: 1,
              damping: 10,
            }}
            layout
            style={{
              height: tabOpen.id === d.id && tabOpen.state && "500px",
              background: "rgba( 255, 255, 255, 0.1 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 9.5px )",
              WebkitBackdropFilter: "blur( 9.5px )",
              borderRadius: "10px",
              padding: 10,
            }}
            key={d.id}
            className="grid grid-cols-5"
            onClick={() => handleClickAnimation(d.id, d.content)}
          >
            <div className="col-span-2 flex flex-row justify-center items-center">
              <div className="flex flex-col gap-1 justify-center items-center">
                <h2 className="font-bold text-xl sm:text-3xl text-center text-darkContrastText">
                  {d.title}
                </h2>
                <MdArrowDropDown className="fill-white w-[35px] h-[35px]" />
              </div>
            </div>
            <div className="col-span-3 flex flex-row items-center justify-center">
              <p className="text-sm sm:text-xl p-2 text-darkContrastText">
                {tabOpen.id === d.id && tabOpen.state
                  ? d.content
                  : getPreviewContent(d.content)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FourthSection;
