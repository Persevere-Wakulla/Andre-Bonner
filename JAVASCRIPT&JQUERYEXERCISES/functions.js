// body style
document.body.style.backgroundColor = 'lightblue';
document.body.style.color = '';

// H1
const H1 = document.createElement('h1')
document.body.prepend(H1)
H1.textContent = 'How to create a Function in JavaScript?'
H1.style.color = 'purple';

// DIV
const DIV = document.createElement('div')
H1.append(DIV)
DIV.id = "message"
DIV.textContent = 'Welcome to our site!'
DIV.style.fontSize = '20px';
DIV.style.color = 'black';

// MSG
let msg = `<br> ***Calling a function = updateMessage() <br>
    ....when you ask it to perform a task. <br><br>
    THE STEPS THAT THE FUNCTION NEEDS TO PERFORM IN ORDER TO PERFORM ITS TASK ARE PACKAGED UP IN A CODE BLOCK- like you do after a statement...<br>
    updateMessage = () => { CODE BLOCK } <br>
    note: You do not write a semicolon after the closing brace...<br>//(NOT !=) updateMessage = () => { CODE BLOCK };<br><br>
    SOME FUNCTIONS NEED TO BE PROVIDED W/INFORMATION IN ORDER TO ACHIEVE A GIVEN TASK.<br><br>
    FOR EXAMPLE: A FUNCTION TO CALCULATE THE AREA OF A BOX WOULD NEED TO KNOW ITS WIDTH AND HEIGHT....<br>
    getArea = (width, height) =>{ return width * height; } <br> 
    console.dir(getArea(3, 5)) //15 <br><br>
    PIECES OF INFORMATION PASSED TO A FUNCTION ARE KNOWN AS..... PARAMETERS <br>
    getArea = (PARAMETER 1- width, PARAMETER 2- height) =>{ return width * height; }<br><br>
    WHEN YOU WRITE A FUNCTION AND YOU EXPECT IT TO PROVIDE YOU WITH AN ANSWER...<br>
    THE RESPONSE IS KNOWN AS A... RETURN... value <br><br>
    REMEMBER: PROGRAMMING LANGUAGES OFTEN RELY UPON ON NAME/VALUE PAIRS.<br>
    THE FUNCTION HAS A NAME, updateMessage, AND THE VALUE IS THE {CODE BLOCK}...(WHICH CONSISTS OF STATEMENTS).<br>
    WHEN YOU CALL THE FUNCTION BY ITS NAME, updateMessage(), THOSE STATEMENTS WILL RUN.<br><br>
    FUNCTION KEYWORD: function <br>
    FUNCTION NAME: updateMessage(); <br>
    CODE BLOCK(IN CURLY BRACES): { const newMessage = document.getElementById('message'); <br>
    newMessage.innerHTML = msg; <br>} <br><br>
    DECLARING FUNCTIONS THAT NEED INFORMATION: <br> Sometimes a function need specific information to perform its task. <br>
    In such cases, when you declare the function you give it PARAMETERS. Inside the function, the PARAMETERS...ACT LIKE VARIABLES.<br><br>
    CALLING FUNCTIONS THAT NEED INFORMATION: <br> When you call a function that has PARAMETERS, you specify the values it should use in the parentheses <br>
    that follow its name. The value are called ARGUMENTS, and they can be provided as VALUES or as VARIABLES. <br>
    getArea(3, 5)   //getArea(ARGUMENT 1- 3, ARGUMENT 2- 5) <br><br>
    ARGUMENTS AS VARIABLES: <br>
    You do not have to specify actual values when calling a function - you can use variables in their place.<br>
    So the following does the same thing: <br>
    wallWidth = 3; <br>
    wallHeight = 5; <br>
    getArea(wallWidth, wallHeight);`
// ******************************FUNCTIONS********************************************************************************************************************************
 //ARROW function (msg) //how to place a new meesage using a function
updateMessage = () =>{
    const newMessage = document.getElementById('message')
    // use innerHtml: to use <br> tags in message...!= newMessage.textContent
    newMessage.innerHTML = msg;
}
updateMessage()
console.dir(updateMessage);

// FUNCTION W/PARAMETERS
getArea = (width, height) => {  return width * height}
// getArea(3, 5);
console.dir(getArea(3, 5))

// CALLING FUNCTIONS THAT NEED INFORMATION
// GETTING A SINGLE VALUE OUT OF A FUNCTION
calculateArea = (width, height) => { const area = width * height; return area;}
let wallOne = calculateArea(3, 5);
let wallTwo = calculateArea(8, 5);
console.log(wallOne);
console.log(wallTwo);


// GETTING MULTIPLE VALUES OUT OF A FUNCTION
getSize = (width, height, depth) => { 
    const area = width * height; 
    const volume= width * height * depth;
    const sizes = [area, volume];
    return sizes;
}
let areaOne = getSize(3, 2, 3)[0];
let volumeOne = getSize(3, 2, 3)[1];

console.log(areaOne)
console.log(volumeOne)

// ******************************************CREATING MORE ELEMENTS *********************************************
// H2
const H2 = document.createElement('h2');
DIV.append(H2);
H2.textContent = wallOne;
H2.style.color = 'yellow';

// H3
const H3 = document.createElement('h3');
H2.append(H3);
H3.textContent = wallTwo;
H3.style.color = 'green';

// H4
const H4 = document.createElement('h4');
H3.append(H4);
H4.textContent = areaOne;
H4.style.color = 'blue'; 

// H5
const H5 = document.createElement('h5');
H4.append(H5);
H5.textContent = volumeOne;
H5.style.color = 'red';