import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from 'react'
import User from './components/User'

 const App = () => {

  return (
    <>
     <h1 >Welcome to Amazon.com </h1>

     <User name="David" age="24" />
     <User name="John" age="25" />
    </>
  )
}


// class App  extends Component{

//   constructor(props){
//     super(props);
//     this.x = 5;
//   }
  

//   render(){

//      let z=15;

//       return (
//     <>
//      <h1>Welcome to Amazon.com </h1>
//      {this.x} , {z}
//     </>
//   );

//   ///

    
//   }

// }

export default App;
