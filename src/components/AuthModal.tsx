import React, { useState } from "react";
import SuccessModal from "../UI/SuccessModel"; // Path check kar lena
import ErrorModal from "../UI/ErrorModel";     // ErrorModal import karein
import LoadingSpinner from "../UI/LoadingSpinner"; // LoadingSpinner import karein
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Lock, User } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  // States for feedback
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const AuthSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // 1. Loading start
    setError(null);     // Purane errors saaf karein
    
    const endpoint = isLogin ? 'login' : 'signup';
    
    try {
      const response = await fetch(`https://saas-backend-tqzv.onrender.com/api/users/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // 2. Success handle karein
      setSuccessMsg(isLogin ? "Welcome back! Login successful." : "Account created successfully!");
      
      // Kuch seconds baad modal band kar sakte hain ya user ko redirect
      setTimeout(() => {
        setSuccessMsg(null);
        onClose();
      }, 2000);

    } catch (err: any) {
      // 3. Error handle karein (Alert ki jagah state use karein)
      setError(err.message || "Could not connect to server.");
    } finally {
      setIsLoading(false); // 4. Loading stop
    }
  };

  return (
    <>
      {/* feedback Components */}
      {isLoading && <LoadingSpinner asOverlay />}
      <ErrorModal error={error} onClear={() => setError(null)} />
      <SuccessModal 
        show={!!successMsg} 
        message={successMsg} 
        onConfirm={() => {
            setSuccessMsg(null);
            onClose();
        }} 
      />

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl"
            >
              {/* Form Content (Aapka existing code) */}
              <button onClick={onClose} className="absolute right-4 top-4 text-white/50 hover:text-white">
                <X size={24} />
              </button>

              <h2 className="mb-6 text-center text-3xl font-bold text-white">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h2>

              <form className="space-y-4" onSubmit={AuthSubmitHandler}>
                {!isLogin && (
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 text-white/40" size={20} />
                    <input
                      name="name"
                      value={formData.name}
                      onChange={inputChangeHandler}
                      type="text"
                      placeholder="Full Name"
                      className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white outline-none focus:border-blue-500 transition-all"
                    />
                  </div>
                )}

                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 text-white/40" size={20} />
                  <input
                    name="email"
                    value={formData.email}
                    onChange={inputChangeHandler}
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white outline-none focus:border-blue-500 transition-all"
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-3.5 text-white/40" size={20} />
                  <input
                    name="password"
                    value={formData.password}
                    onChange={inputChangeHandler}
                    type="password"
                    placeholder="Password"
                    className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white outline-none focus:border-blue-500 transition-all"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isLoading}
                  className={`w-full rounded-xl py-3 font-bold text-white shadow-lg transition-all active:scale-95 ${
                    isLoading ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/30'
                  }`}
                >
                  {isLogin ? "Login" : "Sign Up"}
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-white/60">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="font-bold text-blue-400 hover:underline"
                >
                  {isLogin ? "Sign Up" : "Login"}
                </button>
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AuthModal;