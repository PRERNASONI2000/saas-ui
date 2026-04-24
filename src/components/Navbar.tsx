import React from "react";
import { motion } from "framer-motion";
import AuthModal from "./AuthModal";
import { User, LogIn } from "lucide-react"; 

const Navbar = () => {
    const [isAuthOpen, setIsAuthOpen] = React.useState(false);
  return (
     <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/5 backdrop-blur-lg border border-white/10 px-6 py-3 rounded-2xl shadow-2xl">
        {/* Logo */}
        <div className="text-white font-bold text-2xl tracking-tight">
          Nexus<span className="text-blue-500">.</span>
        </div>

        {/* Desktop Links - Optional centered nav */}
        {/* <div className="hidden md:flex gap-8 text-gray-300 font-medium">
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">Solutions</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
        </div> */}

        {/* Actions: Profile & Login */}
        <div className="flex items-center gap-4">
          <button onClick={() => setIsAuthOpen(true)} className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors font-medium px-4 py-2">
            <LogIn size={18} />
            <span className="hidden sm:inline">Login</span>
          </button>
          
          <button className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 hover:scale-110 transition-transform shadow-lg overflow-hidden">
             <User size={20} className="text-white" />
             {/* You can replace the Icon with an <img src="profile.jpg" /> here later */}
          </button>
        </div>
      </div>
      {/* Modal is called here */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </motion.nav>
  );
}

export default Navbar;