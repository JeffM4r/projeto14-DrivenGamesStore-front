import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";

function Featured({ productPrice, promoPercent, promoDescount }) {

	return (
		<>
			<Title>JOGOS EM DESTAQUE</Title>
			<Table>
				<GameBox id="item1">
					<img src="" alt="Poster" />
					<GameInfo>
						<GameTitle>God of War - Ragnarock</GameTitle>

						<GamePrice>
							<Promo>{promoPercent}</Promo>
							<p1>{productPrice}</p1>
							<p2>{promoDescount}</p2>
						</GamePrice>
					</GameInfo>
				</GameBox>
			</Table>
		</>
	);
}

function Top10({ productPrice, promoPercent, promoDescount }) {
	return (
		<>
			<Title>TOP 10</Title>
			<Table>
				<GameBox id="item1">
					<img src="" alt="Poster" />
					<GameInfo>
						<GameTitle>God of War - Ragnarock</GameTitle>

						<GamePrice>
							<Promo>{promoPercent}</Promo>
							<p1>{productPrice}</p1>
							<p2>{promoDescount}</p2>
						</GamePrice>
					</GameInfo>
				</GameBox>
			</Table>
		</>
	);
}

function Others({ productPrice, promoPercent, promoDescount }) {
	return (
		<>
			<Title>OUTROS</Title>
			<Table>
				<GameBox id="item1">
					<img src="" alt="Poster" />
					<GameInfo>
						<GameTitle>God of War - Ragnarock</GameTitle>

						<GamePrice>
							<Promo>{promoPercent}</Promo>
							<p1>{productPrice}</p1>
							<p2>{promoDescount}</p2>
						</GamePrice>
					</GameInfo>
				</GameBox>
			</Table>
		</>
	);
}


function Products() {

	const [promo, setPromo] = useState(50);
	const [price, setPrice] = useState(99.90);

	const { token, allProd, setAllProd } = useContext(UserContext);

	const promoPercent = "-" + promo + "%";
	const promoDescount = "R$ " + (promo / 100) * price;
	const productPrice = "R$ " + price;

	const config = {
		headers: {
			Authorization: "Bearer " + token
		}
	}
	console.log(token)
	axios.get("https://driven-games-store.herokuapp.com/products", config)
		.then(ans => {
			setAllProd(ans.data)
			console.log(allProd)
		})
		.catch(err => console.log("DEU MUITO RUIM"))

	return (
		<Block>
			<Featured productPrice={productPrice} promoPercent={promoPercent} promoDescount={promoDescount} />
			<Top10 productPrice={productPrice} promoPercent={promoPercent} promoDescount={promoDescount} />
			<Others productPrice={productPrice} promoPercent={promoPercent} promoDescount={promoDescount} />
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
