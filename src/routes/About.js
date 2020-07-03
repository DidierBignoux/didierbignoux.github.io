import React from 'react';


//components
import Header from "../components/headers/Header";
import Footer from "../components/footer/Footer";


class AboutPAge extends React.Component {
  render() {
    return (
      <div >
      
     <Header name={'About'} />
     
     {/* <h1>Hello, {this.props.name}</h1> */}
  
     <Footer />
   </div>
    );
  }
}




export default AboutPAge;
