import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, X } from "lucide-react";

interface ErrorModalProps {
  error: string | null;
  onClear: () => void;
}

const ErrorModal = ({ error, onClear }: ErrorModalProps) => {
  return (
    <AnimatePresence>
      {error && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClear}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />
          
          {/* Modal Box */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-red-500/30 bg-gray-900 p-6 shadow-2xl"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10">
                <AlertCircle className="text-red-500" size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">An Error Occurred!</h3>
              <p className="text-gray-400 mb-6">{error}</p>
              
              <button
                onClick={onClear}
                className="w-full rounded-xl bg-red-600 py-3 font-bold text-white transition-all hover:bg-red-700 active:scale-95 shadow-lg shadow-red-900/20"
              >
                Okay
              </button>
            </div>

            {/* Close Button */}
            <button 
              onClick={onClear}
              className="absolute right-3 top-3 text-gray-500 hover:text-white"
            >
              <X size={20} />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ErrorModal;