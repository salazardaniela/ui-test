import React from 'react';
import PropTypes from 'prop-types';

// Components
import NavBar from '../../components/nav-bar';

const Home = ({ name, ...props }) => {
  console.log(props, name);

  return (
    <div>
      <NavBar />
    </div>
  );
};

Home.propTypes = {
  name: PropTypes.string,
};

Home.defaultProps = {
  name: '',
};

Home.displayName = 'Home Page';

export default Home;
