import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X } from "lucide-react";

// 1. Interface add karein props ke liye
interface SuccessModalProps {
  message: string | null;
  show: boolean;
  onConfirm: () => void;
}

const SuccessModal = ({ message, show, onConfirm }: SuccessModalProps) => {
  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-4">
          {/* Backdrop with heavy blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onConfirm}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          
          {/* Success Box */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-emerald-500/30 bg-[#0a0f0a] p-8 shadow-[0_0_50px_rgba(16,185,129,0.1)] text-center"
          >
            {/* Animated Checkmark Icon */}
            <div className="flex justify-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10"
              >
                <CheckCircle className="text-emerald-500" size={48} />
              </motion.div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Success!</h3>
            <p className="text-emerald-100/60 mb-8 leading-relaxed">
              {message || "Action completed successfully."}
            </p>
            
            <button
              onClick={onConfirm}
              className="w-full rounded-2xl bg-emerald-600 py-3.5 font-bold text-white transition-all hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] active:scale-95"
            >
              Continue
            </button>

            {/* Subtle X button at top right */}
            <button 
              onClick={onConfirm}
              className="absolute right-4 top-4 text-emerald-100/20 hover:text-white"
            >
              <X size={20} />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;