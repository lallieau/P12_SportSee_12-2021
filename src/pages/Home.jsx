import PropTypes from 'prop-types';
import {Layout} from '../components/Layout';
import {Test} from '../components/Test';

export const Home = ({title}) => {
  return (
    <Layout>
      <h1>{title}</h1>
      <Test title={'Test 1'} />
    </Layout>
  );
};

Home.propTypes = {
  title: PropTypes.string.isRequired,
};

Home.defaultProps = {
  title: 'Mon titre par défaut',
};
