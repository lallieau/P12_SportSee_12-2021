import {NavigationBar} from './Navigation/NavigationBar';
import PropTypes from 'prop-types';
import {SideNavigationBar} from './Navigation/SideNavigationBar';
import styled from 'styled-components';
import {SEO} from '../utils/SEO';

/**
 * CSS for the component using styled.components
 */
const SIDE_NAVGATION_BAR_WIDTH = '7.5rem';
const Container = styled.main`
  display: ${({isSideNavigation}) => (isSideNavigation ? 'grid' : 'block')};
  grid-template-columns: ${({isSideNavigation}) =>
    isSideNavigation ? `${SIDE_NAVGATION_BAR_WIDTH} 1fr` : 'unset'};
`;

/**
 * Rendering of a global layout architecture, present on each page
 * @param {string} title
 * @param {description} description
 * @param {boolean} isSideNavigation
 * @param {object} children
 * @returns {JSX}
 */
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

// PropTypes
Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isSideNavigation: PropTypes.bool,
};

Layout.defaultProps = {
  title: 'SportSee',
};
