// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules"; 
import userData from "./user.json";
import { MoveRightIcon, MoveLeftIcon } from "lucide-react";
import UserChild from "./UserChild";

// Swiper styles
//Note: This is considered a "band-aid" fix.
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';



const Testimonial = () => {
   return(
     <section className="py-20 px-10 bg-gradient-to-r bg-slate-200">
        <h2 className="text-4xl font-bold mb-10 md:text-6xl text-black text-center">See What Users Tells About US</h2>
        <div className="max-w-7xl rounded-lg p-20 relative mx-auto">
            <button className="absolute z-10 -left-5 top-1/2 -translate-y-1/2 rounded-full w-[45px] h-[45px] shadow-black shadow-lg hover:scale-102 font-bold text-black text-2xl flex items-center justify-center p-2 prev-btn"><MoveLeftIcon /></button>
             {/* <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-6"> */}
             <div className="p-5">
                 <Swiper
           modules={[Autoplay, Navigation]}
           spaceBetween={30}
           autoplay={{delay:3000, disableOnInteraction: false}}
           navigation={{
            nextEl: ".next-btn",
            prevEl:".prev-btn",
           }}
           breakpoints={{
            320:{slidesPerView: 1},
            640:{slidesPerView: 2},
            1024:{slidesPerView: 3}
           }}
           className="mySwiper p-5"
           >
            {userData.map((user)=>
           <SwiperSlide key={user.id} className="p-3">
             <UserChild
        img={user.image}
        name={user.name}
        role={user.role}
        text={user.text}
        />
           </SwiperSlide>
        )}
           </Swiper>
        
            </div>
          
           <button className="absolute z-10 -right-5 top-1/2 -translate-y-1/2 rounded-full w-[45px] h-[45px] shadow-black shadow-lg hover:scale-102 font-bold text-black text-2xl flex items-center justify-center p-2 next-btn"><MoveRightIcon /></button>
        </div>
    </section>
   )
}

export default Testimonial;