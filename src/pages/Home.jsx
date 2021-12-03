// import PropTypes from 'prop-types';
// import {Test} from '../components/Test';
import {Link} from 'react-router-dom';
import logo from '../assets/logo-sportsee.svg';
import {useEffect} from 'react';

export const Home = () => {
  useEffect(() => {
    document.title = `Accueil`;
  });

  return (
    <>
      <img src={logo} alt="logo sportsee" />
      <h1>Bienvenue sur SportSee !</h1>
      <Link to="/user">Accéder au Dashboard</Link>
    </>
  );
};

// Home.propTypes = {
//   title: PropTypes.string.isRequired,
// };

// Home.defaultProps = {
//   title: 'Mon titre par défaut',
// };
