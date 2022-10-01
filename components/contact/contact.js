import { motion } from "../../lib/external-components";
import { useForm } from "@formspree/react";
import { MdCelebration } from "react-icons/md";

const SeventhSection = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);

  return (
    <div className="w-full mb-5 flex flex-col gap-16 items-center" id="contact">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="mt-16 flex flex-row justify-center"
      >
        <h1 className="text-center font-bold text-6xl sm:text-8xl text-lightContrastText dark:text-darkContrastText">
          Contact
        </h1>
      </motion.div>

      {/* form */}
      {state.succeeded ? (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="rounded-md bg-firstGradient p-5 flex flex-col justify-center items-center gap-5"
        >
          <h2 className="text-xl font-bold text-white">
            Multumim pentru incredere!
          </h2>
          <MdCelebration className="w-[30px] h-[30px] fill-green-400" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, x: -100, y: -50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            bounce: 1,
            damping: 10,
          }}
          className="w-[90vw] sm:w-[60vw] md:w-[60vw] lg:w-[50vw] flex justify-center"
        >
          <form
            onSubmit={handleSubmit}
            className="flex-grow gap-6 flex flex-col items-center"
          >
            <div className="flex flex-col gap-2 w-[80%]">
              <label
                className="text-white dark:text-darkContrastText text-xl"
                htmlFor="nume"
              >
                Nume
              </label>
              <input
                style={{
                  background: "rgba( 255, 255, 255, 0.1 )",
                  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  backdropFilter: "blur( 9.5px )",
                  WebkitBackdropFilter: "blur( 9.5px )",
                  borderRadius: "10px",
                  padding: 10,
                }}
                className="p-3 rounded text-white dark:text-darkContrastText"
                id="nume"
                name="nume"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2 w-[80%]">
              <label
                className="text-white dark:text-darkContrastText text-xl"
                htmlFor="email"
              >
                Email
              </label>
              <input
                style={{
                  background: "rgba( 255, 255, 255, 0.1 )",
                  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  backdropFilter: "blur( 9.5px )",
                  WebkitBackdropFilter: "blur( 9.5px )",
                  borderRadius: "10px",
                  padding: 10,
                }}
                className="p-3 rounded text-white dark:text-darkContrastText"
                id="email"
                name="email"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-2 w-[80%]">
              <label
                className="text-xl text-white dark:text-darkContrastText"
                htmlFor="mesaj"
              >
                Mesaj
              </label>
              <textarea
                style={{
                  background: "rgba( 255, 255, 255, 0.1 )",
                  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  backdropFilter: "blur( 9.5px )",
                  WebkitBackdropFilter: "blur( 9.5px )",
                  borderRadius: "10px",
                  padding: 10,
                }}
                className="p-3 rounded text-white dark:text-darkContrastText"
                id="mesaj"
                name="mesaj"
                aria-multiline={true}
                rows={4}
              />
            </div>
            <div className="flex flex-col p-3">
              <motion.button
                whileHover={{
                  scale: 0.95,
                  opacity: 0.65,
                }}
                style={{
                  background: "rgba( 255, 255, 255, 0.1 )",
                  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  backdropFilter: "blur( 9.5px )",
                  WebkitBackdropFilter: "blur( 9.5px )",
                  borderRadius: "10px",
                  padding: 10,
                }}
                type="submit"
                disabled={state.submitting}
                className="border-2 border-white dark:border-darkContrastText font-bold text-white dark:text-darkContrastText w-28 p-1 rounded text-center hover:cursor-pointer"
              >
                Trimite
              </motion.button>
            </div>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default SeventhSection;
