import React from "react";

//Navigation
import Navigation from '../components/navigation/Navigation'

//components
import HomeHeader from "../components/headers/HomeHeader";
import Footer from "../components/footer/Footer";
import HorizontalBar from "../components/horizontalBar/HorizontalBar";
import BackToTop from "../components/backToTop/BackToTop";

//Section
// import Brand from "../Section/Brand/brand";
// import About from "../Section/About/about";
// import Work from "../Section/Work/work";
// import WorkExample from "../Section/Work/workExample";
// import JobHistory from "../Section/job/jobHistory";
// import Service from "../Section/service/ervice";


function Home() {
  return (
    <div >  
      <Navigation/>     
      <HomeHeader />
      {/* <Brand />
      <About />
      <Work />
      <WorkExample />
      <JobHistory />
      <Service />
      */}

      <Footer />
      <HorizontalBar/>
      <BackToTop/>
    </div>
  );
}

export default Home;
