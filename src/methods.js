import { store } from '@/store.js';
import clothes from '@/clothes.json';
export function addCartItem(prodId, option) {
    let buffObj;
    buffObj = { name: clothes[option][prodId].name, price: clothes[option][prodId].price };
    store.cartItems.push(buffObj);
    store.cartSum += buffObj.price;
    store.isCartEmpty = false;
    store.cartValue++;
}

export function deleteCartItem(cartItemId) {
    store.cartSum -= store.cartItems[cartItemId].price;
    store.cartItems.splice(cartItemId, 1);
    store.cartValue--;
}

export function openCloseCart() {
    store.isCartOpen = !store.isCartOpen;
}


