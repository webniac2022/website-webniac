import React, { useRef, useEffect, useState } from "react";
import { Image, motion, useMeasure } from "../../lib/external-components";

const data = [
  "https://res.cloudinary.com/webniac/image/upload/v1662630268/WEBNIAC/next_ov85sq.svg",
  "https://res.cloudinary.com/webniac/image/upload/v1662630268/WEBNIAC/vercel_n8vtns.svg",
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
  const [ref, bounds] = useMeasure();
  const screenRef = useRef();
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    setScreenSize(screenRef.current.clientWidth);
  }, [screenRef]);

  return (
    <div className="mt-16 flex flex-col gap-10">
      {/* Heading */}
      <div className="flex justify-center">
        <h1 className="text-center font-bold text-5xl text-lightContrastText dark:text-darkHeading">
          Tehnologii
        </h1>
      </div>
      {/* Short intro */}
      <div className="flex justify-start">
        <p className="text-xl text-left p-2">
          Lucram doar cu tehnologii si tool-uri de top din industrie care sunt
          in trend in momentul de fata.
        </p>
      </div>
      <div className="flex justify-start">
        <p className="text-xl text-left p-2">
          Suntem mari fani ai abordarii headless si anume decuplarea
          frontendului de backend. Acest aspect ne deschide noi oportunitati si
          ne permite sa implementam in proiectele noastre solutii viabile din
          punct de vedere al performantei, scalabilitatii si a securitatii
          aplicatiilor.
        </p>
      </div>
      {/* Tehnologogies list */}
      <motion.div
        ref={screenRef}
        className="relative mt-5 bg-white rounded overflow-x-hidden overflow-y-hidden flex flex-row"
      >
        {/* First container */}
        <motion.div
          initial={{ x: 120 }}
          animate={{ x: screenSize - bounds.width }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: [0.75, 0.16, 0.34, 0.93],
          }}
          ref={ref}
          className="rounded flex flex-row flex-shrink-0 overflow-x-hidden bg-white"
        >
          {data.map((d, i) => (
            <motion.div className="flex-shrink-0" key={d}>
              <Image src={d} alt={d} width={120} height={100} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ThirdSection;
