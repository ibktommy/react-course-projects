import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import { useGlobalCartContext } from '../context/context';

const CartItem = ({cartItem}) => { 
  const {id, title, price, img, amount} = cartItem

	const {
		removeCartItem,
		increaseCartAmount,
		decreaseCartAmount,
	} = useGlobalCartContext();

  return (
		<article className="cart-item">
			<img src={img} alt={title} />

			<div className="cart-item-info">
				<h4>{title}</h4>
				<p>{`$${price}`}</p>
				<button className="remove-cart-item" onClick={() => removeCartItem(id)}>
					remove
				</button>
			</div>

			<div className="cart-item-action">
				<button
					className="cart-increase-btn"
					onClick={() => increaseCartAmount(id)}
				>
					<FaChevronUp />
				</button>
				<p className="cart-item-amount">{amount}</p>
				<button
					className="cart-decrease-btn"
					onClick={() => decreaseCartAmount(id)}
				>
					<FaChevronDown />
				</button>
			</div>
		</article>
	);
}

export default CartItem