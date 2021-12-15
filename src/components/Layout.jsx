import {NavigationBar} from './Navigation/NavigationBar';
import PropTypes from 'prop-types';
import {SideNavigationBar} from './Navigation/SideNavigationBar';
import styled from 'styled-components';
import {SEO} from '../utils/SEO';

const SIDE_NAVGATION_BAR_WIDTH = '7.5rem';
const Container = styled.main`
  display: ${({isSideNavigation}) => (isSideNavigation ? 'grid' : 'block')};
  grid-template-columns: ${({isSideNavigation}) =>
    isSideNavigation ? `${SIDE_NAVGATION_BAR_WIDTH} 1fr` : 'unset'};
`;

export const Layout = ({children, title, isSideNavigation, description}) => {
  return (
    <>
      <SEO title={title} description={description} />
      <NavigationBar />
      {isSideNavigation ? (
        <Container isSideNavigation>
          <SideNavigationBar />
          {children}
        </Container>
      ) : (
        <Container>{children}</Container>
      )}
    </>
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
