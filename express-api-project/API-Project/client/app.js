async function getData(){
    //GET REQUEST
    const res = await fetch('http://localhost:3000');
    const data = await res.json()
    console.log(data);
    return data
    
}

const data = await getData()

console.log(data)

console.log(data[0]);
data.forEach(({name, race, bio, img})=> {

    let section = document.getElementById('characters')
    // let h3 = document.createElement('h3')
    // h3.style.padding='50px'
    // h3.style.outline='solid black'
    
    // let p1 = document.createElement('p')
    // p1.style.padding='20px'
    // p1.style.color='black'

    // let h5 = document.createElement('h5')
    // let p = document.createElement('p')

    // section.appendChild(h3)
    // h3.append(p1)
    // p1.append(h5)
    // h5.append(p)

section.style.padding= '20px';
// section.style.paddingBottom = '40px';
section.style.background= 'black';
section.style.color= 'gold';



    section.innerHTML += `
        <div> 
        <h3>${name}</h3>
        <p>${race}</p>
        <p>${bio}</p>
        <hr>
        </div>
        `


//     console.log();
    
//     h3.textContent = `${name}`
//     p1.textContent = `${race}`
// console.log(p1);

})
// console.log(data);

// function loopDbz(){
//     const data =  getData()
//     console.log(data);
//     console.log(data);
    


// }
// loopDbz()




// function dbz(){
// }

function replaceWithAlphabetPosition(string){
    let alphabetArr= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let lowercase = string.toLowerCase()
    let newString = []
    let stringArr = lowercase.split('').map((letter) => {
        console.log(letter);
        console.log(alphabetArr);
        // letter.join('')
        console.log(letter);
        
        if(letter !== alphabetArr){
              newString.push(letter)
        }else{
            false
        }
        return newString
    })
    console.log(newString);
    console.log();
    
    const isSubset = (array1, array2) => array2.every((element) => array1.includes(element))
    console.log(isSubset(stringArr, alphabetArr));
    
    for(let i = 0; i < alphabetArr.length; i++){
        
        console.log(string)
        if(alphabetArr === string){
        // let [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26] = alphabetArr
    }

}
}
replaceWithAlphabetPosition("How are you?")