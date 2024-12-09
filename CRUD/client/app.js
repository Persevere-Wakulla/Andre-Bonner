document.querySelector('form').addEventListener('submit',(e) => {
    e.preventDefault();
})

document.querySelector('#update').addEventListener('click', (e) => {
    const userInput = document.querySelector('input').value
    console.log(('PUTTING'));

    fetch('http://127.0.0.1:3000/', {
        method: "PUT",
        mode: 'cors',
        body: JSON.stringify({ name: userInput }),
        headers: {
            "Content-Type": "application/json"
        }
    })
})
document.querySelector('#delete').addEventListener('click', (e) => {
    const userInput = document.querySelector('input').value
    console.log(('PUTTING'));

    fetch('http://127.0.0.1:3000/', {
        method: "DELETE",
        mode: 'cors',
        body: JSON.stringify({ name: userInput }),
        headers: {
            "Content-Type": "application/json"
        }
    })
})