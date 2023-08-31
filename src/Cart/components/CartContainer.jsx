import { useGlobalCartContext } from "../context/context";
import CartItem from "./CartItem";
import { nanoid } from "nanoid";

const CartContainer = () => {
	const { clearCart, resetCart, ...state} = useGlobalCartContext();
	const { cartItems, totalCartPrice} = state;

	return (
		<section id="cart-container">
			<h2 className="cart-header">Your bag</h2>
			{cartItems.length === 0 ? (
				<p className="cart-empty-msg">Your Cart is Empty!</p>
			) : (
				<div className="cart-container-content">
					{cartItems.map((cartItem) => {
						return <CartItem key={nanoid()} cartItem={cartItem} />;
					})}
				</div>
			)}
			{cartItems.length !== 0 ? (
				<div className="cart-total">
					<p className="cart-total-title">Total</p>
					<p className="cart-total-number">${totalCartPrice}</p>
				</div>
			) : null}
			{cartItems.length !== 0 ? (
				<button className="clear-cart-btn" onClick={clearCart}>
					clear cart
				</button>
			) : (
				<button className="reset-cart-btn" onClick={resetCart}>
					reset cart
				</button>
			)}
		</section>
	);
};

export default CartContainer;
