

const person1 = {

    firstName: "Peter",
    lastName: "Parker",
    id: 5566,

    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};



console.log(person1.fullName("Bruce", "Wayne"));




//person1.prototype.age = 25;
console.log(person1.firstName);   




// function sqr() {
//     return function cal(x) {
//         return x * x;
//     };
// }


// var ans = sqr();

// console.log(ans(5)); // Output: 25
























