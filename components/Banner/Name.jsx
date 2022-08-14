import React from "react";

import { motion } from "framer-motion";

export default function Name() {
  return (
    <motion.h1
      /*  className={styles.section} */
      animate={{ color: "#ff2994", x: 100, y: -10 }}
    ></motion.h1>
  );
}
