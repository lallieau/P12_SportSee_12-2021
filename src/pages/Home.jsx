import PropTypes from 'prop-types';
import {Test} from '../components/Test';

export const Home = ({title}) => {
  return (
    <>
      <h1>{title}</h1>
      <Test title={'Test 1'} />
    </>
  );
};

Home.propTypes = {
  title: PropTypes.string.isRequired,
};

Home.defaultProps = {
  title: 'Mon titre par défaut',
};
