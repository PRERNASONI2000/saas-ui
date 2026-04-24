import React from "react";
import { motion } from "framer-motion";
import { GitBranchIcon, BirdIcon, LinkIcon, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-cols-1">
            <h2 className="text-2xl font-bold text-white mb-4">
              SaaS<span className="text-blue-500">MPP</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Building the next generation of digital experiences with modern tech stacks and performant code.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Platform</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Landing Page</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Features</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Testimonials</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6">Connect</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-1 hover:text-blue-400 transition-colors cursor-pointer">
                LinkedIn <ArrowUpRight size={14} />
              </li>
              <li className="flex items-center gap-1 hover:text-blue-400 transition-colors cursor-pointer">
                GitHub <ArrowUpRight size={14} />
              </li>
              <li className="flex items-center gap-1 hover:text-blue-400 transition-colors cursor-pointer">
                Twitter <ArrowUpRight size={14} />
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-white font-semibold mb-6">Stay Updated</h3>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-500 transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {currentYear} SaaS-MPP. All rights reserved. Built by Prerna.
          </p>
          
          <div className="flex gap-6">
            <motion.a whileHover={{ y: -3 }} href="#" className="text-slate-400 hover:text-white transition-colors">
              <GitBranchIcon size={20} />
            </motion.a>
            <motion.a whileHover={{ y: -3 }} href="#" className="text-slate-400 hover:text-white transition-colors">
              <BirdIcon size={20} />
            </motion.a>
            <motion.a whileHover={{ y: -3 }} href="#" className="text-slate-400 hover:text-white transition-colors">
              <LinkIcon size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;