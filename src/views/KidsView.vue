<template>

    <head>
        <title>shop</title>

    </head>

    <body>

        <div class="home">


            <div class="header">
                <div class="wrap">
                    <h1 class="site-title">SHOP</h1>

                </div>
                <p class="cart-value-style">{{ store.cartValue }}</p>
                <img class="cart-style" src="/img/shoppingCart.png" @click="funcs.openCloseCart()" />
                <div class="cart" v-if="store.isCartOpen">
                    <ul v-if="!store.isCartEmpty">
                        <li v-for="(cartItem, cartKey) in store.cartItems" :key="cartKey">
                            {{ cartItem.name }} {{ cartItem.price }}$
                            <a @click="funcs.deleteCartItem(cartKey)">delete</a>
                        </li>
                    </ul>
                    <p>Total: {{ store.cartSum }}$</p>
                </div>
            </div>
            <div class="grid-container">
                <div class="grid-item" v-for="(item, index) in clothes.kids" v-bind:key="index">
                    <img class="image" :src=item.src />
                    <p>{{ item.name }}</p>
                    <p>{{ item.price }}</p>
                    <button class="add-to-card" @click="funcs.addCartItem(index, 'kids')">Buy</button>
                </div>
            </div>
            <div class="footer">
                <div class="wrap">shop 2021</div>
            </div>
        </div>
    </body>

</template>

<script >





import { store } from '@/store.js';
import * as funcs from '@/methods.js';
import clothes from '@/clothes.json';
export default {
    name: "HomeView",
    components: {
    },
    data() {
        return {
            store,
            funcs,
            clothes,
        };
    },

    watch: {},

    methods: {

    },
};
</script>
<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: inline;
}

body {
    line-height: 1;
    font-family: Tahoma, Verdana, sans-serif;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: "";
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

.header {
    width: 100%;
    height: 50px;
    margin-top: 20px;
    background-color: grey;
    color: white;
    padding-top: 16px;
}

.main {
    background-color: #f1f1f1;
}

.footer {
    min-height: 200px;
    margin-top: 30px;
    background: #252856;
    color: #fff;
}

.grid-container {
    margin-left: 28px;
    display: flex;
    padding: 0 4px;
    flex-wrap: wrap;
    width: 100%;

}

.grid-item {
    width: 300px;
    background-color: rgb(255, 255, 255);
    margin-bottom: 12px;
    margin-top: 30px;
    text-align: center;


}

.image {
    height: 400px;
    width: 300px;
    object-fit: scale-down;
    padding-bottom: 10px;
}

.cart-style {
    position: absolute;
    top: 42px;
    right: 10px;
    width: 32px;
    height: 32px;
    color: grey;
}

.cart {
    position: absolute;
    top: 42px;
    right: 10px;
    background-color: rgb(162, 155, 155);
}

.flag {
    position: relative;
    width: 10%;
    height: 5%;
    margin: 5px;
    max-width: 200px;
    max-height: 100px;
    right: 550px;

}

.cart-value-style {
    position: absolute;
    top: 60px;
    right: 20px;
    width: 40px;
    height: 40px;
    color: darkgrey;
}

.add-to-card {
    width: 200px;
    height: 32px;
    margin-top: 10px;
    background-color: rgb(144, 160, 160);
    color: rgb(255, 255, 255);
    border: none;

}

.wrapf {
    text-align: center;
}
</style>

<style lang="scss">
nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }

}
</style>
