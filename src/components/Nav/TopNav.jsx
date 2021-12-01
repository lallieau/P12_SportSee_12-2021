import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {colors} from '../../utils/style/colors';
import logo from '../../assets/logo-sportsee.svg';

export const TopNav = () => {
  const Image = styled.img`
    width: 11.25rem;
  `;

  const NavGroup = styled.div`
    display: flex;
    background-color: ${colors.secondary};
    padding: 0px 30px;
    justify-content: space-between;
    align-items: center;
  `;

  const Link = styled(NavLink)`
    text-decoration: none;
    padding: 10px;
    color: ${colors.third};
    font-size: 1.5rem;
    font-weight: 500;
  `;

  return (
    <NavGroup>
      <Link to="/">
        <Image className="logo" src={logo} alt="logo"></Image>
      </Link>
      <Link to="/">Accueil</Link>
      <Link to="/profil">Profil</Link>
      <Link to="/setting">Réglage</Link>
      <Link to="/community">Communauté</Link>
    </NavGroup>
  );
};
