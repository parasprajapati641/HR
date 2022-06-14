import React, { Fragment } from "react";
import { Button, Col, Input, Radio, Row } from "antd";
import Boy from "../../Assets/Boy.png";
import { DownOutlined } from "@ant-design/icons";
import styles from "./index.module.scss";
import Lastfooter from "../Lastfooter/Lastfooter.jsx"

function Benz() {
  return (
    <Fragment>
      <Row justify="end">
        <Col sm={24} md={9} lg={7} xl={5} xxl={4} className={styles.header}>
          <img src={Boy} alt="boy" className={styles.main} />
          <p className={styles.welcome}>
            Welcome, Stanwin
            <DownOutlined className={styles.line} />
          </p>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} sm={24} md={24} lg={24} xxl={22} className={styles.within}>
          <span className={styles.leave}>Apply Leave</span>
          <p className={styles.apply}>
            Apply Leave within the company here. Fill in the respective fields
          </p>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={22} sm={20} md={22} lg={22} xxl={22}>
          <div className={styles.entitled}>
            <div>
              <p className={styles.details}>Entitled Leaves</p>
            </div>
            <Row justify="space-between">
              <Col xs={24} sm={22} md={12} lg={11} xxl={11}>
                <div className={styles.mainheader}>
                  <div className={styles.firstHeader}>
                    <p className={styles.annual}>Annual</p>
                  </div>
                  <div className={styles.secHeader}></div>
                  <div className={styles.thirdHeader}>
                    <p className={styles.text}>10 / 10</p>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={22} md={12} lg={11} xxl={11}>
                <div className={styles.mainheader}>
                  <div className={styles.firstHeader}>
                    <p className={styles.annual}>Annual</p>
                  </div>
                  <div className={styles.secHeader}></div>
                  <div className={styles.thirdHeader}>
                    <p className={styles.text}>10 / 10</p>
                  </div>
                </div>
              </Col>

              <Col xs={24} sm={22} md={12} lg={11} xxl={11}>
                <div className={styles.mainheader}>
                  <div className={styles.firstHeader}>
                    <p className={styles.annual}>Medical</p>
                  </div>
                  <div className={styles.secHeader}></div>
                  <div className={styles.thirdHeader}>
                    <p className={styles.text}>10 / 10</p>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={22} md={12} lg={11} xxl={11}>
                <div className={styles.mainheader}>
                  <div className={styles.firstHeader}>
                    <p className={styles.annual}>Medical</p>
                  </div>
                  <div className={styles.secHeader}></div>
                  <div className={styles.thirdHeader}>
                    <p className={styles.text}>10 / 10</p>
                  </div>
                </div>
              </Col>

              <Col xs={24} sm={22} md={12} lg={11} xxl={11}>
                <div className={styles.mainheader}>
                  <div className={styles.menuFirst}>
                    <p className={styles.hospital}>Hospitalistion</p>
                  </div>
                  <div className={styles.menu}></div>
                  <div className={styles.menuThird}>
                    <p className={styles.area}>10 / 10</p>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={22} md={12} lg={11} xxl={11}>
                <div className={styles.mainheader}>
                  <div className={styles.menuFirst}>
                    <p className={styles.hospital}>Hospitalistion</p>
                  </div>
                  <div className={styles.menu}></div>
                  <div className={styles.menuThird}>
                    <p className={styles.area}>10 / 10</p>
                  </div>
                </div>
              </Col>

              <Col xs={24} sm={22} md={12} lg={11} xxl={11}>
                <div className={styles.mainheader}>
                  <div className={styles.FirstComponent}>
                    <p className={styles.Child}>Child</p>
                  </div>
                  <div className={styles.SecComponent}></div>
                  <div className={styles.ThirdComponent}>
                    <p className={styles.check}>10 / 10</p>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={22} md={12} lg={11} xxl={11}>
                <div className={styles.mainheader}>
                  <div className={styles.FirstComponent}>
                    <p className={styles.Child}>Child</p>
                  </div>
                  <div className={styles.SecComponent}></div>
                  <div className={styles.ThirdComponent}>
                    <p className={styles.check}>10 / 10</p>
                  </div>
                </div>
              </Col>

              <Col xs={24} sm={22} md={12} lg={11} xxl={11}>
                <div className={styles.mainheader}>
                  <div className={styles.firstLoop}>
                    <p className={styles.Maternity}>Maternity</p>
                  </div>
                  <div className={styles.secLoop}></div>
                  <div className={styles.thirdLoop}>
                    <p className={styles.time}>10 / 10</p>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={22} md={12} lg={11} xxl={11}>
                <div className={styles.mainheader}>
                  <div className={styles.firstLoop}>
                    <p className={styles.Maternity}>Maternity</p>
                  </div>
                  <div className={styles.secLoop}></div>
                  <div className={styles.thirdLoop}>
                    <p className={styles.time}>10 / 10</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Lastfooter />
      <Row justify="center">
        <Col xs={9} md={10} lg={4} xl={3} xxl={2} className={styles.Footer}>
          <Button size="large" shape="round" className={styles.Cancel}>Cancel</Button>
        </Col>
        <Col xs={9} md={10} lg={4} xl={3} xxl={2} className={styles.Footer}>
          <Button size="large" shape="round" className={styles.Apply}>Apply</Button>
        </Col>
      </Row>
    </Fragment>
  );
}
export default Benz;