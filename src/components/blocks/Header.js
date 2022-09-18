import styled from "styled-components";

function Header({ userName, setUserName }) {
	//se "em homescreen" entao title mostra "olá {name}, bem-vindo(a) ao DGS." + MENU;
	//se "em productscreen" entao title mostra "{Nome do Jogo} - @{username}" + MENU;
	return (
		<Block>
			<Title>
				Olá {userName}, <br />
				bem-vindo(a) ao DGS.
			</Title>
			<Menu>
				<ion-icon name="menu"></ion-icon>
			</Menu>
		</Block>
	);
}

const Block = styled.div`
	width: 100vw;
	height: 70px;
	padding: 0 30px;

	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	z-index: 1;

	top: 0;

	background-color: #ff4791;

	div {
		font-size: 100px;
	}
`;

const Title = styled.h1`
	font-size: 20px;
	font-weight: bold;
	line-height: 25px;
`;

const Menu = styled.div`
	display: flex;
	align-items: center;

	ion-icon {
		font-size: 55px;
	}
`;

export default Header;
