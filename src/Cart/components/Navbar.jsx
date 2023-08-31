import { FaCartPlus } from 'react-icons/fa'
import { useGlobalCartContext } from '../context/context';


const Navbar = () => {
	const {...state}= useGlobalCartContext();
	const { updateTotalCartFigure } = useGlobalCartContext();

	const { totalCartAmount } = state
  return (
		<nav>
			<div className="nav-center">
				<h3 className="logo">useReducer - Cart</h3>

				<div className="cart-btn-container">
					<button className="cart-btn">{<FaCartPlus />}</button>
          <p className="cart-btn-number">{totalCartAmount}</p>
				</div>
			</div>
		</nav>
	);
}

export default Navbar