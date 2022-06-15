import { Col, Row } from "antd";
import React from "react";
import bihance from "../../Assets/bihance.svg";
import internet from "../../Assets/internet.svg";
import facebook from "../../Assets/facebook.svg";
import styles from "./index.module.scss";

function Footer() {
  return (
    <Row justify="center">
      <Col xl={24} xxl={24}>
        <div className={styles.footerMain}>
          <div className={styles.detail}>
            <div className={styles.tempor}>
              <h1 className={styles.loream}>Eduo.</h1>

              <p className={styles.dolor}>
                Loream ipsum dolor sit amet,<br></br>consectetur adipiscing
                elit,sed do<br></br> eiusmod tempor incididunt.Loream<br></br>
                ipsum dolor sit
              </p>
 
              <div className={styles.imgmain}>
                <div>
                  <img src={bihance} alt="bihance" className={styles.footerimg} />
                  <img src={internet} alt="internet" className={styles.footerimg} />
                  <img src={facebook} alt="facebook" className={styles.footerimg} />
                </div>
              </div>
            </div>
            <div className={styles.tempor}>
              <h2 className={styles.Company}>Company</h2>
              <p className={styles.dolor}>About Us</p>
              <p className={styles.dolor}>Services</p>
              <p className={styles.dolor}>Company</p>
              <p className={styles.dolor}>Testimonial</p>
            </div>
            <div className={styles.tempor}>
              <h2 className={styles.Company}>Support</h2>
              <p className={styles.dolor}>Help Center</p>
              <p className={styles.dolor}>Tweet @ Us</p>
              <p className={styles.dolor}>Webians</p>
              <p className={styles.dolor}>Feedback</p>
            </div>
            <div className={styles.tempor}>
              <h2 className={styles.Company}>Links</h2>
              <p className={styles.dolor}>Courses</p>
              <p className={styles.dolor}>become teacher</p>
              <p className={styles.dolor}>Service</p>
              <p className={styles.dolor}>All in one</p>
            </div>
            <div className={styles.tempor}>
              <h2 className={styles.Company}>Contact us</h2>
              <p className={styles.dolor}>(880)112 345 678</p>
              <p className={styles.dolor}>support@ mail.com</p>
            </div>
          </div>
          <div className={styles.footerTxt}>
            <span>Copyright @ 2020 All rights Reserved - Eduo</span>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Footer;
