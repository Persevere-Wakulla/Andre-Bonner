export default function ShortestWord() {
    function shortWord(str) {
        //todo: return the length of the shortest word
        // let str = "Thank you for the longest day of my life"
        // let str = words
        // to find the length... turn str into an arr (split(""))
        //loop thru the arr
        // sorted[0] = 10;
        // console.log(numbers[0]); // 10
        // console.log(str.length);

        // console.log(str);
        //! split the str into an arr of substrings 
        const xArr = [];

        xArr.sort((a, b) => a.length - b.length)
        // console.log(xArr);
        const arr = str.split(' ').map((x, i) => {
            // console.log(x.length);
            if(x.length){
                xArr.push(x.length)
            }
            // console.log(xArr);
            
            // console.log(i);
    })
        
        //* arr to push the shortest words into... 
        let words = [];
        const lengthArr = [];
        //! loop thru each substring
        //! for (let i = 0; i < arr.length; i++) {
            //! console.log(arr[i].length);


            // console.log(arr[i].split(''));
            // console.log(arr[i].toString().split(''));
            //! split each substring to get the length then join them back again 
            //! const newArr = arr[i].length
            // let i = arr.length 
            // sort const numbers = [3, 1, 4, 1, 5];
            // const sorted = numbers.sort((a, b) => a - b);
            // numbers and sorted are both [1, 1, 3, 4, 5]
            //! console.log(newArr);
            // lengthArr.push(newArr)
            // console.log(lengthArr);

            // return newArr
        //! }

        //? if (arr[i].length < 2) {
        //? words.push(newArr)
        //? }
        //? else if (arr[i].length <= 2) {
        //?     words.push(newArr)
        //? }
        //? return words
        // const sorted = arr.sort((a, b) => a - b)//for numbers

        const sorted = lengthArr.sort((a, b) => a - b)
        // console.log(sorted[0]);
        return sorted[0]
        




        // console.log(words);

    }

    function shortWord2(str){
        const arr = str.split(' ')
        console.log(arr);
        
        const sort = arr.sort((a,b) => {
            console.log(a,b) 
            return a.length - b.length
        })
        console.log(sort.length);
        
        
        console.log(sort);
        
        console.log(sort[0].length);
        // sort[0].length
        console.log(sort[0]);
        return sort[0]


    }
    // shortWord2()
    // console.log(shortWord2('Thank you for the longest day of my life'));


    return (
        <>
            <div>{shortWord2('Thank you for the longest day of my life')}</div>
        </>
    )
}