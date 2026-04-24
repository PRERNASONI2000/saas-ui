import React, {useState} from "react";
import { motion } from "framer-motion";
import SuccessModal from "../UI/SuccessModel";
import ErrorModal from "../UI/ErrorModel";
import LoadingSpinner from "../UI/LoadingSpinner";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { s } from "framer-motion/client";

    // 1. Define what your form looks like
interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

const Contact = () => {
   const [isloading, setIsLoading] = useState(false);
   const [successMsg, setSuccessMsg] = useState<string | null>(null);
   const [error, setError] = useState<string | null>(null);

    // Setup Form
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
    // Submit Function
    const onSubmit = async (data:ContactFormData) => {
      
        setIsLoading(true);
        setError(null);
        setSuccessMsg(null); // Purane success messages saaf karein

        try{
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const resultForm = await response.json();

          

            if (!response.ok) {
                throw new Error(resultForm.message || "Something went wrong");
            }

              setSuccessMsg(resultForm.message || "Message sent successfully!");
        }
        catch(err:any){
            setError(err.message || "Something went wrong");
        }
        finally{
            setIsLoading(false);
        }


        // console.log(data);
        // toast.success("Message sent successfully 🎉");
        // reset();
    }

    return (
       <>
       {/* UI Feedback Components - Inhe props pass karna zaroori hai */}
       {isloading && <LoadingSpinner asOverlay />}
     <ErrorModal 
        error={error} 
        onClear={() => setError(null)} 
      />
      
      <SuccessModal 
        show={!!successMsg}
        message={successMsg}
        onConfirm={() =>{
             setSuccessMsg(null);
            toast.success("Message sent successfully 🎉");
        }}
      />
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-slate-900 px-10 py-20 min-h-screen flex items-center justify-center p-6"
        >
            <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
                    <motion.div

                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}>
                        <h2 className="font-extrabold text-white leading-tight text-5xl md:text-7xl">
                            Let’s talk on something
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500"> great</span>
                        </h2>
                        <p className="text-slate-400 mt-6 text-lg max-w-md">
                        Have a project in mind? Reach out and let's build something incredible together.
                    </p>
                    </motion.div>
                    <motion.div

                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}>
                        <div className="bg-slate-800/50 backdrop-blue-xl border border-slate-700 p-8 rounded-3xl shadow-2xl">
                           
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                                {/*name field */}
                               <div>
                                <label className="text-slate-300/70 text-sm mb-2 block"> Full Name</label>
                                 <input
                                    type="text"
                                    placeholder="your Name"
                                    {...register("name", { required: "Name is Required" , minLength:{ value: 5, message: "Minimum 5 characters" } })}
                                    className={`w-full p-3 bg-slate-900/50 border ${errors.name? 'border-red-500' : 'border-slate-600'} rounded-xl text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
                                />
                                {errors.name && (<p className="text-red-500 text-xs mt-1">{errors.name?.message}</p>)}
                               </div>
                               {/* Email Field */}
                        <div>
                            <label className="text-slate-300/70 text-sm mb-2 block">Email Address</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                                })}
                                className={`w-full p-3 bg-slate-900/50 border ${errors.email ? 'border-red-500' : 'border-slate-600'} rounded-xl text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
                            />
                            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email?.message}</p>}
                        </div>

                        {/* Message Field */}
                        <div>
                            <label className="text-slate-300/70 text-sm mb-2 block">Message</label>
                            <textarea
                                placeholder="Tell me about your project..."
                                {...register("message", { required: "Message cannot be empty" })}
                                className={`w-full p-3 bg-slate-900/50 border ${errors.message ? 'border-red-500' : 'border-slate-600'} rounded-xl text-white h-32 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none`}
                            />
                            {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message?.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl mt-2 shadow-lg shadow-blue-500/20 transform hover:-translate-y-1 transition-all duration-200"
                        >
                            Send Message 🚀
                        </button>
                            </form>
                        </div>
                    </motion.div>
            </div>
        </motion.section>
       </>
    )
}

export default Contact;