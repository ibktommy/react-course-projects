import {
	CLEAR_CART,
	RESET_CART,
	REMOVE_CART_ITEM,
	INCREASE_CART_ITEM_AMOUNT,
	DECREASE_CART_ITEM_AMOUNT,
} from "./dispatchActions";
import { cartItems } from "../data";

// Function to calculate default totalCartAmount from Data file
function getTotalCartAmountInData(cartItems) {
	let amountAdd = 0;
	cartItems.forEach((cartItem) => {
		const { amount } = cartItem;
		amountAdd += amount;
	});
	return amountAdd;
}
// Function to calculate default totalCartPrice from Data file
function getTotalCartPriceInData(cartItems) {
	let priceAdd = 0;
	cartItems.forEach((cartItem) => {
		const { price } = cartItem;
		priceAdd += price;
	});
	return priceAdd;
}

export const reducerFunc = (state, action) => {
	if (action.type === CLEAR_CART) {
		return { ...state, cartItems: [], totalCartAmount: 0, totalCartPrice: 0 };
	}

	if (action.type === RESET_CART) {
		return {
			...state,
			cartItems: cartItems,
			totalCartAmount: getTotalCartAmountInData(cartItems),
			totalCartPrice: getTotalCartPriceInData(cartItems),
		};
	}

	if (action.type === REMOVE_CART_ITEM) {
		const newCartItems = state.cartItems.filter(
			(cartItem, index) => cartItem.id !== action.payload.id,
		);

		// Find the cartItem to be removed
		const targetCartItem = state.cartItems.find((cartItem) => cartItem.id === action.payload.id)

		console.log(targetCartItem);
		// Get Price of target cartItem from targetCartItem-data
		const newTotalPrice = targetCartItem.price;
		const newTotalAmount = targetCartItem.amount;
		return {
			...state,
			cartItems: newCartItems,
			totalCartAmount: state.totalCartAmount - newTotalAmount,
			totalCartPrice: parseFloat(
				(state.totalCartPrice - newTotalPrice).toFixed(2),
			),
		};
	}

	// const priceTargetItem = state.cartItems[index].price;
	// const amountTargetItem = state.cartItems[index].amount;

	if (action.type === INCREASE_CART_ITEM_AMOUNT) {
		// Get Price of target cartItem from default cartItem-data
		const priceTargetItem = cartItems[action.payload.id - 1].price;

		const filteredCart = state.cartItems.map((cartItem) => {
			if (cartItem.id === action.payload.id) {
				return {
					...cartItem,
					amount: cartItem.amount + 1,
					price: parseFloat((cartItem.price + priceTargetItem).toFixed(2)),
				};
			}
			return cartItem;
		});

		return {
			...state,
			cartItems: filteredCart,
			totalCartAmount: state.totalCartAmount + 1,
			totalCartPrice: parseFloat(
				(state.totalCartPrice + priceTargetItem).toFixed(2),
			),
		};
	}

	if (action.type === DECREASE_CART_ITEM_AMOUNT) {
		// Get Price of target cartItem from default cartItem-data
		const priceTargetItem = cartItems[action.payload.id - 1].price;

		const filteredCart = state.cartItems.map((cartItem) => {
			if (cartItem.id === action.payload.id) {
				if (cartItem.amount === 0) {
					return cartItem;
				}
				return {
					...cartItem,
					amount: cartItem.amount - 1,
					price: parseFloat((cartItem.price - priceTargetItem).toFixed(2)),
				};
			}
			return cartItem;
		});

		// Dont increase the totalCartAmount when a cartItem-amount has reached 0
		const targetCartItemAmount = state.cartItems[action.payload.id - 1].amount;
		if (targetCartItemAmount === 0) {
			return {
				...state,
				totalCartAmount: state.totalCartAmount,
				totalCartPrice: state.totalCartPrice,
			};
		}

		return {
			...state,
			cartItems: filteredCart,
			totalCartAmount: state.totalCartAmount - 1,
			totalCartPrice: parseFloat(
				(state.totalCartPrice - priceTargetItem).toFixed(2),
			),
		};
	}
	return state;
};
