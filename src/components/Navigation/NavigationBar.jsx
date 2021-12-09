import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {colors} from '../../utils/style/colors';
import logo from '../../assets/logo-sportsee.svg';

const Image = styled.img`
  margin-left: 1rem;
  margin-top: 1.75rem;
  width: clamp(7rem, 12vw, 10rem);

  @media screen and (min-width: 600px) {
    margin-left: 0rem;
    margin-top: 0.5rem;
  }
`;

const NavGroup = styled.nav`
  background-color: ${colors.secondary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 5.688rem;

  @media screen and (min-width: 600px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0rem 3rem;
  }
`;

const NavLink = styled(Link)`
color:  ${colors.third};
font-size: clamp(1rem, 1.667vw, 1.5rem);
font-weight: 500;
padding: 0.313rem;
text-decoration: none;

&:hover {
  color: ${colors.primary};
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
