import { Link } from "react-router-dom";

import styled from "styled-components";

function SignUpScreen() {
	return (
		<Screen>
			<Title>Faça seu cadastro!</Title>
			<Form>
				<Input type="text" placeholder="Nome" />
				<Input type="text" placeholder="Image/Url" />
				<Input type="text" placeholder="Usuário" />
				<Input type="text" placeholder="CPF" />
				<Input type="email" placeholder="E-mail" />
				<Input type="password" placeholder="Senha" />
				<Button>CADASTRAR</Button>
			</Form>
			<Link to="/">
				<Login>
					Já possui uma conta? <b>Faça Login!</b>
				</Login>
			</Link>
		</Screen>
	);
}

const Screen = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Title = styled.h1`
	width: 250px;
	margin-bottom: 15px;

	font-size: 45px;
	font-weight: bold;
	line-height: 55px;
	text-align: center;

	color: #ffffff;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	width: 350px;
	height: 55px;

	margin-top: 5px;
	margin-bottom: 10px;
	padding-left: 10px;

	border: 1px solid #d5d5d5;
	border-radius: 6px;
	outline-color: #faa7c9;

	font-size: 18px;
	color: #666666;

	background-color: #f0f0f0;

	::placeholder {
		color: #dbdbdb;
		font-size: 18px;
		font-weight: 500;
	}

	&disabled {
		background-color: #f2f2f2;
		color: #afafaf;
		border: 1px solid #d5d5d5;
	}
`;

const Button = styled.button`
	width: 350px;
	height: 60px;
	margin: 15px 0;

	border-radius: 6px;
	border: none;

	font-size: 21px;
	font-weight: bold;
	color: #ffffff;

	background-color: #ff4791;
`;

const Login = styled.p`
	margin-top: 5px;
	font-size: 12px;
	color: #ffffff;

	b {
		font-weight: bold;
		font-style: italic;
		text-decoration: underline;
	}
`;

export default SignUpScreen;
