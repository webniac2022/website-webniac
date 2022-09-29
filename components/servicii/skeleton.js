import { motion } from "../../lib/external-components";

const Skeleton = ({ data }) => {
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
      <div className="w-full flex flex-col gap-6">
        {data.map((d, i) => (
          <motion.div
            initial={{ opacity: 0, x: -100, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              bounce: 1,
              damping: 10,
            }}
            layout
            key={d.id}
            className="grid grid-cols-5 rounded"
          >
            <div className="col-span-2 flex flex-row justify-center items-center bg-darkComponents dark:bg-lightComponents">
              <h2 className="font-bold text-xl sm:text-3xl text-center text-darkContrastText dark:bg-lightContrastText">
                {d.title}
              </h2>
            </div>
            <div className="col-span-3 flex flex-row items-center justify-center bg-darkComponents dark:bg-lightComponents">
              <p className="text-sm sm:text-xl p-2"></p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton;
