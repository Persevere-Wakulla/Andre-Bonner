//! get all products
const productsUrl = 'https://fakestoreapi.com/products'
//! get all categories
const allCategories = 'https://fakestoreapi.com/products/categories'
//! limit results
const limitResults = 'https://fakestoreapi.com/carts?limit=5'
//! get all users
const allUsers = 'https://fakestoreapi.com/users'
//! single user
// const singleUser= 'https://fakestoreapi.com/users/1'
// //! user login
// const userLogin = 'https://fakestoreapi.com/auth/login'
// ! all carts
const allCarts = 'https://fakestoreapi.com/carts'

//? add event listeners********************************************************
//! aside buttons
const loginBtn = document.getElementById('home');
const productsBtn = document.getElementById('products');
const contactBtn = document.getElementById('contact');
const cartBtn = document.getElementById('cart');
const logoutBtn = document.getElementById('logout');
//! page buttons
const submitBtn = document.getElementById('submitBTN');
const searchBtn = document.getElementById('searchBTN');
const navBtn = document.getElementById('menu');
const asideobjs = document.getElementById('aside-objs')
const closeBtn = document.getElementById('close-btn');
const aside = document.querySelector('aside');

//? global Variables**************************************************************
const loginPage = document.getElementById('loginPage')
const productPage = document.getElementById('productPage');
const cartPage = document.querySelector('.cart')
const searchBar = document.getElementById('searchbar')
let womenClothing = document.getElementById('women-clothing')
let menClothing = document.getElementById('men-clothing')
let jewelery = document.getElementById('jewelery')
let electronics = document.getElementById('electronics')
let allItems = document.getElementById('all-items')
const cartTitle =document.getElementById('cartname')
//! contact page
const contactPage = document.querySelector('#contact')
const username = document.getElementById('username');
const password = document.getElementById('pwd');
const email = document.getElementById('email');

//! make an empty arr for ALL THE FETCHED USERS
let logins = [];
let categories = [];
let products = [];
let womenClothingFilter = [];
let mensClothingFilter = [];
let jewelryFilter = [];
let electronicsFilter = [];
let carts = [];

//! *********ASNC FUNCTION FOR LOGINS******************
//! log-in page/submitbtn...place inside asyc function
async function getLogins() {
    const usersRes = await fetch(allUsers);

    //! SEE EMPTY ARR...PLACE THE PROMISE INSIDE VARIABLE
    logins = await usersRes.json();

}
getLogins()

//! ***************ADD EVENT LISTENER FOR SUBMIT BUTTON************************ 
// DONT!!! place add event listener inside the asnc function...UNLESS THE PAGE/ITEMS IS 
// CREATED DYNAMICALLY...SUCH AS (PRODUCT PAGE)
submitBtn.addEventListener('click', function () {
    //! use FIND...TO GET THE SPECIFIC LOGIN THAT PLACES THEIR INFO INSIDE TEXT BOXES
    //! in inputs you use parameter.value
    //? PROGRAMMERS USE .toLowerCase()...for everything but the password for better functionality!!!
    let user = logins.find(login => login.username.toLowerCase() === username.value.toLowerCase()
        && login.password === password.value
        && login.email.toLowerCase() === email.value.toLowerCase());

    // if(user !== undefined) ... if you need it for guidance
    if (user) {
        productPage.style.display = 'block';
        loginPage.style.display = 'none';
    }

    // console.log(renderLogin)
    console.log(logins)

})



