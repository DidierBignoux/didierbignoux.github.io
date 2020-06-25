import React from "react";


//components
import HomeHeader from "../components/headers/HomeHeader";
import Footer from "../components/footer/Footer";
import HorizontalBar from "../components/horizontalBar/HorizontalBar";
import BackToTop from "../components/backToTop/BackToTop";

//Section
import Brand from "../components/homeSection/Brand/brand";
import About from "../components/homeSection/About/about";
import Work from "../components/homeSection/work/Work";
// import WorkExample from "../Section/Work/workExample";
// import JobHistory from "../Section/job/jobHistory";
// import Service from "../Section/service/ervice";


function Home() {
  return (
    <div >       
      <HomeHeader />
      <Brand />
      <About />
      <Work />
      {/* <WorkExample /> */}
      {/* <JobHistory /> */}
      {/* <Service /> */}
     

      <Footer />
      <HorizontalBar/>
      <BackToTop/>
    </div>
  );
}

export default Home;
