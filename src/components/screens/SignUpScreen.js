import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

import styled from "styled-components";

function SignUpScreen() {
	const [isSignUp,setIsSignUp] = useState(false);
    const [form , setForm] = useState({name:"", email:"",password:"", img:"",user:"",cpf:""})
    let navigate = useNavigate();

	function signUpError(){
        setIsSignUp(false);
        alert("Houve um erro nessa tentativa de cadastro, por favor tente novamente");
    }

    function signUpSucces(){
        alert("cadastro feito com sucesso")
        navigate("/")
    }

    function signUp(cadastro) {
        const promise = axios.post(`https://driven-games-store.herokuapp.com/signup`, cadastro);
        return promise;
    }

    function handleSubmit(event){
        event.preventDefault();
        if(isSignUp){return};
        setIsSignUp(!isSignUp);
        
        const promise = signUp({
            name:form.name,
            email:form.email,
            password:form.password,
			img:form.img,
			user:form.user,
			cpf:form.cpf			
        })

        promise.then(response => signUpSucces(response));
        promise.catch(response => signUpError(response));
    }

	return (
		<Screen>
			<Title>Faça seu cadastro!</Title>
			<Form onSubmit={handleSubmit}>
				<Input type="text" required disabled={isSignUp ? true: false } onChange={(e) => setForm({...form, name: e.target.value})} placeholder="Nome" />
				<Input type="text" required disabled={isSignUp ? true: false } onChange={(e) => setForm({...form, img: e.target.value})} placeholder="Image/Url" />
				<Input type="text" required disabled={isSignUp ? true: false } onChange={(e) => setForm({...form, user: e.target.value})} placeholder="Usuário" />
				<Input type="text" required disabled={isSignUp ? true: false } onChange={(e) => setForm({...form, cpf: e.target.value})} placeholder="CPF" />
				<Input type="email" required disabled={isSignUp ? true: false } onChange={(e) => setForm({...form, email: e.target.value})} placeholder="E-mail" />
				<Input type="password" required disabled={isSignUp ? true: false } onChange={(e) => setForm({...form, password: e.target.value})} placeholder="Senha" />
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