//! SEARCH BUTTON(FILTER FUNCTION VIA: products)
searchBtn.addEventListener('click', function (ev) {
    //! this keeps the page from reloading...need it when button type is submit....only used as a experiment
    //! change the button type and erase(ev.preventDefault())
    ev.preventDefault();
    //! use debugger to get into habit of troubleshooting code
    //! if console says... cannot read properties of null(reading 'addEventListener)...
    //! that means ther is either an issue in the HTML OR IN THE SCRIPT ITSELF(IF ITS THE :searchBtn)
    //! error: no id on...searchBTN in the HTML
    // debugger;
    let section = document.querySelector('.products');
    // console.dir(document.querySelector('#searchbar').value);
    if (document.querySelector('#searchbar').value === "women's clothing") {
        // womenClothingFilter.
        //! to keep from appending the items over and over every tme you hit the search button
        //! use replaceChildren()...then recall the function renderProduct(product) again to add the elements FOREACH product FILTERED
        section.replaceChildren();
        console.dir(products.filter(product => product.category === "women's clothing"))
        products.filter(product => product.category === "women's clothing").forEach(product => {
            renderProduct(product);
        })
    } if (document.querySelector('#searchbar').value === "men's clothing") {
        // mensClothingFilter.
        section.replaceChildren();
        products.filter(product => product.category === "men's clothing").forEach(product => {
            renderProduct(product);
        })
    }
    if (document.querySelector('#searchbar').value === "jewelery") {
        // jewelryFilter.
        section.replaceChildren();
        products.filter(product => product.category === "jewelery").forEach(product => {
            renderProduct(product);
        })
    }
    if (document.querySelector('#searchbar').value === "electronics") {
        // electronicFilter.
        section.replaceChildren();
        products.filter(product => product.category === "electronics").forEach(product => {
            renderProduct(product);
        })
    }
    if (document.querySelector('#searchbar').value === 'all-items') {
        section.replaceChildren();
        products.filter(product => {
            renderProduct(product)
        })
    }
})

//! ***************ASIDE/ DISPLAYED VIA NAV BUTTON/ CLOSE BUTTON**********************
//! aside and navBTN
navBtn.addEventListener('click', function () {
    aside.style.display = 'block';
    // navBtn.style.display = 'none';
});
// ! CLOSE BUTTON.......................
closeBtn.addEventListener('click', function () {
    aside.style.display = 'none';
    navBtn.style.display = 'block';
});
// ! PRODUCT BUTTON...................
productsBtn.addEventListener('click', function () {
    loginPage.style.display = 'none';
    productPage.style.display = 'block';
    aside.style.display = 'none';
})
// ! CONTACT BUTTON...................
// contactBtn.addEventListener('click', function () { })
// ! CART BUTTON...............
cartBtn.addEventListener('click', function () {
    console.dir(cartBtn.getAttribute('data-item'));
    carts.forEach(item => {
        renderCart(item);
        loginPage.style.display = 'none';
        productPage.style.display = 'block';
        aside.style.display = 'block';
        cartPage.style.display = 'block';
        contactPage.style.display = 'none';
    })
    //call to that cart function
    // let sectiontwo = document.querySelector('.cart')

    // let containerDivtwo = document.createElement('div')

    // let cartDiv = document.createElement('div')

    // let date = document.createElement('h3')
    // // date.textContent = cart.date;

    // let cartId = document.createElement('h3')
    // // cartId.textContent = cart.id;

    // let cartproducts = document.createElement('h3')
    // // cartproducts.textContent = cart.products;

    // let userId = document.createElement('h3')
    // // userId.textContent = cart.userId;

    // cartDiv.appendChild(date)
    // cartDiv.appendChild(cartId)
    // cartDiv.appendChild(cartproducts)
    // cartDiv.appendChild(userId)

    // sectiontwo.append(containerDivtwo)
    // containerDivtwo.appendChild(cartDiv)


})
// ! LOGOUT BUTTON..........
logoutBtn.addEventListener('click', function () {
    loginPage.style.display = 'block';
    productPage.style.display = 'none';
    aside.style.display = 'none';
})

//! ****************PRODUCT PAGE / DYNAMICALLY CREATED(BESIDES...SEARCH-BAR)**********************************

//! ************* ASNC FUNCTION FOR SPECIFIC CATEGORIES*************
// async function getCategories() {
//     const categoriesRes = await fetch(allCategories);
//     categories = await categoriesRes.json();
//     console.log(categories)
// }
// getCategories()

//! **********************ASNC FUNCTION FOR ALL PRODUCTS******************************* 
//! get the product from the URL
async function getproducts() {
    // to make a request in js
    //! this will make a request to the resource in the URL provided in line 1
    // once you get the response it will return the json data
    const res = await fetch(productsUrl);
    const products = await res.json();
    console.dir(products)
    return products;
}


//! loop over the products and display them on page
async function renderProducts() {
    products = await getproducts();
    products.forEach((product) => renderProduct(product))
}

