import React from "react";
import { NProgress } from "@tanem/react-nprogress";


//PreLoader
import Bar from "../components/preloader/Bar";
import Container from "../components/preloader/Container";
import Spinner from "../components/preloader/Spinner";

//components
import HomeHeader from "../components/headers/HomeHeader";
import Footer from "../components/footer/Footer";
import HorizontalBar from "../components/horizontalBar/HorizontalBar";
import BackToTop from "../components/backToTop/BackToTop";

//Section
import Brand from "../components/homeSection/Brand/brand";
import About from "../components/homeSection/About/about";
// import Work from "../components/homeSection/work/Work";
// import WorkExample from "../Section/Work/workExample";
import JobHistory from "../components/homeSection/job/jobHistory";
// import Service from "../components/homeSection/service/ervice";

const callFakeAPI = (delay) =>
  new Promise((resolve) => {
    setTimeout(resolve, delay);
  });

class Home extends React.Component {
  state = {
    isLoading: true,
  };

  async componentDidMount() {
    await callFakeAPI(3000);
    this.setState(() => ({
      isLoading: false,
    }));
  }

  render() {
    return (

      <React.Fragment>
        <NProgress isAnimating={this.state.isLoading}>
          {({ isFinished, progress, animationDuration }) => (
            <Container
              isFinished={isFinished}
              animationDuration={animationDuration}
            >
              <Bar progress={progress} animationDuration={animationDuration} />
              <Spinner />
            </Container>
          )}
        </NProgress>
        {/* <h1>{this.state.isLoading ? 'Loading...' : 'Loaded!'}</h1> */}

        {/* {(parameters here) => ( your render code here )} */}
        {/* {console.log(this.state.isLoading)} */}

        
        <div >
       

        <HomeHeader />
        <Brand />
        <About />
        {/* <Work /> */}
        {/* <WorkExample /> */}
        <JobHistory />
        {/* <Service /> */}

        <Footer />
        <HorizontalBar />
        <BackToTop />

       
        </div>
        
     
      </React.Fragment>


  
    );
  }
}
export default Home;
