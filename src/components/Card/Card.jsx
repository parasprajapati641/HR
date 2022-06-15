import { Button, Col, Row } from "antd";
import React from "react";
import blended from "../../Assets/blended.png";
import distance from "../../Assets/distance.png";
import happy from "../../Assets/happy.png";
import train from "../../Assets/train.svg";
import styles from "./index.module.scss";

function Card() {
  return (
    <Row justify="center">
      <Col xl={24} xxl={24}>
        <div>
          <div className={styles.for}>
            <div className={styles.forDiv}>
              <h2 className={styles.innovation}>Our Innovations</h2>
              <span className={styles.smart}>
                Search Smart Manufacturing Solutions, Information from Trusted
                Internet Sources.
              </span>
              <p className={styles.result}>
                Services: Secure Search, No.1 Answers, Trusted Results.
              </p>
            </div>
            <div>
              <div className={styles.line}>
                <div className={styles.service}>
                  <img src={blended} alt="blended" className={styles.blen} />
                  <h2 className={styles.freed}>Hours Freed</h2>
                  <Button
                    size="middle"
                    shape="default"
                    type="primary"
                    className={styles.using}
                  >
                    Show me
                  </Button>
                </div>
                <div className={styles.service}>
                  <img src={distance} alt="distance" className={styles.real} />
                  <h2 className={styles.time}>Real Time Intelligence</h2>
                  <Button
                    size="middle"
                    shape="default"
                    type="primary"
                    className={styles.using}
                  >
                    Show me
                  </Button>
                </div>
                <div className={styles.service}>
                  <img src={happy} alt="happy" className={styles.real} />
                  <h2 className={styles.center}>student centered</h2>
                  <Button
                    size="middle"
                    shape="default"
                    type="primary"
                    className={styles.using}
                  >
                    Show me
                  </Button>
                </div>
              </div>
              <div className={styles.streak}>
                <div className={styles.service}>
                  <img src={train} alt="train" className={styles.real} />
                  <h2 className={styles.focus}>Mastery Focused</h2>
                  <Button
                    size="middle"
                    shape="default"
                    type="primary"
                    className={styles.using}
                  >
                    Show me
                  </Button>
                </div>
                <div className={styles.service}>
                  <img src={distance} alt="distance" className={styles.real} />
                  <h2 className={styles.any}>Any Platform</h2>
                  <Button
                    size="middle"
                    shape="default"
                    type="primary"
                    className={styles.using}
                  >
                    Show me
                  </Button>
                </div>
                <div className={styles.service}>
                  <img src={train} alt="train" className={styles.real} />
                  <h2 className={styles.focus}>Mastery Focused</h2>
                  <Button
                    size="middle"
                    shape="default"
                    type="primary"
                    className={styles.using}
                  >
                    Show me
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Card;
