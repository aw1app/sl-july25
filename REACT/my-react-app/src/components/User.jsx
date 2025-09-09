import { Component } from "react";

class User extends Component {

    constructor(props) {
        super(props);

        // this.name = props.name;
        // this.age = props.age;

        this.state = {
            name :props.name,
            age : Number(props.age),
            phone: 7777555566,
            address : { no:666 , city:"asasa"}
        }

        this.x = 5;
        // this.state.name = props.name;
        //   this.state.age = props.age;

        

    }

    incrementAge = () => {
       // this.state.age = this.state.age+1;
        let newState = { age: this.state.age + 1} ;        

       this.setState ( newState  );
    //this.setState ( prevState => { ...prevState , "age": prevState.age+1 }  );
     
       this.x = this.x+1;
         console.log(this.x);
    };

    render(){


        return(
            <>
            Hi, my name is {this.state.name} and age {this.state.age}<br/> {this.x}

            <button onClick={this.incrementAge} > Increment Age </button> 

            <p onMouseEnter={this.incrementAge} > This is a para. When you click me, I will increment the age </p>
            </>
        )


    }


}

export default User;