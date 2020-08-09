import React from 'react';

// Components
import NavBar from '../../components/nav-bar';
import Banner from '../../components/banner';
import InfoBox from '../../components/info-box';
import Headline from '../../components/headline';

const Home = () => {
  return (
    <div data-testid="home-page">
      <NavBar />
      <Banner />
      <div className="main-wrapper">
        <InfoBox />
        <Headline title="Previous Rulings" />
      </div>
    </div>
  );
};

Home.displayName = 'Home Page';

export default Home;
