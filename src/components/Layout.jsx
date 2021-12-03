import {NavigationBar} from './Navigation/NavigationBar';
import PropTypes from 'prop-types';

// <SEO title="Dashboard" />
// HEAD component SEO
// HEAD title, meta desciptions, favicon ... https://github.com/nfl/react-helmet

export const Layout = ({children, title}) => {
  return (
    <div>
      {/* <SEO title="Dashboard" /> */}
      <NavigationBar />
      {children}
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
};

Layout.defaultProps = {
  title: 'SportSee',
};
