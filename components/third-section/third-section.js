import React, { useEffect, useRef, useState } from "react";
import { motion, Image, useMeasure } from "../../lib/external-components";

const data = [
  "https://res.cloudinary.com/webniac/image/upload/v1662630268/WEBNIAC/vercel_n8vtns.svg",
  "https://res.cloudinary.com/webniac/image/upload/v1662630268/WEBNIAC/next_ov85sq.svg",
  "https://res.cloudinary.com/webniac/image/upload/v1662630268/WEBNIAC/shopify_nnosyw.svg",
  "https://res.cloudinary.com/webniac/image/upload/v1662630268/WEBNIAC/tailwind_vg0mhm.svg",
  "https://res.cloudinary.com/webniac/image/upload/v1662630266/WEBNIAC/mui_r0wrul.svg",
  "https://res.cloudinary.com/webniac/image/upload/v1662817350/WEBNIAC/figma_t0zewh.svg",
  "https://res.cloudinary.com/webniac/image/upload/v1662630266/WEBNIAC/firebase_pvb4qe.svg",
  "https://res.cloudinary.com/webniac/image/upload/v1662630266/WEBNIAC/mongo_ubhrob.svg",
  "https://res.cloudinary.com/webniac/image/upload/v1662630266/WEBNIAC/framer_dalkuz.svg",
  "https://res.cloudinary.com/webniac/image/upload/v1662630266/WEBNIAC/wordpress_phiaco.svg",
  "https://res.cloudinary.com/webniac/image/upload/v1662630266/WEBNIAC/github_czcycv.svg",
  "https://res.cloudinary.com/webniac/image/upload/v1662817766/WEBNIAC/adobe_illustrator_vithxj.svg",
  "https://res.cloudinary.com/webniac/image/upload/v1662817878/WEBNIAC/google-ads_fsqeuu.svg",
  "https://res.cloudinary.com/webniac/image/upload/v1662817456/WEBNIAC/facebookAds_iq053o.svg",
  "https://res.cloudinary.com/webniac/image/upload/v1662818154/WEBNIAC/cloudinary_hjbr6f.svg",
  "https://res.cloudinary.com/webniac/image/upload/v1662818275/WEBNIAC/photoshop_lpjjat.svg",
  "https://res.cloudinary.com/webniac/image/upload/v1662818355/WEBNIAC/canva_v9nnqv.svg",
];

const ThirdSection = () => {
  const sliderRef = useRef();
  const slidesRef = useRef();
  const [isMounted, setIsMounted] = useState(false);
  const [carouselWidths, setCarouselWidths] = useState({
    slider: 0,
    slides: 0,
  });

  useEffect(() => {
    if (!isMounted) setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      updateCarouselWidths();
    }
  }, [isMounted]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      updateCarouselWidths();
    });
    updateCarouselWidths();
    return () => window.removeEventListener("resize", updateCarouselWidths);
  }, []);

  const updateCarouselWidths = () => {
    setCarouselWidths({
      slider: sliderRef.current.offsetWidth,
      slides: slidesRef.current.scrollWidth,
    });
  };

  return (
    <div className="w-full mt-16 flex flex-col gap-5 overflow-x-hidden">
      <div className="flex justify-center">
        <h2 className="font-bold text-5xl text-center text-lightContrastText dark:text-darkHeading">
          Tehnologii
        </h2>
      </div>
      <div ref={sliderRef} className="mt-16 bg-white">
        <motion.ul
          initial={{ x: 0 }}
          animate={{ x: -carouselWidths.slides + carouselWidths.slider }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: [0.75, 0.16, 0.34, 0.93],
          }}
          ref={slidesRef}
          className="list-none flex flex-row bg-white"
        >
          {data.map((d, i) => (
            <li key={d} className="flex-shrink-0 relative w-[200px] h-[200px]">
              <Image
                src={d}
                alt={d}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default ThirdSection;
