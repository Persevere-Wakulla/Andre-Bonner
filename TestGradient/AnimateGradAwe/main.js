// let newA = document.createElement('a');
// newA.textContent = 'Show Me';
// newA.classList.add('box');
// let cont = document.getElementsByClassName('container');
// cont[0].appendChild(newA);

// let newDiv = document.createElement('div');
// let newHead = document.createElement('h1');
// newDiv.classList.add('box');
// newHead.textContent = 'Title';

// cont[0].appendChild(newDiv).appendChild(newHead);

// let bod = document.getElementById('body');
// let oldDiv = document.getElementsByClassName('container');
// let newDiv = oldDiv[0].cloneNode('true');
// bod.appendChild(newDiv);

let count = 0;
let div = document.getElementsByClassName('container');
let oldA = document.getElementsByClassName('box');

for(let i = 0; i < count; i++){
    let newA = oldA[0].cloneNode(true);
    // newA.textContent = `${i}`;
    div[0].append(newA);
}

