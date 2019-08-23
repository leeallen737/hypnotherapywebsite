import React from "react";
import "./Hypnotherapy.css";
import { Link } from "react-router-dom";

const Hypnotherapy = () => {
  return (
    <main className="main-area">
      <div className="outer_frame_heading">
        <div className="my-heading">
          <div className="my-heading-width">
            <p>WHAT IS HYPNOTHERAPY?</p>
          </div>
        </div>
      </div>
      <div className="outside_frame">
        <div className="top">
          <div className="top2">
            <p>
              Hypnotherapy is a combination of talking therapies and hypnosis.
              The hypnosis used in Hypnotherapy is a state of focused attention
              or trance similar to meditation or daydreaming. When in this state
              we have access to the subconcious mind. Trance is a very ordinary,
              we go into trance many times a day. We go into trance when driving
              the car, when out for a run, when watching our favourite tv show.
              The trance you go into during a session is a state of deep
              relaxation and a wonderful feeling. Hypnotherapy is recognised by
              the medical profession as a stand alone therapy that can help with
              many mental and physical disorders. I am a Clinical Solution
              Focused Hypnotherapist. Solution Focused Hypnotherapy is a form of
              therapy that has evolved as the result of huge amounts of research
              to discover how people can really move forward with their lives in
              the shortest time possible.
            </p>
          </div>
          <div className="brain_pic" />
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

export default Hypnotherapy;
