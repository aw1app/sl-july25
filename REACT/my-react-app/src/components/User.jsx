import { Component } from "react";

class User extends Component {

    constructor(props) {
        super(props);

        // this.name = props.name;
        // this.age = props.age;

        this.state = {
            name :props.name,
            age : props.age
        }

        this.x = 5;
        // this.state.name = props.name;
        //   this.state.age = props.age;

    }

    incrementAge = () => {
       // this.state.age = this.state.age+1;
       this.setState (  { age: Number(this.state.age) +1 }  );
     
       this.x = this.x+1;
         console.log(this.x);
    };

    render(){


        return(
            <>
            Hi, my name is {this.state.name} and age {this.state.age}<br/> {this.x}

            <button onClick={this.incrementAge} > Increment Age </button> 
            </>
        )


    }


}

export default User;