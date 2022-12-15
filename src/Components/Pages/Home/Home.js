import React from 'react';
import Buildingacc from '../Buildingacc';
import Services from '../Services/Services';
import HomeBanner from './HomeBanner';
import '../../../App.css'

const Home = () => {
    return (
      <div className="min-h-[100vh]">
        {/* home banner  */}
        <div className="w-4/5 mx-auto">
          <HomeBanner></HomeBanner>
        </div>

        {/* services  */}
        <div className=" py-12">
          <Services></Services>
        </div>

        <div >
          <Buildingacc></Buildingacc>
        </div>
      </div>
    );
};

export default Home;