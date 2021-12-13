import {NavigationBar} from './Navigation/NavigationBar';
import PropTypes from 'prop-types';
import {SideNavigationBar} from './Navigation/SideNavigationBar';
import styled from 'styled-components';
import {SEO} from '../utils/SEO';
import Theme from '../utils/style/Theme';

const Container = styled.main``;

export const Layout = ({children, title, isSideNavigation, description}) => {
  return (
    <Theme>
      <SEO title={title} description={description} />
      <NavigationBar />
      {isSideNavigation ? (
        <Container
          style={{
            display: 'grid',
            gridTemplateColumns: '7.5rem 1fr',
          }}>
          <SideNavigationBar />
          {children}
        </Container>
      ) : (
        <Container>{children}</Container>
      )}
    </Theme>
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
