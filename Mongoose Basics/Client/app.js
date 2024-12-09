
// Grab my input
document.querySelector('input').addEventListener('keyup', (e) => {
    // Check for a click event
    // Grab input data
    if (e.key === 'Enter') {

        const name = e.target.value
        console.log(name)
        const newCharacter = { name }
        console.log(newCharacter)
        // fetch POST
        fetch('http://localhost:3000', {
            method: 'POST', //What HTTP req
            body: JSON.stringify(newCharacter), //WHAT is the data sent
            headers: {
                "Content-Type": "application/json", //additional json
            },
            mode: 'cors' // cors
        })
    }

})