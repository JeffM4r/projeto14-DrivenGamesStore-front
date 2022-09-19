import styled from "styled-components";

const Poster =
	"https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png";

function MyCart() {
	return (
		<Block>
			<Img>
				<img src={Poster} alt="Poster" />
			</Img>
			<GameName>God of War - Ragnarock</GameName>
			<Price>R$ 49,99</Price>
		</Block>
	);
}

function CheckoutScreen() {
	return (
		<Screen>
			<Table>
				<Title>Seu carrinho de compras:</Title>
				<Cart>
					<SubTitle>Confira os items do seu carrinho:</SubTitle>
					<MyCart />
				</Cart>
				<TotalTitle>TOTAL DA COMPRA:</TotalTitle>
				<TotalPrice>R$ 249,95</TotalPrice>
			</Table>
			<Button>
				FINALIZAR COMPRA
				<ion-icon name="checkmark-done"></ion-icon>
			</Button>
		</Screen>
	);
}

const Screen = styled.div`
	width: 400px;
	padding: 80px 0;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Table = styled.div`
	width: 340px;
	height: 100%;
	margin-top: 25px;

	display: flex;
	flex-direction: column;
`;

const Title = styled.h1`
	margin-bottom: 45px;

	font-size: 20px;
	font-weight: 600;
`;

const Cart = styled.div`
	width: 340px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const SubTitle = styled.h2`
	margin-bottom: 15px;

	font-size: 16px;
	font-weight: 600;
`;

const Block = styled.div`
	width: 300px;
	height: 30px;
	margin-bottom: 10px;

	display: flex;
`;

const Img = styled.div`
	width: 75px;
	height: 30px;

	img {
		width: 75px;
		height: 30px;
		object-fit: cover;
		object-position: 0vw -0.5vh;
		border-radius: 10px 0 0 10px;
	}
`;

const GameName = styled.div`
	width: 150px;
	height: 30px;

	font-size: 10px;
	font-weight: bold;
	text-align: center;

	display: flex;
	align-items: center;
	justify-content: center;

	background-color: #842a51;
`;

const Price = styled.p`
	width: 75px;
	height: 30px;

	font-size: 12px;
	font-weight: bold;

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 0 10px 10px 0;

	background-color: #ff4791;
`;

const TotalTitle = styled.h1`
	margin-top: 150px;

	font-size: 25px;
	font-weight: bold;

	display: flex;
	align-items: center;
	justify-content: center;
`;

const TotalPrice = styled.h1`
	margin-top: 10px;
	font-size: 40px;
	font-weight: 800;

	display: flex;
	align-items: center;
	justify-content: center;

	color: #ff4791;
`;

const Button = styled.div`
	width: 100%;
	height: 70px;

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 25px;
	font-weight: bold;

	position: fixed;
	z-index: 1;
	bottom: 0;
	left: 0;

	background-color: darkgreen;

	cursor: pointer;

	ion-icon {
		margin-left: 18px;
		font-size: 40px;
	}
`;

export default CheckoutScreen;
