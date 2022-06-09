import { Col, Row } from "antd";
import React from "react";
import computer from "../../Assets/computer.png";
import corona from "../../Assets/corona.png";
import laptop from "../../Assets/laptop.png";
import lesson from "../../Assets/lesson.svg";
import video from "../../Assets/video.svg";
import styles from "./index.module.scss";

function cardMap() {
  const data = [
    {
      image: computer,
    },
    {
      image: corona,
    },
    {
      image: laptop,
    },
  ];

  return (
    <Row justify="center">
      <Col xs={20} sm={16} md={12} lg={8} xl={4} xxl={24}>
        <div>
          <div className={styles.mainContent}>
            <h2 className={styles.popular}>Our Popular Couses</h2>
            <span className={styles.mit}>
              Search Mit Machine Learning Course, Information from Trusted
              Internet Sources.
            </span>
            <p className={styles.info}>
              Useful & Relevant. Explore the Best Info Now.
            </p>
          </div>
        </div>
      </Col>
      {data.map((item, index) => {
        return (
          <Col xxl={6} key={index}>
            <div className={styles.boxContainer}>
              <div className={styles.magic}>
                <img src={item.image} alt="computer" className={styles.work} />
                <div className={styles.time}>
                  <div className={styles.master}>
                    <span className={styles.english}>English Master</span>
                  </div>
                  <div className={styles.rate}>
                    <span className={styles.star}>⭐ 4.3</span>
                  </div>
                </div>
                <div className={styles.to}>
                  <p className={styles.improve}>
                    Master English: How To Improve <br></br>Your English
                    Speaking
                  </p>
                </div>
                <div className={styles.buds}>
                  <div>
                    <img src={lesson} alt="lesson" className={styles.son} />
                    <p className={styles.graph}>10s lesson</p>
                  </div>
                  <div>
                    <img src={video} alt="video" className={styles.audio} />
                    <p className={styles.class}>online class</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
}

export default cardMap;
