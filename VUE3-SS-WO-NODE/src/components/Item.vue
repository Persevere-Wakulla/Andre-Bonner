<script>

    export default {
        data() {
            return {
                counter: 0,
                itemQuantity: 0,
                itemsInCart: [],
                navLinks: [{
                    path: 'today',
                    name: 'Todays Deals'
                }, {
                    path: 'apparel',
                    name: 'Apparel'
                }, {
                    path: 'beauty',
                    name: 'Beauty'
                }, {
                    path: 'electronics',
                    name: 'Electronics'
                }, {
                    path: 'applicances',
                    name: 'Appliances'
                }],
                dbItem: {
                    productId: 1,
                    brand: 'Adidas',
                    product: 'Yeezes Fall Limited Edition Sneakers',
                    descr: ` These low-profile sneakers are your perfect casual wear companion. Featuring a 
                                durable rubber outer sole, they’ll withstand everything the weather can offer.`,
                    isOnSale: true,
                    salePercentage: .50,
                    price: 250.00,
                    pics: ['/src/assets/images/image-product-1.jpg', 'src/assets/images/image-product-2.jpg', 'src/assets/images/image-product-3.jpg', 'src/assets/images/image-product-4.jpg']
                },
            }
        },
        methods: {

            navigate(path) {
                console.dir(path);
            },

            closeSideBar() {
                this.$refs.sideBar.classList.add('closed');
                setTimeout(() => {
                    this.$refs.sideBar.classList.remove('closed');
                    this.$refs.sideBar.style.display = 'none';
                }, 800);
            },

            openSideBar() {
                this.$refs.sideBar.classList.add('open');
                this.$refs.sideBar.style.display = 'block';
                setTimeout(() => {
                    this.$refs.sideBar.classList.remove('open');
                }, 800);
            },

            addItem() {
                if (this.itemQuantity > 0) {
                    this.itemsInCart.find(x => x.productId === this.dbItem.productId) ?
                        Object.assign(this.itemsInCart.find(x => x.productId === this.dbItem.productId), { ...this.dbItem, quantity: this.itemQuantity }) :
                        this.itemsInCart = [...this.itemsInCart, { ...this.dbItem, quantity: this.itemQuantity }];
                }
            },

            removeItem(item, index) {
                this.$refs.cartItem[index].style.left = '-100%';
                setTimeout(() => {
                    this.itemsInCart.splice(index, 1);
                }, 500)
            },

            calculateCartItems() {
                let amountOfItemsInCart = 0;

                this.itemsInCart.forEach(x => amountOfItemsInCart += x.quantity);

                return amountOfItemsInCart;
            },

            makeActive(event, index) {
                this.counter = index;
                this.updateImgFromCounter();
            },

            executeThis() {
                console.log('here')
            },

            removeActiveClass() {
                this.$refs.picThumbNailParent.querySelectorAll('.pic-slider-thumbnail').forEach(elem => {
                    elem.classList.remove('active');
                });
            },

            updateImgFromCounter() {
                const imgChildren = this.$refs.picSlider.querySelectorAll('.pic-slider-img');
                this.counter = this.counter < 0 ? imgChildren.length - 1 : this.counter;

                this.counter = this.counter > imgChildren.length - 1 ? 0 : this.counter;

                imgChildren.forEach(element => {
                    element.style.transform = `translateX(-${this.counter * 100}%)`
                });

                this.removeActiveClass();
                this.$refs.picThumbNailParent.children[this.counter].classList.add('active');
            },

            changeSlide(event) {
                const action = event.target.id;

                action === 'prev' ? this.counter-- : this.counter++;

                this.updateImgFromCounter();
            }
        }
    }

</script>

