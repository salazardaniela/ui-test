import React from 'react';
import './home.scss';

// Components
import NavBar from '../../components/nav-bar';
import Banner from '../../components/banner';
import InfoBox from '../../components/info-box';
import Headline from '../../components/headline';
import Candidate from '../../components/candidate';

// MockData
import candidatesMock from '../../mockData/candidates.json'

const Home = () => {
  return (
    <div data-testid="home-page">
      <NavBar />
      <Banner />
      <div className="main-wrapper">
        <InfoBox />
        <Headline title="Previous Rulings" />
        <div className="grid-candidates">
          {candidatesMock.items.map((character, idx) => (
            <Candidate key={`character-${idx}`} item={character} />
          ))}
        </div>
      </div>
    </div>
  );
};

Home.displayName = 'Home Page';

export default Home;
