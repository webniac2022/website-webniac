import {
  Image,
  Autoplay,
  useEmblaCarousel,
  motion,
} from "../../lib/external-components";
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
  "https://res.cloudinary.com/webniac/image/upload/v1663067208/WEBNIAC/netlify_hqenvj.svg",
];

const ThirdSection = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ stopOnInteraction: false }),
  ]);
  return (
    <div className="mt-16 flex flex-col gap-16 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex justify-center"
      >
        <h2 className="font-bold text-5xl text-center text-lightContrastText dark:text-darkHeading">
          Tehnologii
        </h2>
      </motion.div>
      <div ref={emblaRef} className="w-full overflow-hidden bg-white">
        <div className="flex flex-grow bg-white">
          {data.map((d, i) => (
            <div key={d} className="relative w-[150px] h-[150px]">
              <Image
                src={d}
                alt={d}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
