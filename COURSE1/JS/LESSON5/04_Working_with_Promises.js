

function flippingACoin() {

    return new Promise(

        (resolve, reject) => {

            const val = Math.round(Math.random() * 1); // 0 or 1, at random

            val ? resolve('Heads!!') : reject('Tails!!');
        }

    );

};

async function getResult() {

    try {
        let result = await flippingACoin();
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }

}

// getResult();
// getResult();
// getResult();
// getResult();



console.log(" DEMO another approach \n ");

let mypromiseObj = new Promise(

    (resolve, reject) => {

        const val = Math.round(Math.random() * 1); // 0 or 1, at random

        val ? resolve('Heads!!') : reject('Tails!!');
    }

);

mypromiseObj
.then (result => console.log(result) )
.catch( err  => console.log(err));