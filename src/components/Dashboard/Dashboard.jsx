import { Button, Col, Popover, Row } from "antd";
import React, { Fragment, useEffect, useRef, useState } from "react";
import mxplayer from "../../Assets/mxplayer.svg";
import bannerGirl from "../../Assets/bannerGirl.png";
import school from "../../Assets/school.svg";
import demo from "../../Assets/demo.svg";
import world from "../../Assets/world.svg";
import login from "../../Assets/login.png";
import scholarship from "../../Assets/scholarship.png";
import course from "../../Assets/course.png";
import learning from "../../Assets/learning.png";
import woman from "../../Assets/woman.png";
import download from "../../Assets/download.png";
import styles from "./index.module.scss";
import Card from "../Card/Card.jsx";
import Maincard from "../Maincard/Maincard.jsx";
import Footer from "../Footer/Footer.jsx";
import { useNavigate } from "react-router-dom";

export const Dashboard = (props) => {
  const navigate = useNavigate();
  const commentRef = useRef();
  const cardRef = useRef();
  const mapRef = useRef();
  const studentRef = useRef();
  const footerRef = useRef();
  const [userDetails, setUserDetails] = useState("");
  useEffect(() => {
    const data = localStorage.getItem("user");
    console.log(data);
    setUserDetails(JSON.parse(data));
  }, []);

  const handleCourse = () => {
    console.log("123");
    commentRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handlePlatform = () => {
    cardRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleInnovation = () => {
    mapRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleResources = () => {
    studentRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleAbout = () => {
    footerRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  const content = (
    <div>
      <p onClick={() => logout()} className={styles.Popover}>
        logout
      </p>
    </div>
  );

  return (
    <Fragment>
      <div className={styles.headerMain}>
        <Row justify="center" className={styles.header}>
          <Col sm={24} xs={24} md={4} lg={12} xxl={2}>
            {/* <Button >Logout</Button> */}
            <div className={styles.eduo}>Eduo.</div>
          </Col>
          <Col xs={24} sm={24} md={4} lg={12} xxl={7} className={styles.about}>
            <span onClick={() => handleCourse()}>Courses</span>
            <span onClick={() => handlePlatform()}>Platforms</span>
            <span onClick={() => handleInnovation()}>Innovations</span>
            <span onClick={() => handleResources()}>Resources</span>
            <span onClick={() => handleAbout()}>About</span>
          </Col>
          <Col sm={24} xs={24} md={6} lg={12} xxl={4}>
            <div className={styles.demo}>
              <Popover content={content} placement="topRight">
                <Button
                  shape="round"
                  size="large"
                  className={styles.searchButton}
                >
                  {userDetails?.username}
                </Button>
              </Popover>
            </div>
          </Col>
        </Row>
        <Row justify="center">
          <Col sm={24} xs={24} md={4} lg={24} xxl={8}>
            <div>
              <div className={styles.content}>
                <h1 className={styles.headertxt}>
                  Take Your learning<br></br> To the Next Level.
                </h1>
                <span className={styles.Goin}>
                  Goin critical student insights when assossing while freeing
                  <br></br>
                  teachers from the poind of grading. simply add Eduo toyour
                  <br></br>
                  learning platform.
                </span>
                <div className={styles.paras}>
                  <div className={styles.complete}>
                    <Button
                      shape="round"
                      size="large"
                      className={styles.searchButton}
                    >
                      Request Demo
                    </Button>
                  </div>
                  <div className={styles.player}>
                    <img src={mxplayer} alt="mxplayer" />
                  </div>
                  <div className={styles.what}>
                    <span>What's Eduo?</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.group}>
              <div className={styles.school}>
                <img src={school} alt="school" className={styles.student} />
                <p className={styles.cam}>16,032</p>
                <span className={styles.camero}>Schools</span>
              </div>
              <div className={styles.one}>
                <img src={demo} alt="demo" className={styles.two} />
                <p className={styles.three}>10M</p>
                <span className={styles.four}>Users</span>
              </div>
              <div className={styles.A}>
                <img src={world} alt="world" className={styles.B} />
                <p className={styles.C}>119</p>
                <span className={styles.D}>Countries</span>
              </div>
            </div>
          </Col>
          <Col xs={24} md={4} lg={10} xxl={9}>
            <img src={bannerGirl} alt={"banner"} className={styles.contact} />
          </Col>
        </Row>
      </div>
      <Row className={styles.contentSec} justify="center">
        <Col sm={12} xs={12} md={6} lg={10} xxl={8}>
          <div className={styles.basic}>
            <img src={login} alt={"banner"} className={styles.login} />
          </div>
        </Col>
        <Col sm={12} xs={12} md={6} lg={10} xxl={9}>
          <div className={styles.debit}>
            <span className={styles.our}>
              Benefit from our online<br></br> learning
            </span>
            <div className={styles.do}>
              <img
                src={scholarship}
                alt="scholarship"
                className={styles.ship}
              />
              <div className={styles.does}>
                <span className={styles.online}>Online degrees</span>
                <p className={styles.get}>
                  Get online bachelor's degree from from top universities, apply
                  now.
                </p>
              </div>
            </div>
            <div className={styles.do}>
              <img src={course} alt="course" className={styles.ship} />
              <div className={styles.does}>
                <span className={styles.online}>Shorts courses</span>
                <p className={styles.get}>
                  Get online bachelor's degree from from top universities, apply
                  now.
                </p>
              </div>
            </div>
            <div className={styles.do}>
              <img src={learning} alt="learning" className={styles.ship} />
              <div className={styles.does}>
                <span className={styles.online}>Learn with experts</span>
                <p className={styles.get}>
                  Get online bachelor's degree from from top universities, apply
                  now.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div ref={commentRef}>
        <Maincard />
      </div>
      <Row justify="center" ref={cardRef}>
        <Col sm={24} xs={24} md={6} lg={12} xxl={10}>
          <div className={styles.firstContainer}>
            <div className={styles.sec}>
              <div>
                <h2 className={styles.become}>Become an instructor</h2>
              </div>
              <div className={styles.program}>
                <p className={styles.apply}>
                  We apply coaching psychology in an easy to understand &
                  practical <br></br>way. Uniquely designed programs for
                  individuals or teams.Book your<br></br> free initial
                  assessment! Personalised Approach.
                </p>
                <span className={styles.apply}>
                  APAC Accredited. Degree programs: Psychology, Counselling,
                  <br></br> Criminology, Social Work.
                </span>
              </div>
              <div>
                <Button type="primary" shape="round">
                  Click Here To Apply
                </Button>
              </div>
            </div>
          </div>
        </Col>
        <Col xxl={8}>
          <img src={woman} alt="woman" className={styles.man} />
        </Col>
      </Row>
      <div ref={mapRef}>
        <Card />
      </div>
      <Row justify="center">
        <Col sm={24} xs={24} md={6} lg={12} xxl={24}>
          <div className={styles.handle}>
            <h4 className={styles.popular}>Student Testimonial </h4>
            <span className={styles.mit}>
              Search Mit Machine Learning Course, Information from Trusted
              Internet Sources.
            </span>
            <p className={styles.info}>
              Useful & Relevant. Explore the Best Info Now.
            </p>
          </div>
        </Col>
      </Row>
      <Row justify="center" ref={studentRef}>
        <Col sm={24} xs={24} md={6} lg={12} xxl={8}>
          <div className={styles.justien}>
            <span className={styles.topic}>
              "A paragraph is a series of related sentences developing a central
              idea,
            </span>
            <br></br>
            <span className={styles.argument}>
              Paragraphs add one idea at a time to your broader argument.
            </span>
            <br></br>
            <span className={styles.sentence}>
              A paragraph consists of one or more sentences."
            </span>
            <div>
              <img src={download} alt="download" className={styles.later} />
              <h6 className={styles.doe}>Jenifer Doe</h6>
              <p className={styles.software}>Student</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row justify="center">
        <Col sm={24} xs={24} md={6} lg={12} xxl={24}>
          <div className={styles.in}>
            <h1 className={styles.touch}>Get In Touch</h1>
            <span className={styles.should}>
              A good contact form should include 1 or 2 fields. The phone number
              and perhaps a name.
            </span>
            <p className={styles.on}>So what stands out on this page.</p>
            <div>
              <div className={styles.put}>
                <div className={styles.address}>
                  <span className={styles.email}>Enter your email address</span>
                </div>
                <div className={styles.cribe}>
                  <span>Subscribe</span>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div ref={footerRef}>
        <Footer />
      </div>
    </Fragment>
  );
};
