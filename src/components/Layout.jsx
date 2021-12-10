import {NavigationBar} from './Navigation/NavigationBar';
import PropTypes from 'prop-types';
import {SideNavigationBar} from './Navigation/SideNavigationBar';
import styled from 'styled-components';
import {SEO} from '../utils/style/SEO';

const Container = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: clamp(3.5rem, 8vw, 7.5rem) 1fr;
`;

export const Layout = ({children, title, isSideNavigation, description}) => {
  return (
    <div>
      <SEO title={title} description={description} />
      <NavigationBar />
      <Container>
        {isSideNavigation && <SideNavigationBar />}
        {children}
      </Container>
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isSideNavigation: PropTypes.bool,
};

Layout.defaultProps = {
  title: 'SportSee',
};
