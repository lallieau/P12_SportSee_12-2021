import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo-sportsee.svg';

const Image = styled.img`
  width: 10rem;
  margin-top: 0.5rem;
`;

const NavGroup = styled.nav`
  background-color: ${({theme}) => theme.colors.black};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 5.688rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0rem 3rem;
`;

const NavLink = styled(Link)`
color:  ${({theme}) => theme.colors.white};
font-size: ${({theme}) => theme.fontSize.sm};
font-weight: ${({theme}) => theme.fontWeight.bold};
padding: 0.313rem;
text-decoration: none;

&:hover {
  color: ${({theme}) => theme.colors.primary};
`;

export const NavigationBar = () => {
  return (
    <NavGroup>
      <NavLink to="/">
        <Image className="logo" src={logo} alt="logo"></Image>
      </NavLink>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/profile">Profil</NavLink>
      <NavLink to="/settings">Réglage</NavLink>
      <NavLink to="/community">Communauté</NavLink>
    </NavGroup>
  );
};
