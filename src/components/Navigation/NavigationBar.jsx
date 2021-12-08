import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {colors} from '../../utils/style/colors';
import logo from '../../assets/logo-sportsee.svg';

const Image = styled.img`
  width: 11.25rem;
`;

const NavGroup = styled.nav`
  background-color: ${colors.secondary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  //position: fixed;
  width: 100%;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  padding: 0.625rem 3.125rem;
  color: ${colors.third};
  font-size: 1.25rem;
  font-weight: 500;
`;

export const NavigationBar = () => {
  return (
    <NavGroup>
      <NavLink to="/">
        <Image className="logo" src={logo} alt="logo"></Image>
      </NavLink>
      <NavLink to="">Accueil</NavLink>
      <NavLink to="">Profil</NavLink>
      <NavLink to="">Réglage</NavLink>
      <NavLink to="">Communauté</NavLink>
    </NavGroup>
  );
};
