import { useRef } from "react";
import "../Components/main.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>Cafeteria</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="">Login</a>
				<a href="/#">Contact</a>
				<a href="/#">About me</a>
				<a href="/#">Products</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
		
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				
			</button>
		</header>
	);
}

export default Navbar;