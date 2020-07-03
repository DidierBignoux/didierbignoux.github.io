import React from 'react';



//Componets
import Header from "../components/headers/Header";
import Footer from "../components/footer/Footer";


class Error extends React.Component {
  render() {
    return (
      <div >
    
     <Header name={'404'} />
     
     {/* <h1>Hello, {this.props.name}</h1> */}
  
     <Footer />
   </div>
    );
  }
}




export default Error;
