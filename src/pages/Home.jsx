import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo-sportsee.svg';
import {Layout} from '../components/Layout';

const Contents = styled.main`
  margin: 0 auto;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
`;
const Logo = styled.img``;
const Title = styled.h1``;

export const Home = () => {
  return (
    <Layout title={'SportSee - Accueil'}>
      <Contents>
        <Logo src={logo} alt="logo sportsee" />
        <Title>Bienvenue sur SportSee !</Title>
        <Link to="/user">Accéder au Dashboard</Link>
      </Contents>
    </Layout>
  );
};
