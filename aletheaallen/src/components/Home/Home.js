import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section>
        <div className="outside_frame">
          <div className="top">
            <div className="top1">top 1</div>
            <div className="top2">top 2</div>
          </div>
          <div className="bottom">
            <div className="bottom_left">bottom left</div>
            <div className="bottom_centre">bottom middle</div>
            <div className="bottom_right">bottom right</div>
          </div>
        </div>
    </section>
  );
};

export default Home;
