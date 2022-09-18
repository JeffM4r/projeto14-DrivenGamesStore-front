import styled from "styled-components";

const Poster =
	"https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png";

function ProductScreen() {
	return (
		<Screen>
			<img src={Poster} alt="Poster" />
			<GameInfos>
				<GameTitle>God of War - Ragnarock</GameTitle>
				<Infos>
					<strong>Genero: </strong>blablabla
					<br />
					<strong>Autor: </strong>blablabla
					<br />
					<strong>Distribuição: </strong>blablabla
				</Infos>
				<Description>
					<strong>Descrição: </strong>Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book.
				</Description>
			</GameInfos>
			<GameShop>
				<Favs>
					Adicionar aos favoritos
					<ion-icon name="heart-outline"></ion-icon>
				</Favs>
				<GamePrice>
					<Promo>-50%</Promo>
					<Price>
						<p1>R$ 99,99</p1>
						<p2>R$ 49,99</p2>
					</Price>
				</GamePrice>
				<CartBuy>
					<CartButton>
						<ion-icon name="cart-outline"></ion-icon>
					</CartButton>

					<BuyButton>COMPRAR</BuyButton>
				</CartBuy>
			</GameShop>
		</Screen>
	);
}

const Screen = styled.div`
	width: 400px;
	padding: 70px 0;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	img {
		width: 100vw;
		height: 200px;
		object-fit: cover;
		object-position: 0vw -4vh;
	}

	strong {
		font-weight: bold;
		line-height: 20px;

		color: #ffffff;
	}
`;

const GameInfos = styled.div`
	width: 340px;
	height: 100%;

	margin-top: 20px;
`;

const GameTitle = styled.h1`
	margin-bottom: 15px;

	font-size: 20px;
	font-weight: bold;
	word-wrap: wrap;
`;

const Infos = styled.p`
	margin-bottom: 20px;

	color: #ff4791;
`;

const Description = styled.p`
	margin-bottom: 15px;
	line-height: 20px;
`;

const GameShop = styled.div`
	margin-top: 35px;
`;

const Favs = styled.div`
	width: 340px;
	height: 25px;
	margin-bottom: 5px;

	font-weight: bold;

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 5px 5px 0px 0px;

	background-color: #ff4791;

	ion-icon {
		margin-left: 20px;
		font-size: 22px;
	}
`;

const GamePrice = styled.div`
	width: 340px;
	height: 25px;
	margin-bottom: 5px;

	display: flex;

	background-color: blue;

	p1 {
		font-size: 15px;
		font-style: italic;
		text-decoration: line-through;

		color: #9d9d9d;
	}

	p2 {
		font-size: 21px;
		font-weight: bold;
	}
`;

const Promo = styled.div`
	width: 113px;
	height: 25px;

	display: flex;
	align-items: center;
	justify-content: center;

	background-color: darkgreen;
`;

const Price = styled.div`
	width: 237px;
	height: 25px;

	display: flex;
	align-items: center;
	justify-content: space-evenly;

	background-color: #842a51;
`;

const CartBuy = styled.div`
	width: 340px;
	height: 40px;

	display: flex;
`;

const CartButton = styled.div`
	width: 113px;

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 0px 0px 0px 5px;

	background-color: #ff4791;

	ion-icon {
		font-size: 30px;
	}
`;

const BuyButton = styled.div`
	width: 237px;

	font-size: 20px;
	font-weight: 900;

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 0px 0px 5px 0px;

	background-color: darkgreen;
`;

export default ProductScreen;
