import { Image, motion } from "../../lib/external-components";

const AbordareaNoastra = ({
  data: { first, second, third, fourth, fifth, sixth },
}) => {
  const abordarea = [first, second, third, fourth, fifth, sixth];
  return (
    <div className="w-full flex flex-col items-center mt-16">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex justify-center mb-10"
      >
        <h1 className="text-lightContrastText dark:text-darkContrastText text-center text-5xl sm:text-8xl p-2 font-bold">
          Abordarea noastra
        </h1>
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-2 w-full">
        {abordarea.map((el, i) => (
          <motion.div
            initial={{ opacity: 0, x: -100, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              bounce: 1,
              damping: 10,
            }}
            style={{
              background: "rgba( 255, 255, 255, 0.1 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 9.5px )",
              WebkitBackdropFilter: "blur( 9.5px )",
              borderRadius: "10px",
              padding: 10,
            }}
            className="flex flex-col gap-2 p-3"
            key={i}
          >
            <h3 className="text-lg text-center text-white dark:text-darkContrastText">
              {el.title}
            </h3>
            <div className="block">
              <Image
                src={el.img.sourceUrl}
                alt={el.img.altText}
                layout="responsive"
                width={1920}
                height={1080}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AbordareaNoastra;
