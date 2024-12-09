const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


function doubleEveryOther(arr) {
    // let arr = [1,2,3,4] 
    let newArr = []
    let numberArr = arr.map((num) => {
        //! one my way
        if (num === 2 || num === 4) {
            let multiply = num * 2;
            // console.log('im here' + multiply1);
            return newArr.push(multiply);
        }

        else {
            if (num === 1 || num === 3) {
                let notMultiply = num
                // console.log('im here' + notMultiply)
                return newArr.push(notMultiply)
            }
        }

    })

    // console.log(numberArr)
    // console.log(newArr);
    return newArr
}
// doubleEveryOther()
console.log(doubleEveryOther([1, 2, 3, 4]))

function doubleEveryOtherWithWhileLoop(arr) {
    return arr.map((item, index) => {
        while (index % 2 !== 0) {
            return item * 2
        }
        return item
    })
}

console.log(doubleEveryOtherWithWhileLoop([1, 2, 3, 4]))

function doubleEveryOtherWithTernary(arr) {
    return arr.map((item, index) => index % 2 !== 0 ? item * 2 : item);
}

console.log(doubleEveryOtherWithTernary([1, 2, 3, 4]));

function doubleEveryOtherIfElseStatement(arr) {
    return arr.map((item, i) => i % 2 !== 0 ? item * 2 : item)
}

console.log(doubleEveryOtherIfElseStatement([1, 2, 3, 4]));

//todo: disemvowel...take away vowels out of string

function disemvowel(str) {
    return str.split('').map((letter) => {
        let arrVowels = [];
        if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
            arrVowels.push(letter)
        }
        else if (letter == 'A' || letter == 'E' || letter == 'I' || letter == 'O' || letter == 'U') {
            arrVowels.push(letter)
        } else {
            return letter
        }
    }).join('').toString('')
}
console.log(disemvowel('PizZaAAAa'))


function tenMinuteApp(){
    const n = 1;
    const s = 1;
    const w = 1;
    const e = 1;
    const arr = [s,w,w,n,n,n,n,e,e,s]
    if(arr === 10){
        console.log( true);
        
        return true
    }
    console.log(false);
    
    return false
}
