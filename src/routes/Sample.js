import React from 'react';



//Componets
import Header from "../components/headers/Header";
import Footer from "../components/footer/Footer";


class Sample extends React.Component {
  render() {
    return (
      <div >
    
     <Header name={'Sample'} />
     
     {/* <h1>Hello, {this.props.name}</h1> */}
  
     <Footer />
   </div>
    );
  }
}




export default Sample;
