import React, { useState, useEffect } from "react";
import { motion, Image, LayoutGroup } from "../../lib/external-components";
import { FiChevronDown } from "react-icons/fi";

const data = [
  {
    title: "UI/UX Design",
    id: "ui",
    content:
      "UI/UX I'm baby chartreuse master cleanse hashtag roof party retro pop-up. Meh small batch master cleanse, ugh aesthetic yes plz hoodie organic thundercats wolf dreamcatcher Brooklyn whatever. You probably haven't heard of them yes plz hella normcore adaptogen enamel pin 90's poutine bodega boys fashion axe williamsburg. Yes plz roof party pok pok ethical. Sus scenester microdosing readymade, unicorn iPhone art party shoreditch you probably haven't heard of them chartreuse. Tumblr bruh leggings chicharrones paleo iceland disrupt ramps lo-fi big mood chambray bitters.",
  },
  {
    title: "Branding",
    id: "branding",
    content:
      "Branding I'm baby chartreuse master cleanse hashtag roof party retro pop-up. Meh small batch master cleanse, ugh aesthetic yes plz hoodie organic thundercats wolf dreamcatcher Brooklyn whatever. You probably haven't heard of them yes plz hella normcore adaptogen enamel pin 90's poutine bodega boys fashion axe williamsburg. Yes plz roof party pok pok ethical. Sus scenester microdosing readymade, unicorn iPhone art party shoreditch you probably haven't heard of them chartreuse. Tumblr bruh leggings chicharrones paleo iceland disrupt ramps lo-fi big mood chambray bitters.",
  },
  {
    title: "Dezvoltare aplicatii web",
    id: "apps",
    content:
      "Aplicatii web I'm baby chartreuse master cleanse hashtag roof party retro pop-up. Meh small batch master cleanse, ugh aesthetic yes plz hoodie organic thundercats wolf dreamcatcher Brooklyn whatever. You probably haven't heard of them yes plz hella normcore adaptogen enamel pin 90's poutine bodega boys fashion axe williamsburg. Yes plz roof party pok pok ethical. Sus scenester microdosing readymade, unicorn iPhone art party shoreditch you probably haven't heard of them chartreuse. Tumblr bruh leggings chicharrones paleo iceland disrupt ramps lo-fi big mood chambray bitters.",
  },
  {
    title: "Dezvoltare Website-uri de prezentare",
    id: "website",
    content:
      "Websiteuri I'm baby chartreuse master cleanse hashtag roof party retro pop-up. Meh small batch master cleanse, ugh aesthetic yes plz hoodie organic thundercats wolf dreamcatcher Brooklyn whatever. You probably haven't heard of them yes plz hella normcore adaptogen enamel pin 90's poutine bodega boys fashion axe williamsburg. Yes plz roof party pok pok ethical. Sus scenester microdosing readymade, unicorn iPhone art party shoreditch you probably haven't heard of them chartreuse. Tumblr bruh leggings chicharrones paleo iceland disrupt ramps lo-fi big mood chambray bitters.",
  },
  {
    title: "Dezvoltare platforme ecommerce",
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
    title: "Promovare",
    id: "promovare",
    content:
      "Promovare I'm baby chartreuse master cleanse hashtag roof party retro pop-up. Meh small batch master cleanse, ugh aesthetic yes plz hoodie organic thundercats wolf dreamcatcher Brooklyn whatever. You probably haven't heard of them yes plz hella normcore adaptogen enamel pin 90's poutine bodega boys fashion axe williamsburg. Yes plz roof party pok pok ethical. Sus scenester microdosing readymade, unicorn iPhone art party shoreditch you probably haven't heard of them chartreuse. Tumblr bruh leggings chicharrones paleo iceland disrupt ramps lo-fi big mood chambray bitters.",
  },
];

const FourthSection = () => {
  const [tabOpen, setTabOpen] = useState({ id: "", state: false, content: "" });

  const handleClickAnimation = (id, content) => {
    if (tabOpen.id === id && tabOpen.state) {
      setTabOpen({ id: id, state: false, content: "" });
    } else {
      setTabOpen({ id: id, state: true, content: content });
    }
  };

  useEffect(() => {
    console.log(tabOpen);
  }, [tabOpen]);

  return (
    <div className="w-full flex mt-16 flex-col gap-16 mb-16" id="servicii">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex flex-row justify-center"
      >
        <h2 className="text-5xl font-bold text-lightContrastText dark:text-darkHeading">
          Servicii
        </h2>
      </motion.div>
      {/* Content servicii */}
      <motion.div className="flex flex-col gap-5 items-center">
        {data.map((d, i) => (
          <motion.div
            key={d.id}
            layout
            style={{
              height: tabOpen.id === d.id && tabOpen.state ? "500px" : "100px",
            }}
            initial={{ opacity: 0, x: -100, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              bounce: 1,
              damping: 10,
            }}
            onClick={() => handleClickAnimation(d.id, d.content)}
            className="p-2 rounded w-[90vw] sm:w-[50vw]  h-[30vh] shadow-sm bg-lightComponents dark:bg-darkComponents flex flex-col items-center justify-center hover:cursor-pointer"
          >
            <div className="flex flex-col gap-3 items-center justify-center">
              <div>
                <h2 className="text-bold text-lg text-darkHeading dark:text-darkContrastText">
                  {d.title}
                </h2>
              </div>
              {tabOpen.id === d.id && tabOpen.state && (
                <div className="p-5">
                  <p className="text-sm text-darkContrastText dark:text-darkContrastText">
                    {tabOpen.content}
                  </p>
                </div>
              )}
              <div>
                <FiChevronDown className="w-[30px] h-[30px] fill-darkContrastText dark:fill-darkContrastText" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FourthSection;
