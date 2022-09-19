import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import UserContext from "../components/contexts/UserContext.js";

import styled from "styled-components";
import ResetCss from "../assets/css/ResetCss";
import GlobalStyles from "../assets/css/GlobalStyles";

import Header from "../components/blocks/Header.js";
import Footer from "../components/blocks/Footer.js";
import SignInScreen from "../components/screens/SignInScreen";
import SignUpScreen from "../components/screens/SignUpScreen";
import HomeScreen from "../components/screens/HomeScreen";
import ProductScreen from "../components/screens/ProductScreen.js";
import FavsScreen from "../components/screens/FavsScreen.js";
import CartScreen from "../components/screens/CartScreen.js";
import CheckoutScreen from "../components/screens/CheckoutScreen";

function App() {
	const [userName, setUserName] = useState("");
	const [apa, setApa] = useState("");
	const [user, setUser] = useState("");
	const [token, setToken] = useState("");
	const [fav, setFav] = useState(100);
	const [cart, setCart] = useState(100);

	const dontRender = ["/sign-up", "/cart", "/checkout"];
	const { pathname } = window.location;
	const hasHeader = pathname !== "/" && !dontRender.includes(pathname);

	return (
		<UserContext.Provider
			value={{ userName, setUserName, user, setUser, token, setToken, apa, setApa, fav, setFav }}
		>
			<ResetCss />
			<GlobalStyles />

			<Fixed>
				{hasHeader && <Header />}
				{hasHeader && <Footer />}
			</Fixed>

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SignInScreen />} />
					<Route path="/sign-up" element={<SignUpScreen />} />
					<Route path="/home" element={<HomeScreen />} />
					<Route path="/product/:Id" element={<ProductScreen />} />
					<Route path="/favorites" element={<FavsScreen />} />
					<Route path="/cart" element={<CartScreen />} />
					<Route path="/checkout" element={<CheckoutScreen />} />
				</Routes>
			</BrowserRouter>
		</UserContext.Provider>
	);
}

const Fixed = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default App;
