import React from "react";
import logo from "../../images/logo.png";
import buffgreed from "../../images/buffgreed.jpg";
import giftgreed from "../../images/giftgreed.jpg";
import greedjar from "../../images/greedjar.jpg";
import darkmagican from "../../images/darkmagican.jpg";
import greed from "../../images/greed.jpg";
import greedblush from "../../images/greedblush.jpg";
import "./home.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-header">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Welcome to the Yu-Gi-Oh! Card Store!</h1>
      </div>
      <div className="home-about">
        <p>
          Discover, buy and trade your favorite Yu-Gi-Oh! cards, from the
          classic Pot of Greed to the powerful Dark Magician. Join the community
          of duelists and start building your ultimate deck!
        </p>
      </div>
      <div className="home-images">
        <img src={buffgreed} alt="Buff Greed" className="buff-greed" />
        <img src={giftgreed} alt="Gift Greed" className="gift-greed" />
        <img src={greedjar} alt="Greed Jar" className="greed-jar" />
      </div>
      <div className="home-images">
        <img src={darkmagican} alt="Dark Magican" className="dark-magican" />
        <img src={greed} alt="Greed" className="greed" />
        <img src={greedblush} alt="Greed Blush" className="greed-blush" />
      </div>
      <div className="home-footer">
        <p>
          &copy; {new Date().getFullYear()} Yu-Gi-Oh! Card Store. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Home;
