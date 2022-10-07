import { motion } from "../../lib/external-components";

const SwitchButton = ({ isOpen, toggleSwitch, opacity }) => {
  return (
    <div className={`opacity-${opacity}`}>
      <motion.div
        onClick={toggleSwitch}
        whileHover={{ cursor: "pointer" }}
        style={{
          backgroundColor: isOpen ? "#0af37b" : "#f32a0a",
          justifyContent: isOpen ? "end" : "start",
        }}
        className="w-[40px] h-[25px] rounded-xl p-1 flex flex-row"
      >
        <motion.div
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          className="w-[60%] h-full bg-white rounded-xl"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default SwitchButton;
