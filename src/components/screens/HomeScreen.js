import styled from "styled-components";


import Header from "../blocks/Header";
import Congratulations from "../blocks/Congratulations";
import Products from "../blocks/Products";
import Footer from "../blocks/Footer";

function HomeScreen() {


	return (
		<Screen>
			<Header/>
			<Congratulations />
			<Products />
			<Footer/>
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
