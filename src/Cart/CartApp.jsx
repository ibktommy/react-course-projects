import "./CartStyle.css";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/context";

const CartApp = () => {
	return (
		<CartProvider>
			<main>
				<Navbar />
				<CartContainer />
			</main>
		</CartProvider>
	);
};

export default CartApp;
