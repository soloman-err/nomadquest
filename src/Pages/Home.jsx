import React from "react";
import Carousel from "../components/Carousel";
import PlaceInfo from "../components/PlaceInfo";

const Home = () => {
  return (
    <div className="flex items-center gap-20 justify-between py-20">
      <PlaceInfo></PlaceInfo>
      <Carousel></Carousel>
    </div>
  );
};

export default Home;
