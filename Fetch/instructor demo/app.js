// //! 1 Go the site we want data from
fetch('data.json') //returning promise
  // ! 2 .then() and convert data so we can use
  .then((response) => response.json()) //returning converted data
  // ! we can do stuff with the data
  .then(createHtml); // the response conversion is the argument being passed for our function

function createHtml(dataArr) {
  console.log(dataArr);
  const markup = dataArr.map((item) => {
    return `
        <h1>${item.first_name}</h1>
        <p>${item.email}</p>
        `;
  });
  document.body.innerHTML = markup.join('');
}
