import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from 'react'
import User from './components/User'

import MyList from './components/MyList';
import UserGreeting from './components/UserGreeting'
import ListComponent from './components/L3/ListComponent'
import BasicFormHandling from './components/L3/BasicFormHandling.jsx'
import Timer from './components/L3/Timer.jsx'

 const App = () => {
let point = {x1:5, y1:6 };
const items1 = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
];

const f1=()=>{ console.log("Hello")};


  return (
    <>
     <h1 >Welcome to Amazon.com </h1>

     <Timer />
{/* <BasicFormHandling /> */}

{/* <MyList items={items1}  func1={f1} /> */}

     {/* <User name="David" age="24"  address="point"  func1={f1} />
     <br/>
     <User name="John" age="25" /> */}

     {/* <UserGreeting /> */}

     {/* <ListComponent /> */}
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
