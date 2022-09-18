import styled from "styled-components";

const Poster =
	"https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png";

function Featured() {
	return (
		<>
			<Title>JOGOS EM DESTAQUE</Title>
			<Table>
				<GameBox id="item1">
					<img src={Poster} alt="Poster" />
					<GameInfo>
						<GameTitle>God of War - Ragnarock</GameTitle>

						<GamePrice>
							<Promo>-50%</Promo>
							<p1>R$ 99,99</p1>
							<p2>R$ 49,99</p2>
						</GamePrice>
					</GameInfo>
				</GameBox>
				<GameBox id="item2">
					<img src={Poster} alt="Poster" />
					<GameInfo>
						<GameTitle>God of War - Ragnarock</GameTitle>

						<GamePrice>
							<Promo>-50%</Promo>
							<p1>R$ 99,99</p1>
							<p2>R$ 49,99</p2>
						</GamePrice>
					</GameInfo>
				</GameBox>
				<GameBox>
					<img src={Poster} alt="Poster" />
					<GameInfo>
						<GameTitle>God of War - Ragnarock</GameTitle>

						<GamePrice>
							<Promo>-50%</Promo>
							<p1>R$ 99,99</p1>
							<p2>R$ 49,99</p2>
						</GamePrice>
					</GameInfo>
				</GameBox>
			</Table>
		</>
	);
}

function Top10() {
	return (
		<>
			<Title>TOP 10</Title>
			<Table>
				<GameBox id="item1">
					<img src={Poster} alt="Poster" />
					<GameInfo>
						<GameTitle>God of War - Ragnarock</GameTitle>

						<GamePrice>
							<Promo>-50%</Promo>
							<p1>R$ 99,99</p1>
							<p2>R$ 49,99</p2>
						</GamePrice>
					</GameInfo>
				</GameBox>
				<GameBox id="item2">
					<img src={Poster} alt="Poster" />
					<GameInfo>
						<GameTitle>God of War - Ragnarock</GameTitle>

						<GamePrice>
							<Promo>-50%</Promo>
							<p1>R$ 99,99</p1>
							<p2>R$ 49,99</p2>
						</GamePrice>
					</GameInfo>
				</GameBox>
				<GameBox>
					<img src={Poster} alt="Poster" />
					<GameInfo>
						<GameTitle>God of War - Ragnarock</GameTitle>

						<GamePrice>
							<Promo>-50%</Promo>
							<p1>R$ 99,99</p1>
							<p2>R$ 49,99</p2>
						</GamePrice>
					</GameInfo>
				</GameBox>
			</Table>
		</>
	);
}

function Others() {
	return (
		<>
			<Title>OUTROS</Title>
			<Table>
				<GameBox id="item1">
					<img src={Poster} alt="Poster" />
					<GameInfo>
						<GameTitle>God of War - Ragnarock</GameTitle>

						<GamePrice>
							<Promo>-50%</Promo>
							<p1>R$ 99,99</p1>
							<p2>R$ 49,99</p2>
						</GamePrice>
					</GameInfo>
				</GameBox>
				<GameBox id="item2">
					<img src={Poster} alt="Poster" />
					<GameInfo>
						<GameTitle>God of War - Ragnarock</GameTitle>

						<GamePrice>
							<Promo>-50%</Promo>
							<p1>R$ 99,99</p1>
							<p2>R$ 49,99</p2>
						</GamePrice>
					</GameInfo>
				</GameBox>
				<GameBox>
					<img src={Poster} alt="Poster" />
					<GameInfo>
						<GameTitle>God of War - Ragnarock</GameTitle>

						<GamePrice>
							<Promo>-50%</Promo>
							<p1>R$ 99,99</p1>
							<p2>R$ 49,99</p2>
						</GamePrice>
					</GameInfo>
				</GameBox>
			</Table>
		</>
	);
}

function Products() {
	return (
		<Block>
			<Featured />
			<Top10 />
			<Others />
		</Block>
	);
}

const Block = styled.div`
	width: 350px;
	height: 100%;

	display: flex;
	flex-direction: column;
`;

const Table = styled.div`
	width: 350px;
	margin-bottom: 15px;

	display: flex;
	overflow-x: scroll;
`;

const Title = styled.h1`
	margin-top: 30px;
	margin-bottom: 10px;
	font-size: 22px;
	font-weight: bold;
`;

const GameBox = styled.div`
	width: 300px;
	height: 250px;
	margin-right: 10px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background-color: #ff4791;

	img {
		width: 296px;
		height: 175px;
		object-fit: cover;
		object-position: 0vw -2vh;
	}
`;

const GameInfo = styled.div`
	width: 300px;
	height: 72px;
`;

const GameTitle = styled.h1`
	width: 300px;

	margin: 10px 0px 10px 10px;

	font-size: 20px;
	font-weight: 600;
`;

const GamePrice = styled.div`
	width: 190px;
	height: 25px;
	margin-left: 10px;

	display: flex;
	align-items: center;

	background-color: #842a51;

	p1 {
		margin-left: 4px;

		font-size: 13px;
		font-style: italic;
		text-decoration: line-through;
		color: #9d9d9d;
	}

	p2 {
		margin-left: 5px;

		font-size: 18px;
		font-weight: 700;
	}
`;

const Promo = styled.p`
	width: 40px;
	height: 25px;

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 12px;
	font-weight: 600;

	background-color: darkgreen;
`;

export default Products;
