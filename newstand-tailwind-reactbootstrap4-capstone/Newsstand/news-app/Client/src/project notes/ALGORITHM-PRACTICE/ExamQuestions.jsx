import React from "react"
export default function ExamQuestions() {

    function changeEnough(arr, totalDue) {
        // turn all the change into variables and multiply them by its index in the array input
        const quarters = .25 * arr[0]
        const dimes = .10 * arr[1]
        const nickels = .05 * arr[2]
        const pennies = .01 * arr[3]
        console.log(typeof arr[0])
        let myChange = arr
        // let myChange = Number.parseFloat(arr).toFixed(2);
        myChange = [quarters + dimes + nickels + pennies]
        console.log(myChange)
        if (myChange >= totalDue) {
            return true
        }
        return false
    }

    console.log(changeEnough([20, 100, 5, 0], 14.11))

    function reversedString(s) {
        const arr = s.split('')
        const splicedArr = arr.splice(19, 1)
        const string = String(arr.join(''))
        const stringSplit = string.split(' ')
        let newArr = [];
        for (let i = 0; i < stringSplit.length; i++) {
            // 0 is falsy in string.length so the first letter starts with 1
            if (stringSplit[i].length < 5) {
                newArr.push(stringSplit[i])
            }
            if (stringSplit[i].length >= 5) {
                newArr.push(Array.from(stringSplit[i]).reverse().join(''))
            }
        }
        return newArr.join(' ').toString()
    }

    console.log(reversedString('Hey helps fellow warriors'))


    return (
        <>
            <div className="text-5xl text-black">
                {/* {changeEnough([20,100,0,0], 14.11)} */}
            </div>
        </>
    )
}