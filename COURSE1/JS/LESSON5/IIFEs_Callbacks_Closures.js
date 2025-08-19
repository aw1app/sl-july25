

const empId = (

    function () {
        let count = 0;

        return function () {
            ++count;
            return `emp${count}`;
        };

    }

)();


let emp1Id = empId(); //  1
console.log(emp1Id);

let emp2Id = empId(); // 2
console.log(emp2Id);

let emp3Id = empId(); // 3
console.log(emp3Id);

