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
const Title = styled.h1``;

/**
 * Render Error 404 page
 * @returns {JSX}
 */
export const Error = () => {
  return (
    <>
      <Layout title={'SportSee'} description={'Page non trouvée'}>
        <Contents>
          <Logo src={logo} alt="logo sportsee" />
          <Title>Désolé, cette page n'existe pas encore !</Title>
          <Link to="/">Retourner à la page d'accueil</Link>
        </Contents>
      </Layout>
    </>
  );
};
