import React from "react";
import { motion } from "../../lib/external-components";

const AnimatedText = ({ text }) => {
  return (
    <div className="flex flex-row">
      {[...text].map((t, i) => (
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * i }}
          key={i}
        >
          {t}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedText;