<template>
    <nav class="nav-main flex space-between">
        <div class="flex nav-gap align-items-center">
            <font-awesome-icon @click="openSideBar()" class="nav-icon" icon="fa-bars"></font-awesome-icon>
            <img class="nav-logo" src="/src/assets/images/ecommerce.png">
        </div>
        <div @mouseleave="$refs.cartDropdown.style.opacity = 0" class="flex nav-gap align-items-center nav-dropdown">
            <img @mouseenter="$refs.cartDropdown.style.opacity = 1" v-if="itemsInCart.length === 0"
                class="nav-shopping-icon" src="../assets/images/shoppingCart.png" alt="cart">
            <img @mouseenter="$refs.cartDropdown.style.opacity = 1" v-if="itemsInCart.length > 0"
                class="nav-shopping-icon" src="../assets/images/shoppingCartFull.png" alt="cart">
            <span v-if="itemsInCart.length > 0" class="nav-cart-item-counter">{{calculateCartItems()}}</span>
            <img class="nav-avatar" src="../assets/images/image-avatar.png" alt="avatar">
            <div ref="cartDropdown" class="nav-dropdown-content">
                <div class="nav-cart-dropdown-header">
                    <h4 class="nav-cart-dropdown-header-text">Cart</h4>
                </div>
                <div class="nav-cart-dropdown-body flex col mid-gap">
                    <div class="grid" v-if="itemsInCart.length === 0">
                        <p class="nav-cart-empty-cart">Your cart is empty.</p>
                    </div>
                    <div :key="index" ref="cartItem" class="flex space-between cart-item"
                        v-for="(item, index) in itemsInCart">
                        <div class="flex gap">
                            <img class="nav-cart-dropdown-item-pic" :src="item.pics[0]" alt="cart-item">
                            <div class="flex col gap">
                                <h6 class="nav-cart-product">{{item.product}}</h6>
                                <p class="flex gap nav-cart-dropdown-price">${{item.isOnSale ? (item.price *
                                    item.salePercentage).toFixed(2) : (item.price).toFixed(2) }} x {{item.quantity}}
                                    <span class="nav-cart-dropdown-total">${{item.isOnSale ? ((item.price *
                                        item.salePercentage) * item.quantity).toFixed(2) : (item.price).toFixed(2) *
                                        item.quantity }}</span>
                                </p>
                            </div>
                        </div>
                        <font-awesome-icon @click="removeItem(item, index)" class="nav-cart-remove"
                            icon="fa-trash-can"></font-awesome-icon>
                    </div>
                    <a v-if="itemsInCart.length > 0" class="nav-cart-btn-checkout">Checkout</a>
                </div>
            </div>
        </div>
    </nav>
    <div ref="sideBar" class="sidebar">
        <div class="flex col mid-gap sidebar-body">
            <img @click="closeSideBar()" width="15px" src="../assets/images/icon-close.svg" alt="">
            <h4 @click="navigate(link.path)" v-for="link in navLinks">{{link.name}}</h4>
        </div>
    </div>
    <div class="desktop">
        <div ref="picSlider" class="pic-slider flex">
            <img v-for="picSrc in dbItem.pics" class="pic-slider-img" :src="picSrc" alt="">
            <img id="prev" @click="changeSlide($event)" class="pic-slider-control pic-slider-control-prev"
                src="../assets/images/icon-previous.svg" alt="prev icon">
            <img id="next" @click="changeSlide($event)" class="pic-slider-control pic-slider-control-next"
                src="../assets/images/icon-next.svg" alt="next icon">
        </div>
        <div ref="picThumbNailParent" class="pic-slider-thumbnails flex gap wrap">
            <img @click="makeActive($event, index)" v-for="(picSrc, index) in dbItem.pics" class="pic-slider-thumbnail"
                :src="picSrc" :class="{'active': index === 0}" alt="thumbnail item">
        </div>
        <main class="mobile-main flex col gap">
            <h5 class="item-brand">{{dbItem.brand}}</h5>
            <h2 class="item-product">{{dbItem.product}}</h2>
            <p class="item-descr">{{dbItem.descr}}</p>
            <div class="flex gap align-items-center">
                <h3>${{ dbItem.isOnSale ? (dbItem.price * dbItem.salePercentage).toFixed(2) :
                    (dbItem.price.toFixed(2))}}</h3>
                <div v-if="dbItem.isOnSale" class="item-sale">{{dbItem.salePercentage * 100}}%</div>
            </div>
            <div class="flex">
                <h5 class="item-original-price" v-if="dbItem.isOnSale"><s>${{(dbItem.price).toFixed(2)}}</s></h5>
            </div>
            <div class="flex gap wrap">
                <div class="number-selector">
                    <font-awesome-icon @click="itemQuantity > 0 ? itemQuantity-- : ''" class="number-selector-icon"
                        icon="fa-minus"></font-awesome-icon>
                    <span class="number-selector-counter">{{itemQuantity}}</span>
                    <font-awesome-icon @click="itemQuantity++" class="number-selector-icon"
                        icon="fa-plus"></font-awesome-icon>
                </div>
                <a @click="addItem()" class="btn-add flex gap">
                    <img class="btn-shopping-icon" src="../assets/images/shoppingCart.png" alt="cart">
                    <h5 class="btn-add-text">Add to Cart</h5>
                </a>
            </div>
        </main>
    </div>
