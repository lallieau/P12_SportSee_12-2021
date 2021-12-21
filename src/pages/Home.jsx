import styled from 'styled-components';
import logo from '../assets/logo-sportsee.svg';
import {Link} from 'react-router-dom';
import {Layout} from '../components/Layout';

/**
 * CSS for the component using styled.components
 */
const Contents = styled.main`
  margin: 0 auto;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
`;

const Logo = styled.img``;
const Title = styled.h1`
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${({theme}) => theme.fontSize.md};
  font-weight: ${({theme}) => theme.fontWeight.extraBold};
`;
const Links = styled(Link)`
color: ${({theme}) => theme.colors.secondary};
font-size: ${({theme}) => theme.fontSize.sm};
font-weight: ${({theme}) => theme.fontWeight.bold};
padding: 0.913rem;
margin: 1.913rem;
border-radius: 5px;
background-color: ${({theme}) => theme.colors.lightBackground};
text-decoration: none;
  &:hover {
    background-color: ${({theme}) => theme.colors.secondary};
    color: ${({theme}) => theme.colors.white}`;

const CardWrapper = styled.div`
  display: flex;
`;

/**
 * Renders the "Home page" with a user link to access their dashboard
 * @returns {JSX}
 */
export const Home = () => {
  return (
    <>
      <Layout
        title={'Accueil'}
        description={"Bienvenue sur la page d'accueil de SportSee"}>
        <Contents>
          <Logo src={logo} alt="logo sportsee" />
          <Title>Bienvenue sur SportSee !</Title>
          <CardWrapper>
            <Links to="/user/12">Dashboard de Karl</Links>
            <Links to="/user/18">Dashboard de Cecilia</Links>
          </CardWrapper>
        </Contents>
      </Layout>
    </>
  );
};
