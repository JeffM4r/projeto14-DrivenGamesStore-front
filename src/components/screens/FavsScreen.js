import styled from "styled-components";

const Poster =
	"https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png";

function FavList() {
	return (
		<Block>
			<Img>
				<img src={Poster} alt="Poster" />
			</Img>
			<GameName>God of War - Ragnarock</GameName>
			<Cart>
				<ion-icon name="cart-outline"></ion-icon>
			</Cart>
		</Block>
	);
}

function FavsScreen() {
	return (
		<Screen>
			<Table>
				<Title>Sua lista de favoritos:</Title>
				<FavList />
				<FavList />
				<FavList />
				<FavList />
				<FavList />
				<FavList />
				<FavList />
				<FavList />
				<FavList />
			</Table>
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
`;

const Title = styled.h1`
	margin-bottom: 15px;

	font-size: 20px;
	font-weight: 600;
`;

const Block = styled.div`
	width: 340px;
	height: 75px;
	margin-bottom: 10px;

	display: flex;
`;

const Img = styled.div`
	width: 100px;
	height: 75px;

	img {
		width: 100px;
		height: 75px;
		object-fit: cover;
		object-position: 0vw -1vh;
	}
`;

const GameName = styled.div`
	width: 175px;
	height: 75px;

	font-size: 18px;
	font-weight: bold;
	text-align: center;
	line-height: 25px;

	display: flex;
	align-items: center;
	justify-content: center;

	background-color: #842a51;
`;

const Cart = styled.div`
	width: 75px;
	height: 75px;

	display: flex;
	align-items: center;
	justify-content: center;

	background-color: #ff4791;

	ion-icon {
		font-size: 50px;
	}
`;

export default FavsScreen;
