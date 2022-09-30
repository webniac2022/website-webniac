import {
  Autoplay,
  useEmblaCarousel,
  motion,
} from "../../lib/external-components";
import Image from "next/image";

const Tehnologii = ({
  data: {
    all: {
      first,
      second,
      third,
      fourth,
      fifth,
      sixth,
      seven,
      eight,
      nine,
      ten,
      eleven,
      twelve,
      thirteen,
      fourtheen,
      fiftheen,
      sixtheen,
      seventheen,
      eighteen,
      ninetheen,
    },
  },
}) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ stopOnInteraction: false, delay: 700 }),
  ]);
  const formattedData = [
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourtheen,
    fiftheen,
    sixtheen,
    seventheen,
    eighteen,
    ninetheen,
  ];

  return (
    <div className="mt-16 flex flex-col gap-16 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex justify-center"
      >
        <h2 className="font-bold text-6xl sm:text-8xl text-center text-lightContrastText dark:text-lightHeading">
          Tehnologii
        </h2>
      </motion.div>
      <div ref={emblaRef} className="w-full overflow-hidden bg-white">
        <div className="flex flex-grow bg-white p-1">
          {formattedData.map((d, i) => (
            <div key={i} className="relative w-[120px] h-[80px]">
              <Image
                src={d.sourceUrl}
                alt={d.altText}
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

export default Tehnologii;
