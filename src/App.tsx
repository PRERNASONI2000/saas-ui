// import React from "react";
import Hero from "./components/Hero";
import Card from "./components/Card";
// import SearchInput from "./components/SearchIP";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import UserList from "./pages/Userlist";
import Footer from "./components/Footer";

import { Toaster } from "react-hot-toast";

function App(){
return(
  <>
  <div className="main-container">
    <Hero />
    <Card />
    {/* <SearchInput /> */}
    <Testimonial />
    <Contact />
    <Toaster />
    <UserList />
    <Footer />
  </div>
  </>
)
}

export default App;