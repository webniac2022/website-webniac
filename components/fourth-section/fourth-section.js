import React, { useState, useEffect } from "react";
import { motion, Image, LayoutGroup } from "../../lib/external-components";
import { RiMore2Fill } from "react-icons/ri";

const data = [
  { title: "UI/UX Design", id: "ui", content: "UX design made simple" },
  { title: "Branding", id: "branding", content: "UX design made simple" },
  {
    title: "Dezvoltare aplicatii web",
    id: "apps",
    content: "UX design made simple",
  },
  {
    title: "Dezvoltare Website-uri de prezentare",
    id: "website",
    content: "UX design made simple",
  },
  {
    title: "Dezvoltare platforme ecommerce",
    id: "ecommerce",
    content: "UX design made simple",
  },
  { title: "Optimizare SEO", id: "seo", content: "UX design made simple" },
  { title: "Promovare", id: "promovare", content: "UX design made simple" },
];

const FourthSection = () => {
  const [tabOpen, setTabOpen] = useState({ id: "", state: false });

  const handleClickAnimation = (id) => {
    if (tabOpen.id === id && tabOpen.state) {
      setTabOpen({ id: id, state: false });
    } else {
      setTabOpen({ id: id, state: true });
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
            className="p-2 rounded w-[90vw] sm:w-[50vw]  h-[30vh] shadow-sm bg-lightComponents dark:bg-darkComponents flex flex-row items-center justify-center"
          >
            <div className="w-full flex flex-row justify-between">
              <div>
                <h2 className="font-bold text-2xl text-white">{d.title}</h2>
              </div>
              <div className="">
                <RiMore2Fill
                  onClick={() => handleClickAnimation(d.id)}
                  className="hover:cursor-pointer animate-pulse z-10 w-[50px] h-[50px] fill-darkComponents dark:fill-lightComponents"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FourthSection;
