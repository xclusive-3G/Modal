import React, { useState, useEffect } from "react";
import emily from "../testimonials/logos/image-emily.jpg";
import Thomas from "../testimonials/logos/image-thomas.jpg";
import Jenny from "../testimonials/logos/image-jennie.jpg";
import bottle from "../testimonials/logos/image-gallery-milkbottles.jpg";
import cone from "../testimonials/logos/image-gallery-cone.jpg";
import orange from "../testimonials/logos/image-gallery-orange.jpg";
import sugar from "../testimonials/logos/image-gallery-sugarcubes.jpg";
import mBottle from "../testimonials/mobile-images/image-gallery-milkbottles.jpg";
import mCone from "../testimonials/mobile-images/image-gallery-cone.jpg";
import mOrange from "../testimonials/mobile-images/image-gallery-orange.jpg";
import mSugar from "../testimonials/mobile-images/image-gallery-sugar-cubes.jpg";

import "./testimonials.scss";

const Testimonials = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 520 && window.innerWidth >= 310) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="main-body">
      <div className="testimony-wrapper">
        <h3>Client Testimonials</h3>
        <div className="portfolio">
          {/* client1 */}
          <div className="clients">
            <img src={emily} alt="emily" />
            <p>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <h4>Emily R.</h4>
            <h6>Marketing Director</h6>
          </div>

          {/* client2 */}
          <div className="clients">
            <img src={Thomas} alt="emily" />
            <p>
              Sunnyside's enthusiasm coupled with their keen interest in our
              brand's success made it a satisfying and enjoyable experience.
            </p>
            <h4>Thomas S.</h4>
            <h6>Chief Operating Officer</h6>
          </div>

          {/* client3 */}
          <div className="clients">
            <img src={Jenny} alt="emily" />
            <p>
              Incredible end result! Our sales increased over 40% when we worked
              with Sunnyside. Highly recommended!
            </p>
            <h4>Jennie F.</h4>
            <h6>Business Owner</h6>
          </div>
        </div>
      </div>

      {/* Gallery display */}
      <div className="gallery">
        <div className="grid-item">
          {isMobile ? (
            <img src={mBottle} alt="bottle" />
          ) : (
            <img src={bottle} alt="bottle" />
          )}
        </div>
        <div className="grid-item">
          {isMobile ? (
            <img src={mOrange} alt="orange" />
          ) : (
            <img src={orange} alt="orange" />
          )}
        </div>
        <div className="grid-item">
          {isMobile ? (
            <img src={mCone} alt="cone" />
          ) : (
            <img src={cone} alt="cone" />
          )}
        </div>
        <div className="grid-item">
          {isMobile ? (
            <img src={mSugar} alt="sugar" />
          ) : (
            <img src={sugar} alt="sugar" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
