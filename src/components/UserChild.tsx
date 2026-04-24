import React from "react";
import { QuoteIcon } from "lucide-react";

interface userprops  {
    img: string,
    name: string,
    text: string,
    role: string
}

const UserChild = ({ img, name, text, role }: userprops) => {
  return (
    <div className="group bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full">
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <img 
          src={img} 
          alt={name} 
          loading="lazy"
          className="w-full h-auto object-cover transition-opacity opacity-100 group-hover:opacity-85" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content Section */}
      <div className="p-6 relative flex-grow flex flex-col">
        {/* Floating Quote Icon */}
        <div className="absolute -top-6 right-6 bg-blue-600 text-white p-3 rounded-xl shadow-lg transform transition-transform group-hover:rotate-12">
          <QuoteIcon size={20} fill="currentColor" />
        </div>

        <p className="text-slate-600 italic leading-relaxed mb-6 flex-grow">
          "{text}"
        </p>

        <div className="mt-auto border-t border-slate-100 pt-4">
          <h4 className="text-slate-900 font-bold text-lg">{name}</h4>
          <p className="text-blue-600 font-medium text-xs uppercase tracking-wider">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default UserChild;