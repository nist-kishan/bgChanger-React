import { useState } from "react";
import { motion } from "framer-motion";
import ColorButton from "./components/ColorButton";
import SectionTabs from "./components/SectionTabs";

const presets = [
  { name: "Sky",     value: "bg-gradient-to-br from-sky-400 to-blue-600" },
  { name: "Rose",    value: "bg-gradient-to-br from-rose-400 to-pink-600 " },
  { name: "Emerald", value: "bg-gradient-to-br from-emerald-400 to-green-600 " },
  { name: "Gray",    value: "bg-gradient-to-br from-gray-600 to-zinc-900 " },
];

export default function App() {
  const [bgClass, setBgClass] = useState(presets[0].value);
  const [customColor, setCustomColor] = useState("");
  const [tab, setTab] = useState("default");


  const applyPreset = (cls) => {
    document.body.style.background = "";
    setBgClass(cls);
    setCustomColor("");
  };

  const applyCustom = () => {
    if (!customColor.trim()) return;
    setBgClass("");
    document.body.style.background = customColor;
    setCustomColor("");
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center px-4 py-10">
      {bgClass && (
        <motion.div
          key={bgClass}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`absolute inset-0 -z-10 ${bgClass}`}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full text-white bg-white/20 dark:bg-gray-800/50 backdrop-blur-md
                   rounded-2xl shadow-2xl p-6 border border-white/30 dark:border-gray-700"
      >
        <h1 className="text-3xl font-bold text-center mb-6">🎨 Background Changer</h1>

        <SectionTabs current={tab} setTab={setTab} />

        {tab === "default" && (
          <div className="grid grid-cols-2 gap-4 mt-6">
            {presets.map((c) => (
              <ColorButton key={c.name} color={c} onClick={() => applyPreset(c.value)} />
            ))}
          </div>
        )}

        {tab === "name" && (
          <div className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="e.g. coral, rebeccapurple"
              value={customColor}
              onChange={(e) => setCustomColor(e.target.value)}
              className="w-full px-4 py-2 rounded-xl bg-white/30 placeholder:text-white/60
                         focus:outline-none focus:ring-2 focus:ring-white"
            />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={applyCustom}
              className="w-full py-2 bg-white/30 rounded-xl font-medium hover:bg-white/40 transition cursor pointer"
            >
              Apply Color Name
            </motion.button>
          </div>
        )}

        {tab === "hex" && (
          <div className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="e.g. #1e40af"
              value={customColor}
              onChange={(e) => setCustomColor(e.target.value)}
              className="w-full px-4 py-2 rounded-xl bg-white/30 placeholder:text-white/60
                         focus:outline-none focus:ring-2 focus:ring-white"
            />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={applyCustom}
              className="w-full py-2 bg-white/30 rounded-xl font-medium hover:bg-white/40 transition cursor-pointer"
            >
              Apply Hash Color
            </motion.button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
