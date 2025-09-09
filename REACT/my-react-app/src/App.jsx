import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from 'react'
import User from './components/User'

import MyList from './components/MyList';

 const App = () => {
let point = {x1:5, y1:6 };
const items1 = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
];


  return (
    <>
     <h1 >Welcome to Amazon.com </h1>
<MyList items={items1} />

     {/* <User name="David" age="24"  address="point" />
     <User name="John" age="25" /> */}
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