//! function to render one product at a time
function renderProduct(product) {
    let section = document.querySelector('.products');

    let containerDiv = document.createElement('div')
    containerDiv.classList.add('c-div')

    let productDiv = document.createElement('div');
    productDiv.classList.add('p-div')

    let productId = document.createElement('h2');
    productId.classList.add('idText');
    productId.textContent = product.id;

    let productTitle = document.createElement('h3');
    productTitle.classList.add('titleText');
    productTitle.textContent = product.title;


    let productPrice = document.createElement('h4');
    productPrice.classList.add('priceText');
    productPrice.textContent = `$${product.price}`;

    let productCategory = document.createElement('h4');
    productCategory.classList.add('categoryText')
    productCategory.textContent = product.category
    let productDecriptionHead = document.createElement('h4');
    productDecriptionHead.classList.add('bodyHead');
    productDecriptionHead.innerText = 'DESCRIPTION';

    let productDescriptionText = document.createElement('p');
    productDescriptionText.classList.add('bodyText');
    productDescriptionText.textContent = product.description;

    let imageDiv = document.createElement('div')
    imageDiv.classList.add('i-div')
    let productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.classList.add('image')

    let addToCartBtn = document.createElement('button');
    addToCartBtn.classList.add('cartbtn')
    addToCartBtn.textContent = 'ADD TO CART';
    addToCartBtn.addEventListener('click', function () {

        loginPage.style.display = 'none';
        productPage.style.display = 'block';
        aside.style.display = 'none';
        cartPage.style.display = 'block';
        contactPage.style.display = 'none';
        //! finish to place item on the cart page
        carts.push(product)
        console.log(carts)


        //Do call to function to draw product on cart screen

    })

    productDiv.appendChild(productId);
    productDiv.appendChild(productTitle);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productCategory);
    productDiv.appendChild(productDecriptionHead);
    productDiv.appendChild(productDescriptionText);
    imageDiv.appendChild(productImage)
    imageDiv.appendChild(addToCartBtn)

    section.append(containerDiv)
    containerDiv.appendChild(productDiv);
    containerDiv.appendChild(imageDiv)



    //! addFilter called here....no longer need it
    // addFilter(product)
}
//! function for search bar....filtered arrays...this function works...just dont need it....
// ? place this in the searchBtn instead of like this....
// function addFilter(product) {
//     if (product.category === "woman's clothing") {
//         womenClothingFilter.push(product)
//     }
//     if (product.category === "men's clothing") {
//         mensClothingFilter.push(product)
//     }
//     if (product.category === "jewelry") {
//         jewelryFilter.push(product)
//     }
//     if (product.category === "electronics") {
//         electronicsFilter.push(product)
//     }
//     // else { 'not in there' }
//     console.log(mensClothingFilter)
//     console.log(womenClothingFilter)
//     console.log(jewelryFilter)
//     console.log(electronicsFilter)
// }


// //! fetch carts 
// async function getCarts() {
//     const limitResultsRes = await fetch(limitResults);
//     const carts = await limitResultsRes.json()
//     return carts
// }


// async function renderCarts() {
//     carts = await getCarts();
//     carts.forEach((cart) => renderCart(cart))
// }
// console.log(renderCart())

// function renderCart(cart) {

// }

//! cart page
function renderCart(product) {
    let cartTitle = document.getElementById('cartname')
    let containerDiv = document.createElement('div');
    let productId = document.createElement('h2');
    productId.classList.add('idText');
    productId.textContent = product.id;

    let productTitle = document.createElement('h3');
    productTitle.classList.add('titleText');
    productTitle.textContent = product.title;

    let productPrice = document.createElement('h4');
    productPrice.classList.add('priceText');
    productPrice.textContent = `$${product.price}`;

    let productCategory = document.createElement('h4');
    productCategory.classList.add('categoryText')
    productCategory.textContent = product.category;

    cartPage.append(cartTitle)
    cartTitle.append(containerDiv)
    containerDiv.appendChild(productId);
    containerDiv.appendChild(productTitle);
    containerDiv.appendChild(productPrice);
    containerDiv.appendChild(productCategory);
}





renderProducts();
// renderCart()
// link each filter to the category in the search bar
// searchBtn.addEventListener('click', function () {
//     let user = categories.find(category => category.value);
//     if (user) {
//         renderSearch()
//     }

// })





