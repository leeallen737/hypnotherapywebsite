import React from "react";
import "./Home.css";
import { Link, } from 'react-router-dom';

const Home = () => {
  return (
    <main className="main-area">
      <div className="outer_frame_heading">
        <div className="my-heading">
          <div className="my-heading-width">
           <p>HOW CAN HYPNOTHERAPY HELP YOU?</p>
          </div>
        </div>
      </div>
      <div className="outside_frame">
        <div className="top">
          <div className="top1" />
          <div className="top2">
            <p>
              Want to be happier? Want to feel less stressed? Hypnotherapy can
              help. Hypnotherapy is a quick and powerful tool that can help with
              a wide multitude of things... Insomnia, Panic attacks Calm birth,
              Stress/anxiety Anger, Substance abuse ​Smoking, Phobias Exam
              Stress, Public speaking Depression, OCD Chronic pain, Trauma
              Hypnotherapy is a safe, enjoyable and effective way of changing
              your life for the better. Everyone has times of stress and
              difficulty in their lives and we all need help every now and then.
              Hypnotherapy is a great tool for helping us to get back on track
              and rebalance ourselves so we can enjoy life. So we can find
              peace.
            </p>
          </div>
        </div>
        <div className="bottom">
        <Link to="/contactform" href="/contactform">
          <div className="bottom_left">
            <div className="overlay">
            <div className="box_label">
              <p>CONTACT</p>
            </div>
            </div>
          </div>
          </Link>
          <Link to="/hypnotherapy" href="/hypnotherapy">
          <div className="bottom_centre">
          <div className="overlay">
            <div className="box_label">
              <p>HYPNOTHERAPY</p>
            </div>
            </div>
          </div>
          </Link>
          <Link to="/services" href="/services">
          <div className="bottom_right">
          <div className="overlay">
            <div className="box_label">
              <p>SERVICES</p>
            </div>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
