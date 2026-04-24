import React from "react";
import { motion } from "framer-motion";

const LoadingSpinner = ({ asOverlay }) => {
  return (
    <div className={`${asOverlay ? 'fixed inset-0 z-[200] flex items-center justify-center bg-black/40 backdrop-blur-sm' : 'flex justify-center items-center p-4'}`}>
      <div className="relative flex items-center justify-center">
        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-t-blue-500 border-r-transparent border-b-purple-500 border-l-transparent rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
        />
        {/* Inner Pulse */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-6 h-6 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full"
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;