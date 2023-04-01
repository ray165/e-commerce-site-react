import React, { useState, useEffect } from "react";
import "../style/HomePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import BreedingImage from "../images/combo.png";
import OpenSeaIcon from "../images/opensea.png";
import ApesImg from "../images/apenoki.png";
import KrisImg from "../images/krisnoki.png";
import SpoonsImg from "../images/spoonoki.png";
import Form from 'react-bootstrap/Form';


const HomePage = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    AOS.init({});
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div id="homepage-full-bg">
        <div id="homepage-bg" className="full-viewport">
          <div className="homepage-container">
            {/* Title */}
            <div id="homepage-name" className="accented-text">
              <span
                id="j"
                className="homepage-typography"
                style={{ transform: `translateY(${offsetY * 0.15}px)` }}
              >
                J
              </span>
              <span
                id="o"
                className="homepage-typography"
                style={{ transform: `translateY(${offsetY * 0.25}px)` }}
              >
                O
              </span>
              <span
                id="k"
                className="homepage-typography"
                style={{ transform: `translateY(${offsetY * 0.35}px)` }}
              >
                K
              </span>
              <span
                id="e"
                className="homepage-typography"
                style={{ transform: `translateY(${offsetY * 0.45}px)` }}
              >
                E
              </span>
              <span
                id="y"
                className="homepage-typography"
                style={{ transform: `translateY(${offsetY * 0.25}px)` }}
              >
                Y
              </span>

              <span
                id="e2"
                className="homepage-typography"
                style={{ transform: `translateY(${offsetY * 0.45}px)` }}
              >
                E
              </span>
              <span
                id="n"
                className="homepage-typography"
                style={{ transform: `translateY(${offsetY * 0.25}px)` }}
              >
                N
              </span>
              <span
                id="o2"
                className="homepage-typography"
                style={{ transform: `translateY(${offsetY * 0.35}px)` }}
              >
                O
              </span>
              <span
                id="k2"
                className="homepage-typography"
                style={{ transform: `translateY(${offsetY * 0.4}px)` }}
              >
                K
              </span>
              <span
                id="i"
                className="homepage-typography"
                style={{ transform: `translateY(${offsetY * 0.5}px)` }}
              >
                I
              </span>
            </div>

            {/* OpenSea button */}
            <div
              id="buy-btn-div"
              style={{ transform: `translateY(${offsetY * 0.4}px)` }}
            >
              <Button
                variant="primary"
                id="buy-button"
                size="lg"
                href="https://opensea.io/collection/jokeyenoki-collection"
                target="_blank"
              >
                Buy on OpenSea
                <img src={OpenSeaIcon} id="open-sea-icon" />
              </Button>
            </div>
          </div>
        </div>

        {/* ----------------ABOUT---------------- */}
        <div id="about-bg" className="full-viewport">
          <div id="about" className="homepage-container page-width">
            <div className="text">
              <h1
                id="about-me-header"
                className="display-4"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                What is Jokey Enoki? <br />
              </h1>

              <div
                id="about-bullets"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <p>
                  Created by 3 Computer Systems Technology students based in
                  Vancouver, Canada 🇨🇦
                </p>

                <p>
                  Jokey Enoki is a collection of 512 tokens on the Polygon
                  blockchain, aimed to give enoki real solid characters.{" "}
                </p>
                <p>Come collect these fun-guys!</p>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------GROW---------------- */}
        <div id="grow-bg" className="full-viewport">
          <div id="grow" className="homepage-container page-width">
            <div className="text">
              <h1
                id="about-me-header"
                className="display-4"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                {/* add tag for coming soon */}
                Grow your Jokey Enoki
                <br />
              </h1>

              <div
                id="about-bullets"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <p>
                  Enoki aren't born to be alone. <br></br>Grow your enoki so
                  that it can form a cluster. <br></br>
                </p>

                <p>
                  To grow a cluster, you would need: <br></br>
                </p>
                <ul>
                  <li>
                    At least 2 individual enokis. OR an existing cluster with 1
                    individual enoki that wants to join.
                  </li>
                  <li>
                    1 growth log for every enoki that wants to join the cluster
                  </li>
                </ul>
                <img src={BreedingImage} id="breeding-img" />
              </div>
            </div>
          </div>
        </div>

        {/* ----------------ROADMAP---------------- */}
        <div id="roadmap-bg" className="full-viewport">
          <div id="roadmap" className="homepage-container page-width">
            <div className="text">
              <h1
                id="about-me-header"
                className="display-4"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                Roadmap <br />
              </h1>

              <div data-aos="fade-down" data-aos-duration="1000">
                <VerticalTimeline>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                      paddingBottom: "3px",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                  >
                    <h5 className="vertical-timeline-element-subtitle, roadmap-items">
                      Creation of individual jokey enokis
                    </h5>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                  >
                    <h5 className="vertical-timeline-element-subtitle roadmap-items">
                      Create growth logs
                    </h5>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                  >
                    <h5 className="vertical-timeline-element-subtitle roadmap-items">
                      Allow enoki cluster formation
                    </h5>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    iconStyle={{
                      background: "rgb(16, 204, 82)",
                      color: "#fff",
                    }}
                  />
                </VerticalTimeline>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------CONTACT US FORM---------------- */}


        {/* ----------------TEAM---------------- */}
        <div id="team-bg" className="full-viewport">
          <div id="team" className="homepage-container page-width">
            <div className="text">
              <h1
                id="about-me-header"
                className="display-4"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                About the creators <br />
              </h1>

              <div
                id="about-bullets"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <p>April Enoki</p>
                <img src={ApesImg} className="founder-img" />
                <ul>
                  <li>Daytime: Fetus software developer</li>
                  <li>Night-time: Just chilling</li>
                </ul>
                <br></br>

                <p>Kris Enoki</p>
                <img src={KrisImg} className="founder-img" />
                <ul>
                  <li>Daytime: Napping, sleeping, talking</li>
                  <li>Night-time: Coding, feeling confused</li>
                </ul>
                <br></br>

                <p>Ray Enoki</p>
                <img src={SpoonsImg} className="founder-img" />
                <ul>
                  <li>Daytime: Software developer, ham connoisseur</li>
                  <li>Night-time: An exotic dancer</li>
                </ul>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;