import React, { Fragment } from "react";
import { Col, Input, Radio, Row } from "antd";
import Boy from "../../Assets/Boy.png";
import { DownOutlined } from "@ant-design/icons";
import styles from "./index.module.scss";

function Benz() {
  return (
    <Fragment>
      <Row justify="end">
        <Col sm={24} md={9} lg={5} xxl={4} className={styles.header}>
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

              {/* <Col xs={24} sm={22} md={12} lg={11} xxl={11}>
                <div className={styles.mainheader}>
                  <div className={styles.firstHeader}>
                    <p className={styles.annual}>Hospitalistion</p>
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
                    <p className={styles.annual}>Hospitalistion</p>
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
                    <p className={styles.annual}>Child</p>
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
                    <p className={styles.annual}>Child</p>
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
                    <p className={styles.annual}>Maternity</p>
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
                    <p className={styles.annual}>Maternity</p>
                  </div>
                  <div className={styles.secHeader}></div>
                  <div className={styles.thirdHeader}>
                    <p className={styles.text}>10 / 10</p>
                  </div>
                </div>
              </Col> */}
            </Row>
          </div>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={22} sm={20} md={22} lg={22} xxl={22}>
          <div className={styles.entitled}>
            <div>
              <p className={styles.details}>Entitled Leaves</p>
            </div>
            <Row justify="space-around">
              <Col xs={22} md={11} lg={11} xl={11} xxl={11}>
                <div>
                  <p className={styles.company}>Select Leave Type*</p>
                </div>
                <Input
                  className={styles.put}
                  placeholder="Select Leave Type..."
                />
              </Col>

              <Col xs={22} md={11} lg={11} xl={11} xxl={11}>
                <div>
                  <p className={styles.company}>Leave Start Date*</p>
                </div>
                <Input
                  className={styles.put}
                  placeholder="Enter Company Name..."
                />
              </Col>
            </Row>

            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
              <Row justify="space-around">
                <Col
                  xs={10}
                  sm={24}
                  md={10}
                  lg={10}
                  xl={10}
                  xxl={10}
                  className={styles.industry}
                >
                  <div>
                    <p className={styles.company}>Any half Days?</p>
                  </div>
                  <Radio value={1}>Yes</Radio>
                  <Radio value={2}>No</Radio>
                </Col>
                <Col
                  xs={10}
                  sm={24}
                  md={10}
                  lg={10}
                  xl={10}
                  xxl={10}
                  className={styles.industry}
                >
                  <div>
                    <p className={styles.company}>Half Days*</p>
                  </div>

                  <Input className={styles.put} placeholder="Select Days..." />
                </Col>

                <Col xs={22} md={11} lg={11} xl={20} xxl={11}>
                <div>
                  <p className={styles.company}>Select Leave Type*</p>
                </div>
                <Input
                  className={styles.put}
                  placeholder="Select Leave Type..."
                />
               </Col>
              </Row>
            </Col>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
}
export default Benz;