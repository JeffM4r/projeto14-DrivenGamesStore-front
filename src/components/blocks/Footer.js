import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function Footer({ userName, setUserName }) {
	const navigate = useNavigate();
	const { fav } = useContext(UserContext);

	function naviteToCart(){
		navigate("/cart")
	}

	return (
		<Block>
			<FavButton>
				<ion-icon name="heart"></ion-icon>
			</FavButton>
			<Spacer />

			<CartButton onClick={naviteToCart}>
				<ion-icon name="cart"></ion-icon>
			</CartButton>

		</Block>
	);
}

const Block = styled.div`
	width: 100%;
	height: 80px;

	display: flex;
	align-items: center;
	justify-content: space-around;

	position: fixed;
	z-index: 1;

	bottom: 0;

	border-top: 10px solid #0e0e13;
	background-color: #ff4791;

	div {
		font-size: 100px;
	}
`;

const FavButton = styled.div`
	width: 45%;
	height: 70px;

	display: flex;
	align-items: center;
	justify-content: center;

	p {
		font-size: 20px;
		font-weight: 700;
		color: #ff4791;

		position: absolute;
		z-index: 1;
	}

	ion-icon {
		font-size: 65px;
	}
`;

const CartButton = styled.div`
	width: 45%;
	height: 70px;

	display: flex;
	align-items: center;
	justify-content: center;

	p {
		font-size: 20px;
		font-weight: 700;
		color: #ff4791;

		position: absolute;
		z-index: 1;
		top: 20px;
	}

	ion-icon {
		font-size: 65px;
		position: absolute;
		right: 70px;
	}
`;

const Spacer = styled.div`
	width: 2px;
	height: 70px;

	background-color: rgba(255, 255, 255, 0.65);
`;

export default Footer;
