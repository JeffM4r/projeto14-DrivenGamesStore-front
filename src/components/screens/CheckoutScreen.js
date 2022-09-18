import { useState } from "react";
import styled from "styled-components";

function CheckoutScreen() {
	const [confirm, setConfirm] = useState("");

	console.log(confirm);
	return (
		<Screen>
			<Finishing confirm={confirm}>
				<Quote>
					<QuoteTitle>Tem certeza que deseja realizar esta compra?</QuoteTitle>
					<Purchasing>
						<li>God of War</li>
						<li>God of War</li>
						<li>God of War</li>
					</Purchasing>
					<Pricing>
						<Title>Com o valor de:</Title>
						<Price>R$ 249,95</Price>
					</Pricing>
					<FinishButton>
						CONFIRMAR
						<ion-icon name="checkmark-done"></ion-icon>
					</FinishButton>
				</Quote>
			</Finishing>

			<Test setConfirm={setConfirm} onClick={() => setConfirm("wee")}>
				BOTAO DE TESTE
			</Test>

			<Top>
				<h1> Checkout - @username</h1>
				<Menu>
					<ion-icon name="menu"></ion-icon>
				</Menu>
			</Top>

			<Table>
				<Title>Dados da compra:</Title>
				<List>
					<li>God of War</li>
					<li>God of War</li>
					<li>God of War</li>
				</List>
				<Title>Valor da compra:</Title>
				<p>
					<strong>Total da compra: R$ 249,95</strong>
				</p>
				<Title>Dados do comprador:</Title>
				<p>
					<strong>Nome: </strong> Fulano de Tal
				</p>
				<p>
					<strong>CPF: </strong> 000.000.000-00
				</p>
				<p>
					<strong>Email: </strong> fulanodetal@gmail.com
				</p>
			</Table>
			<Form>
				<CardTitle>Dados do cartão</CardTitle>
				<Simple>
					<Input type="text" placeholder="Nome impresso no cartão" />
					<Input type="text" placeholder="Número do cartão" />
				</Simple>
				<Double>
					<div>
						<Input type="text" placeholder="Código de segurança" />
					</div>
					<div>
						<Input type="text" placeholder="Validade mm/aa" />
					</div>
				</Double>

				<Button>
					FINALIZAR
					<ion-icon name="checkmark-done"></ion-icon>
				</Button>
			</Form>
		</Screen>
	);
}

const Screen = styled.div`
	width: 100vw;
	height: 100vh;
	padding: 70px 35px;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Test = styled.button`
	width: 100px;
	height: 100px;
`;

const Top = styled.div`
	width: 100%;
	height: 70px;
	padding: 0 30px;

	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;

	font-size: 20px;
	font-weight: bold;

	display: flex;
	align-items: center;
	justify-content: space-between;

	background-color: #ff4791;

	p {
		font-size: 75px;
	}
`;

const Menu = styled.div`
	display: flex;
	align-items: center;

	ion-icon {
		font-size: 55px;
	}
`;

const Table = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;

	p {
		font-size: 16px;
		font-weight: 500;
		line-height: 23px;
	}

	strong {
		font-weight: bold;
	}
`;

const Title = styled.h1`
	margin: 20px 0;
	font-size: 25px;
	font-weight: bold;
`;

const List = styled.div`
	margin-left: 15px;

	line-height: 22px;

	display: flex;
	flex-direction: column;
`;

const Form = styled.form`
	width: 100vw;

	margin-left: 2px;
	padding-right: 4px;
	margin-bottom: 72px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	position: fixed;
	bottom: 0;
	left: 0;
`;

const CardTitle = styled.h1`
	width: 99.5%;
	height: 55px;
	margin-bottom: 1px;

	font-size: 20px;
	font-weight: bold;

	display: flex;
	align-items: center;
	justify-content: center;

	background-color: #ff4791;
	border-radius: 8px 8px 0px 0px;
`;

const Input = styled.input`
	width: 100%;
	height: 55px;

	margin-top: 1px;
	margin-bottom: 1px;
	padding-left: 10px;

	border: 1px solid #d5d5d5;
	outline-color: #faa7c9;

	font-size: 18px;
	color: #666666;

	display: flex;
	align-items: center;

	background-color: #f0f0f0;

	::placeholder {
		color: #dbdbdb;
		font-size: 18px;
	}

	&:disabled {
		background-color: #f2f2f2;
		color: #afafaf;
		border: 1px solid #d5d5d5;
	}
`;

const Simple = styled.div`
	width: 100%;
	padding: 0 1px;
`;

const Double = styled.div`
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: center;

	div {
		width: 100%;
		margin: 0 1px;
	}
`;

const Button = styled.button`
	width: 100%;
	height: 70px;

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 25px;
	font-weight: bold;
	color: #ffffff;

	position: fixed;
	z-index: 1;
	bottom: 0;
	left: 0;

	background-color: darkgreen;
	border: none;

	cursor: pointer;

	ion-icon {
		margin-left: 18px;
		font-size: 40px;
	}
`;

const Finishing = styled.div`
	width: 100vw;
	height: 100vh;

	position: fixed;
	z-index: 2;
	top: 0;

	display: ${(props) => (props.confim === "wee" ? "flex" : "none")};
	align-items: center;
	justify-content: center;

	background-color: rgba(0, 0, 0, 0.85);
`;

const Quote = styled.div`
	width: 350px;
	height: 500px;

	padding: 30px 30px 70px 30px;

	text-align: center;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	position: relative;

	border-radius: 10px;

	background-color: #0e0e13;
`;

const QuoteTitle = styled.h1`
	font-size: 30px;
	font-weight: bold;
`;

const Purchasing = styled.ul`
	font-size: 18px;
	font-weight: bold;
	line-height: 25px;

	color: #ff4791;
`;

const Pricing = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const Price = styled.h1`
	font-size: 45px;
	font-weight: 800;
	color: darkgreen;
`;

const FinishButton = styled.button`
	width: 100%;
	height: 50px;

	font-size: 20px;
	font-weight: bold;
	color: #ffffff;

	display: flex;
	align-items: center;
	justify-content: center;

	position: absolute;
	bottom: 0;

	border: none;
	border-radius: 0 0 10px 10px;

	background-color: darkgreen;

	ion-icon {
		margin-left: 18px;
		font-size: 40px;
	}
`;

export default CheckoutScreen;
