import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";

import DGSLogo from "../../assets/img/driven-games-store-logo-v1.png";
import UserContext from "../contexts/UserContext";

function SignInScreen() {
	const { setToken, setUserName, setUser } = useContext(UserContext);
	const [isSignIn, setIsSignIn] = useState(false);
	const [form, setForm] = useState({ email: "", password: "" });
	let navigate = useNavigate();

	function LoginError() {
		setIsSignIn(false);
		alert("Houve um erro nessa tentativa de login, por favor verifique seu email e senha");
	}

	function LoginSucces(response) {
		setUserName(response.data.name)
		setUser(response.data.user)
		setToken(response.data.token)
		navigate("/home")
	}

	function signin(conta) {
		const promise = axios.post(`https://driven-games-store.herokuapp.com/signin`, conta);
		return promise;
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (isSignIn) { return };
		setIsSignIn(!isSignIn);
		const promise = signin(form);
		promise.then(response => LoginSucces(response));
		promise.catch(response => LoginError(response));
	}

	return (
		<Screen>
			<Logo src={DGSLogo} alt="Logo" />
			<Title>DRIVEN GAMES STORE</Title>

			<Form onSubmit={handleSubmit}>
				<Input type="email" required disabled={isSignIn ? true : false} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Insira seu email" />
				<Input type="password" required disabled={isSignIn ? true : false} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Insira sua senha" />
				<SignIn>ENTRAR</SignIn>
			</Form>

			<Link to="/sign-up">
				<SignUp>CADASTRE-SE</SignUp>
			</Link>

			<By>
				Criado por:
				<br />
				<a href="https://github.com/dorigoluiz">@dorigoluiz</a> &{" "}
				<a href="https://github.com/JeffM4r">JeffM4r</a>
			</By>
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

const Logo = styled.img`
	width: 150px;
`;

const Title = styled.h1`
	width: 350px;
	margin-top: 15px;
	margin-bottom: 30px;

	font-size: 50px;
	text-align: center;
	color: #ffffff;

	font-family: "Acme", sans-serif;
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

const SignIn = styled.button`
	width: 350px;
	height: 60px;
	margin-top: 5px;
	margin-bottom: 35px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	font-size: 21px;
	font-weight: bold;
	color: #ffffff;

	border-radius: 6px;
	border: none;

	background-color: #ff4791;

	cursor: pointer;
`;

const SignUp = styled.button`
	width: 350px;
	height: 60px;
	margin-top: 5px;
	margin-bottom: 20px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	font-size: 21px;
	font-weight: bold;
	color: #ffffff;

	border-radius: 6px;
	border: 3px solid #ff4791;

	background-color: #0e0e13;

	cursor: pointer;
`;

const By = styled.p`
	margin-top: 55px;

	font-size: 12px;
	color: #f9f9f9;
	text-align: center;

	a {
		color: inherit;
		font-style: italic;
		text-decoration: underline;
	}
`;

export default SignInScreen;
