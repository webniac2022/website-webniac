import { useState, useEffect } from "react";
import { motion, LayoutGroup } from "../../lib/external-components";
import { MdArrowDropDown } from "react-icons/md";
import Skeleton from "./skeleton";

const Servicii = ({
  data: { aplicatii, design, ecommerce, mentenanta, seo, website },
}) => {
  const [tabOpen, setTabOpen] = useState({ id: "", state: false, content: "" });
  const [isMounted, setIsMounted] = useState(false);

  const formattedData = [
    aplicatii,
    design,
    ecommerce,
    mentenanta,
    seo,
    website,
  ];

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

  if (!isMounted) return <Skeleton data={formattedData} />;

  return (
    <div className="w-full flex flex-col mt-16 gap-16 mb-16 id='servicii">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex flex-row justify-center"
      >
        <h2 className="text-6xl sm:text-8xl font-bold text-lightContrastText dark:text-darkContrastText">
          Servicii
        </h2>
      </motion.div>
      {/* Content */}
      <div className="w-full flex flex-col gap-6">
        <LayoutGroup>
          {formattedData.map((d, i) => {
            return (
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
                  height: "auto",
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
                <div className="col-span-2 flex flex-row items-center justify-center">
                  <h2 className="font-bold text-xl sm:text-3xl text-center text-white dark:text-darkContrastText">
                    {d.title}
                  </h2>
                </div>

                <div className="col-span-3">
                  <p
                    className={
                      tabOpen.id === d.id && tabOpen.state
                        ? `text-lg md:text-2xl p-2 text-white dark:text-darkContrastText`
                        : `text-xs md:text-xl p-2 text-white dark:text-darkContrastText`
                    }
                  >
                    {tabOpen.id === d.id && tabOpen.state
                      ? d.content
                      : getPreviewContent(d.content)}
                  </p>
                </div>
                <MdArrowDropDown className="fill-white dark:fill-darkContrastText w-[35px] h-[35px]" />
              </motion.div>
            );
          })}
        </LayoutGroup>
      </div>
    </div>
  );
  // return (
  //   <div className="w-full flex mt-16 flex-col gap-16 mb-16" id="servicii">
  //     {/* Title */}
  //     <motion.div
  //       initial={{ opacity: 0, x: -50 }}
  //       whileInView={{ opacity: 1, x: 0 }}
  //       transition={{ type: "spring", stiffness: 100 }}
  //       className="flex flex-row justify-center"
  //     >
  //       <h2 className="text-6xl sm:text-8xl font-bold text-lightContrastText dark:text-darkContrastText">
  //         Servicii
  //       </h2>
  //     </motion.div>
  //     {/* Content servicii */}
  //     <div className="w-full flex flex-col gap-6">
  //       <LayoutGroup>
  //         {formattedData.map((d, i) => (
  //           <motion.div
  //             initial={{ opacity: 0, x: -100, y: -50 }}
  //             whileInView={{ opacity: 1, x: 0, y: 0 }}
  //             whileHover={{
  //               scale: 0.95,
  //               cursor: "pointer",
  //             }}
  //             transition={{
  //               type: "spring",
  //               stiffness: 100,
  //               bounce: 1,
  //               damping: 10,
  //             }}
  //             layout
  //             style={{
  //               height: "auto",
  //               background: "rgba( 255, 255, 255, 0.1 )",
  //               boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  //               backdropFilter: "blur( 9.5px )",
  //               WebkitBackdropFilter: "blur( 9.5px )",
  //               borderRadius: "10px",
  //               padding: 10,
  //             }}
  //             key={d.id}
  //             className="grid grid-cols-5"
  //             onClick={() => handleClickAnimation(d.id, d.content)}
  //           >
  //             <div className="col-span-2 flex flex-col justify-center items-center">
  //               <div className="flex flex-col gap-1 justify-center items-center">
  //                 <h2 className="font-bold text-xl sm:text-3xl text-center text-white dark:text-darkContrastText">
  //                   {d.title}
  //                 </h2>
  //                 <MdArrowDropDown className="fill-white dark:fill-darkContrastText w-[35px] h-[35px]" />
  //               </div>
  //             </div>

  //             <div className="col-span-3 flex flex-row items-center justify-center">
  //               <p
  //                 className={
  //                   tabOpen.id === d.id && tabOpen.state
  //                     ? `text-lg md:text-2xl p-2 text-white dark:text-darkContrastText`
  //                     : `text-xs md:text-xl p-2 text-white dark:text-darkContrastText`
  //                 }
  //               >
  //                 {tabOpen.id === d.id && tabOpen.state
  //                   ? d.content
  //                   : getPreviewContent(d.content)}
  //               </p>
  //             </div>
  //           </motion.div>
  //         ))}
  //       </LayoutGroup>
  //     </div>
  //   </div>
  // );
};

export default Servicii;
