import React from "react";
import "./Home.css";
// import background from "../../asset/bannerbackground.png";
const Home = () => {
  return (
    <div className="container-full home">
      <div className="container home-content">
        <h2 className="heading pt-5 fs-2">Best food waiting for your belly</h2>
        <form action="">
          <input className="rounded-pill ps-3" type="text" placeholder="search food items" />
          <input className="rounded-pill" type="submit" value="Search" />
          {/* <button>click me</button> */}
        </form>
      </div>
    </div>
  );
};

export default Home;
