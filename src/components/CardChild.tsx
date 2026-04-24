
// import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

// 1. Define what the props look like

interface Cardprops {
    img:string,
    title:string,
    details:string,
    price:string,
}

// const cardItemVarients = {
//    hidden:{opacity: 0, y: 30},
//    visible:{ opacity: 1, y: 0, transition: { duration: 0.5 } }
// }

const CardChild = ({img, title, details, price}: Cardprops) => {
    return(<motion.div
     whileHover={{ y: -8, scale: 1.02 }}
    transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {/* <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        transitionSpeed={300}
        scale={1.05}
        className="h-full"
      > */}
      {/* <Tilt
  tiltMaxAngleX={5}
  tiltMaxAngleY={5}
  perspective={800}
  transitionSpeed={800}
  scale={1.01}
  glareEnable={false}
  className="h-full"
> */}
        <div className="group relative h-full bg-white/80 backdrop-blur-lg border border-white/20 shadow-xl rounded-3xl p-8 transition duration-200 ease-out hover:shadow-2xl hover:border-blue-400/50 overflow-hidden">
          
          {/* Background Decorative Gradient (Hover pe dikhega) */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-100 rounded-full blur-3xl group-hover:bg-blue-200 transition-colors duration-500 ease" />

          {/* Image Container */}
          <div className="relative z-10 w-full mb-6 overflow-hidden rounded-2xl">
            <img 
              src={img} 
              alt={title} 
              className="w-full h-50 object-cover transform group-hover:scale-105 transition-transform duration-200 ease-out" 
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col h-[calc(100%-200px)]">
            <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
              {details}
            </p>
            
            <div className="flex items-center justify-between mt-auto">
              <span className="text-3xl font-black text-gray-900">
                ${price.split(" ")[0]} <span className="text-sm font-medium text-gray-400">USD</span>
              </span>
              
              <button className="bg-black text-white px-5 py-2.5 rounded-xl text-sm font-semibold group-hover:bg-blue-600 transition-colors shadow-md cursor-pointer duration-200 ease-out">
                View Detail
              </button>
            </div>
          </div>
        </div>
      {/* </Tilt> */}
    </motion.div>
    )
}

export default CardChild;