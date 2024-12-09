export default function Algorithms() {
    function mapArr(arr) {
        const newArr = []
        for (let i = 0; i <= arr.length - 1; i++) {
            if (arr[i] !== arr[i + 1]) newArr.push(arr[i])
        }
        return newArr
    }

    function uniqueInOrder(data) {
        const arr = Array.from(data)
        // console.log(splitArr);
        const uniqueArr = mapArr(arr)
        console.log(uniqueArr)
        return uniqueArr
    }
    // uniqueInOrder(['1','2','2','2','3','5','8','8','9','8'])


    function camelCase(s) {
        console.log(s.split(' '))
        const words = s.split(' ')
        const solution = []
        for (let i = 0; i < words.length; i++) {
            // console.log(words[i][0].toLocaleUpperCase());
            solution.push(words[i][0].toLocaleUpperCase())
            solution.push(words[i].slice(1))
            // console.log(solution.join('') );

        }
        console.log(solution.join(''));

        return solution.join('')
    }
    camelCase("test case")

    return (
        <>
            {/* {uniqueInOrder('ABBBBCCCDDDDEEFFFHHHGGGGHHHIII')} */}
        </>
    )
}