</template>

<style scoped>
    .sidebar {
        display: none;
        padding: 1rem;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 50vw;
        overflow: hidden;
        z-index: 100;
        background-color: var(--White);
        transition: all .5s;
        box-shadow: var(--Small-shadow);
    }

    .sidebar.open {
        animation: open 1s;
    }

    .sidebar.closed {
        animation: close 1s;
    }

    @keyframes open {
        0% {
            transform: translateX(-100%);
        }

        100% {
            transform: translateX(0);
        }
    }

    @keyframes close {
        0% {
            transform: translateX(0);
        }

        100% {
            transform: translateX(-100%);
        }
    }

    .sidebar-body> :nth-child(1) {
        margin-bottom: 2rem;
        cursor: pointer;
    }

    .sidebar::backdrop {
        background-color: hsla(0, 4%, 20%, 0.644);
    }

    .nav-main {
        position: sticky;
        top: 0;
        z-index: 1;
        padding: .5rem;
        background-color: var(--Navbar-Gray-Blue);
        box-shadow: var(--Extra-Small-shadow);
        width: 100%;
    }

    .nav-icon {
        color: white;
        cursor: pointer;
    }

    .nav-shopping-icon {
        width: 25px;
    }

    .nav-shopping-icon,
    .nav-avatar {
        cursor: pointer;
        width: 40px;
        height: 40px;
        transition: all .5s;
        border: transparent 2px solid;
        border-radius: 50%;
    }

    .nav-avatar:hover {
        border-radius: 50%;
        border: var(--Orange) 2px solid;
    }

    .nav-gap {
        gap: 1rem;
    }

    .nav-logo {
        width: 60px;
    }

    .nav-dropdown {
        position: relative;
    }

    .nav-dropdown-content {
        opacity: 0;
        position: absolute;
        top: 100%;
        right: 0;
        z-index: 1;
        width: 90vw;
        background-color: var(--White);
        border-radius: 8px;
        box-shadow: var(--Modal-shadow);
        transition: all .5s;
    }

    .nav-cart-dropdown-header {
        padding: 1rem;
        border-bottom: 1px solid var(--Shadow);
    }

    .nav-cart-dropdown-body {
        padding: 1rem;
        min-height: 100px;
        overflow: hidden;
        transition: all .5s;
    }

    .nav-cart-dropdown-header-text {
        color: var(--Dark-grayish-blue);
        font-weight: 500;
        font-size: 14px;
    }

    .nav-cart-dropdown-item-pic {
        width: 60px;
        border-radius: 8px;
    }

    .nav-cart-empty-cart {
        margin: 2rem;
        text-align: center;
        color: var(--Dark-grayish-blue);
    }

    .nav-cart-dropdown-price {
        font-size: 14px;
        color: var(--Dark-grayish-blue);
        font-weight: 300;
    }

    .nav-cart-dropdown-total {
        font-weight: 700;
    }

    .nav-cart-item-counter {
        position: absolute;
        top: -5px;
        left: 30px;
        font-size: 10px;
        font-weight: 400;
        color: var(--White);
        background-color: var(--Orange);
        padding: .125rem .35rem;
        border-radius: 50%;
    }

    .nav-cart-product {
        font-size: 14px;
    }

    .cart-item {
        position: relative;
        transition: all .5s;
    }

    .nav-cart-btn-checkout {
        width: 100%;
        background-color: var(--Orange);
        text-align: center;
        padding: .5rem;
        border-radius: 8px;
        color: var(--White);
        cursor: pointer;
        box-shadow: var(--Small-shadow);
        transition: all .5s;
    }

    .nav-cart-btn-checkout:hover {
        box-shadow: unset;
    }

    .nav-cart-remove {
        color: var(--Dark-grayish-blue);
        align-self: center;
        cursor: pointer;
    }

    .pic-slider {
        position: relative;
        width: 100%;
        overflow: hidden;
        transition: all ease-in 1s;
    }

    .pic-slider>img {
        width: inherit;
        transition: all 1s;
    }

    .pic-slider-control {
        position: absolute;
        cursor: pointer;
        bottom: 45%;
        background-color: var(--White);
        padding: 1rem 1rem;
        border-radius: 50%;
        width: 50px !important;
        transition: all .3s ease-in-out;
    }

    .pic-slider-control:hover {
        background-color: var(--Grayish-blue);
    }

    .pic-slider-control-prev {
        left: 10px;
    }

    .pic-slider-control-next {
        right: 10px;
    }

    .pic-slider-thumbnails {
        display: none;
    }

    .pic-slider-thumbnail {
        cursor: pointer;
        width: 80px;
        height: 80px;
        border-radius: 5px;
        transition: all .3s;
    }

    .pic-slider-thumbnail:hover {
        opacity: .5;
    }

    .pic-slider-thumbnail.active {
        opacity: .5;
        border: 2px solid var(--Orange)
    }

    .mobile-main {
        padding: 1rem 2rem;
    }

    .item-brand {
        color: var(--Orange);
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .item-descr {
        font-size: 16px;
        text-align: justify;
        letter-spacing: 1px;
    }

    .item-product {
        color: var(--Very-dark-blue);
        font-weight: 700;
        letter-spacing: 1px;
        font-size: 28px;
    }

    .item-sale {
        color: var(--Orange);
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 1px;
        background-color: var(--Pale-orange);
        border-radius: 4px;
        padding: .1rem .25rem;
    }

    .item-original-price {
        color: var(--Dark-grayish-blue)
    }

    .number-selector {
        background-color: var(--Light-grayish-blue);
        padding: .5rem;
        border-radius: 6px;
        width: 100%;
        display: grid;
        align-items: center;
    }

    .number-selector-icon {
        cursor: pointer;
        color: var(--Orange);
    }

    .number-selector-counter {
        font-size: 14px;
        font-weight: 700;
        grid-row: 1;
        justify-self: center;
    }

    .number-selector> :nth-child(1) {
        justify-self: flex-start;
        grid-row: 1;
    }

    .number-selector> :nth-child(3) {
        justify-self: flex-end;
        grid-row: 1;
    }

    .btn-add {
        cursor: pointer;
        border-radius: 6px;
        padding: .5rem 0;
        align-items: center;
        justify-content: center;
        background-color: var(--Orange);
        width: 100%;
        box-shadow: var(--Small-shadow);
        transition: all .5s;
    }

    .btn-shopping-icon {
        width: 25px;
    }

    .btn-add:hover {
        box-shadow: unset;
    }

    .btn-add-text {
        color: var(--White);
        font-weight: 500;
    }

    @media screen and (min-width: 650px) {
        main {
            grid-row: 1 / span 3;
            grid-column: 2;
            place-self: center;
        }

        .sidebar {
            max-width: 30vw;
        }

        .desktop {
            display: grid;
            grid-template-columns: auto 1fr;
        }

        .pic-slider {
            grid-row: 1 / span 2;
            grid-column: 1;
            margin: 3rem;
            border-radius: 10px;
            max-width: 450px;
            box-shadow: var(--Extra-Small-shadow);
        }

        .pic-slider-thumbnails {
            grid-row: 3;
            grid-column: 1;
            margin: 0 3rem;
            max-width: 450px;
            overflow: hidden;
            display: flex;
            justify-content: space-between;
        }

        .pic-slider-control {
            display: none;
        }

        .number-selector {
            width: 40%;
        }

        .wrap {
            flex-wrap: nowrap;
        }

        .nav-dropdown-content {
            width: 300px;
        }
    }
</style>