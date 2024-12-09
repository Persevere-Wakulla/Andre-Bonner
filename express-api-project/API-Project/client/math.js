const button = document.getElementById('function')
function isValid(event) {
    // let event = e.target
    // let n = 1;
    // let s = 1;
    // let w = 1;
    // let e = 1;
    // let directions = [s, w, w, n, n, n, n, e, e, s]
    // let randomArr = Math.random(directions)
    // console.log(Math.random(directions))
    // directions = randomArr
    // directions = arr
    // console.log(directions);
    // let [1,2,3,4,5,6,7,8,9,10] = arr
    
    let arr = ['s', 'w', 'w', 'n', 'n', 'n', 'n', 'e', 'e', 's']
    console.log(arr);
    for (let index = 0; index < arr.length; index++) {
        // console.log(directions.toString(','))
        // const element = arr[index];

        console.log(event)
        if(arr.length === 10){
return h1.textContent= 'true'

             
        }else{
return h1.textContent= 'false'

        }





        // if (arr.length[0] === event.target[1]) {
        //     // h1.textContent= arr
        //     h1.textContent = arr.slice(0, 10)

        //     console.log(arr)
        // }
        // if (arr.length[1] === event.target[2]) {
        //     h1.textContent = arr.slice(1, 10)

        //     // console.log(arr.slice(0, 9))
        //     console.log(arr);

        // }
        // if (arr.length[2] === event.target[3]) {
        //     h1.textContent = arr.slice(2, 10)

        //     // console.log(arr.slice(0, 9))
        //     console.log(arr);

        // }
        // if(arr.length[3] === event.target[4]){
        //     h1.textContent= arr.slice(3, 10)

        //         // console.log(arr.slice(0, 9))
        //    console.log(arr);

        //     }
    }
    // const addArr=[s+w+w+n+n+n+n+e+e+s]
    // console.log(addArr);
    // arr = addArr
    // if(addArr == 10 && addArr == arr){
    //     console.log( true);

    //     return true
    // }else{

    //     console.log(false);

    //     return false
    // }


    // assert.isTrue(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
    // assert.isFalse(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
    // assert.isFalse(isValidWalk(['w']), 'should return false');
    // assert.isFalse(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');
    // const arr = [s,w,w,n,n,n,n,e,e,s].map((block)=> {
    //     console.log(block)
    //     console.log(addArr);




    // })
    // return arr





}
// let arr = []
// let arr=['s','w','w','n','n','n','n','e','e','s']
// h1.textContent= `${arr}... these are the directions to your destination in ten minutes... ${handleClick()}`
const h1 = document.getElementById('app')
// h1.textContent= arr

button.addEventListener('click', isValid)
// console.log(handleClick())