import React, { useState } from "react";
import "./section.scss";
import egg from "../../component/section/images/image-transform.jpg";
import standout from "../../component/section/images/image-stand-out.jpg";
// import graphics from "../../component/section/images/image-graphic-design.jpg";
// import photog from "../../component/section/images/image-photography.jpg";
import sEgg from "../../component/section/images/egg.jpg";
import sGlass from "../../component/section/images/glass.jpg";

const Section = (props) => {
  const [isMobiles, setIsMobiles] = useState(false);
  return (
    <>
      {/* First Hero Section */}
      <div className="section">
        <div className="colOne">
          <div className="col1">
            <h1>Transform your brand</h1>
            <p>
              We are a full service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you
            </p>
            <a href="#learn" className="learn">
              Learn more
            </a>
          </div>
        </div>
        <div className="colOne-img">
          {isMobiles ? (
            <img src={sEgg} alt="egg" />
          ) : (
            <img src={egg} alt="egg" />
          )}
        </div>
      </div>
      <div className="section2">
        <div className="colOne-img img2">
          {isMobiles ? (
            <img src={sGlass} alt="standout" />
          ) : (
            <img src={standout} alt="standout" />
          )}
        </div>

        {/* Second Hero Section */}
        <div className="colOne">
          <div className="col1">
            <h1>Stand out to the right audience </h1>
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we'll build and
              extend your brand in digital places.
            </p>
            <a href="#learn" className="stand">
              Learn more
            </a>
          </div>
        </div>
      </div>

      {/* Third Hero Section */}
      <div className="section3">
        <div className="colOne-img grape">
          <div className="grape-text">
            <h1>Graphic Design</h1>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients'
              attention.
            </p>
          </div>
        </div>
        <div className="colOne-img orange">
          <div className="orange-text">
            <h1>Photography</h1>
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
