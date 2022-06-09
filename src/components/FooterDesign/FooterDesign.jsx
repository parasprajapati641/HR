import { Button, Col, Input, Row } from "antd";
import React, { Fragment } from "react";
import styles from "./index.module.scss";

function Address() {
  return (
    <Fragment>
      <Row justify="center">
        <Col xs={20} md={21} lg={22} xl={22} xxl={22}>
          <div className={styles.compMain}>
            <div>
              <p className={styles.detail}>Billing Address</p>
            </div>
            <Row justify="space-around">
              <Col xs={22} md={11} lg={11} xl={11} xxl={11}>
                <div>
                  <p className={styles.company}>Postal Code</p>
                </div>
                <Input
                  className={styles.put}
                  placeholder="Enter Postal Code..."
                />
              </Col>
              <Col xs={22} md={11} lg={11} xl={11} xxl={11}>
                <div>
                  <p className={styles.company}>Address Line 1</p>
                </div>

                <Input className={styles.put} placeholder="Enter Address..." />
              </Col>

              <Col
                xs={22}
                md={11}
                lg={11}
                xl={11}
                xxl={11}
                className={styles.industry}
              >
                <div>
                  <p className={styles.company}>Address Line 2</p>
                </div>
                <Input
                  className={styles.put}
                  placeholder="Enter Building Name..."
                />
              </Col>
              <Col
                xs={22}
                md={11}
                lg={11}
                xl={11}
                xxl={11}
                className={styles.industry}
              >
                <div>
                  <p className={styles.company}>Address Line 3</p>
                </div>

                <Input className={styles.put} placeholder="Enter Unit No..." />
              </Col>
            </Row>

            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
              <Row justify="space-around">
                <Col
                  xs={22}
                  sm={22}
                  md={22}
                  lg={22}
                  xl={22}
                  xxl={22}
                  className={styles.Paras}
                >
                  <div>
                    <p className={styles.company}>Select Country</p>
                  </div>

                  <Input className={styles.put} placeholder="Select Country" />
                </Col>
              </Row>
            </Col>
          </div>
        </Col>
      </Row>
      <Row justify="center" >
        <Col xs={15} md={11} lg={4} xl={3} xxl={2} className={styles.Footer}>
          <Button size="large" shape="round" className={styles.brows}>
            Cancle
          </Button>
        </Col>
        <Col xs={15} md={11} lg={4} xl={3} xxl={2} className={styles.Footer}>
          <Button size="large" shape="round" className={styles.remove}>
            Submit
          </Button>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Address;
