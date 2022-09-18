import styled from "styled-components";

function Congratulations() {
	return (
		<Block>
			<Quote>
				<FTitle>Parabéns!</FTitle>
				<STitle>Sua compra foi realizada com sucesso!</STitle>
				<Desc>
					Esperamos que se divirta e aguardamos seu retorno para adquirir mais
					jogos!
				</Desc>
			</Quote>
		</Block>
	);
}

const Block = styled.div`
	width: 100vw;
	height: 100vh;

	position: fixed;
	z-index: 2;
	top: 0;

	display: none;
	align-items: center;
	justify-content: center;

	background-color: rgba(0, 0, 0, 0.85);
`;

const Quote = styled.div`
	width: 350px;
	height: 375px;

	padding: 30px 30px 30px 30px;

	text-align: center;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	position: relative;

	border-radius: 20px;

	background-color: #0e0e13;
`;

const FTitle = styled.h1`
	font-size: 50px;
	font-weight: bold;
	color: darkgreen;
`;

const STitle = styled.h1`
	font-size: 35px;
	font-weight: bold;
	line-height: 40px;

	color: #ff4791;
`;

const Desc = styled.p`
	font-size: 13px;
	font-weight: bold;
	line-height: 16px;

	color: #ff4791;
`;

export default Congratulations;
