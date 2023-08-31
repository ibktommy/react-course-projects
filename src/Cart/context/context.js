import { createContext, useContext, useReducer } from "react"
import { cartItems } from "../data";
import { reducerFunc } from "../reducer/reducerFunc"
import {
	CLEAR_CART,
  RESET_CART,
	REMOVE_CART_ITEM,
	INCREASE_CART_ITEM_AMOUNT,
	DECREASE_CART_ITEM_AMOUNT,
} from "../reducer/dispatchActions.js";

// Create the Context
const CartContext = createContext()

function getTotalCartPriceInData (cartItems) {
  let priceAdd = 0;
  cartItems.forEach((cartItem) => {
    const {price} = cartItem
    priceAdd += price
  })
  return priceAdd
}
function getTotalCartAmountInData(cartItems) {
	let amountAdd = 0;
	cartItems.forEach((cartItem) => {
		const { amount } = cartItem;
		amountAdd += amount;
	});
  // console.log(amountAdd)
	return amountAdd;
}


// Create Default State Object
const defaultState = {
	cartItems: cartItems,
	totalCartAmount: getTotalCartAmountInData(cartItems),
	totalCartPrice: getTotalCartPriceInData(cartItems),
	// loading: false,
	// cartAmount: 0,
};

export const CartProvider = ({children}) => {
  // UseReducer Hook - for state management
  const [state, dispatchAction] = useReducer(reducerFunc, defaultState)

  // Function to clear the cart
  function clearCart () {
    dispatchAction({ type: CLEAR_CART })
  }
  // Function to reset the cart
  function resetCart () {
    dispatchAction({ type: RESET_CART })
  }
  // Function to remove a cart item
  function removeCartItem(id) {
    dispatchAction({type: REMOVE_CART_ITEM, payload: { id }})
  }
  // Function to increase cart amount
  function increaseCartAmount(id) {
    dispatchAction({type: INCREASE_CART_ITEM_AMOUNT, payload: { id }})
  }
  // Function to decrease cart amount
  function decreaseCartAmount(id) {
    dispatchAction({type: DECREASE_CART_ITEM_AMOUNT, payload: { id }})
  }

  return (
		<CartContext.Provider
			value={{
				...state,
				clearCart,
				resetCart,
				removeCartItem,
				increaseCartAmount,
				decreaseCartAmount,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export const useGlobalCartContext = () => useContext(CartContext)