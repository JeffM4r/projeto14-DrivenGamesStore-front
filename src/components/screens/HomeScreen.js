import { useContext } from "react";

import styled from "styled-components";
import UserContext from "../contexts/UserContext";

import Header from "../blocks/Header";
import Congratulations from "../blocks/Congratulations";
import Products from "../blocks/Products";
import Footer from "../blocks/Footer";

function HomeScreen() {
	const { userName, setUserName } = useContext(UserContext);

	return (
		<Screen>
			<Congratulations />
			<Products />
		</Screen>
	);
}

const Screen = styled.div`
	width: 100%;
	padding: 80px 0;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export default HomeScreen;
