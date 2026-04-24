
import { motion } from "framer-motion";
import Navbar from "./Navbar";


const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 overflow-hidden">
      <Navbar />

      {/* Background image layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/main2.jpg"  
          alt="hero" 
          className="w-full h-full object-cover block"  
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        {/* Bottom subtle fade to black/dark background */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-8xl font-extrabold bg-gradient-to-r from-blue-200 via-purple-300 to-white bg-clip-text text-transparent leading-tight">
            Build Stunning <br /> UI Faster
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="mt-6 text-gray-300 text-xl md:text-2xl leading-relaxed max-w-lg">
            Create modern, scalable, and beautiful web apps with ease. 
            The ultimate toolkit for next-gen developers.
          </p>
        </motion.div>

        <motion.div 
          className="mt-10 flex gap-4 flex-wrap"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all">
            Get Started
          </button>
          <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
            Live Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;