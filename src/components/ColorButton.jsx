import { motion } from "framer-motion";

const ColorButton = ({ color, onClick }) => (
  <motion.button
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className="w-full py-3 rounded-xl bg-white/20 text-white font-medium backdrop-blur hover:bg-white/30 transition cursor-pointer"
  >
    {color.name}
  </motion.button>
);

export default ColorButton;
