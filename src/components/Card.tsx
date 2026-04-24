
import { motion } from "framer-motion";
import CardChild from "./CardChild";
import CardData from "./CardData.json";



const Card = () => {
    return(
        <motion.section 
         initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
        className="rounded-lg py-20 px-6 bg-gradient-to-r relative">
            <div className="absolute left-0 top-20 blur-3xl w-[150px] h-[150px] bg-pink-200"></div>
            <div className="absolute right-0 top-20 blur-3xl w-[100px] h-[100px] bg-indigo-300"></div>
            <div className="absolute right-0 bottom-0 blur-3xl w-[150px] h-[150px] bg-pink-200"></div>
            <div className="absolute left-0 bottom-0 blur-3xl w-[150px] h-[150px] bg-indigo-200"></div>
           <div className="max-w-7xl text-center mx-auto">
             <h2 className="text-4xl font-bold mb-10 md:text-6xl text-black">
      Our Features
    </h2>
           <div className="mt-20 mx-7 md:mx-5 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-center">
              {CardData.map((item)=>
             <CardChild 
             key={item.id} // Unique key zaroori hai
          img={item.img}
          title={item.title}
          details={item.details}
          price={item.price}
             
             />
            )}
           </div>
           </div>
        </motion.section>
    )
}

export default Card;