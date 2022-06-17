import { Button, Col, Dropdown, Form, Input, Menu, Row, Space } from "antd";
import React, { Fragment } from "react";
import styles from "./index.module.scss";
import NewLogo from "../../Assets/NewLogo.png";
import { BellFilled, DownOutlined } from "@ant-design/icons";
import FooterDesign from "../../components/FooterDesign/FooterDesign.jsx"

function Design() {
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              target={"_blank"}
              rel={"noopener noreferrer"}
              href={"https://www.antgroup.com"}
            >
              1st menu item
            </a>
          ),
        },
      ]}
    />
  );
  return (
    <Fragment>
      <Row justify="end">
        <Col xs={3} md={11} lg={2} xl={2} xxl={1}>
          <BellFilled className={styles.bell} />
        </Col>
        <Col xs={21} md={11} lg={8} xl={6} xxl={5} className={styles.HR}>
          <img src={NewLogo} alt="NewLogo" className={styles.Side} />
          <Dropdown overlay={menu}>
            <Space className={styles.welcome}>
              Welcome, HR Simplify
              <DownOutlined className={styles.line} />
            </Space>
          </Dropdown>
        </Col>
      </Row>
      <Row justify="center" >
        <Col xl={24} xxl={4}>
          <span className={styles.file}>Company</span>
          <p className={styles.Fill}>
            Fill in the respective fieldsfor your company profile.
          </p>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={20} md={21} lg={22} xl={22} xxl={22}>
          <div className={styles.compMain}>
            <div>
              <p className={styles.detail}>Company Details</p>
            </div>
            <Row justify="space-around">
              <Col xs={22} md={11} lg={11} xl={11} xxl={11}>
                <div>
                  <p className={styles.company}>Company Name*</p>
                </div>
                <Input
                  className={styles.put}
                  placeholder="Enter Company Name..."
                />
              </Col>
              <Col xs={22} md={11} lg={11} xl={11} xxl={11}>
                <div>
                  <p className={styles.company}>Bussiness Type*</p>
                </div>

                <Input
                  className={styles.put}
                  placeholder="Select Business Type..."
                />
              </Col>

              <Col
                xs={10}
                md={5}
                lg={5}
                xl={5}
                xxl={5}
                className={styles.industry}
              >
                <div>
                  <p className={styles.company}>Industry Type</p>
                </div>

                <Input
                  className={styles.put}
                  placeholder="Select Industry..."
                />
              </Col>
              <Col
                xs={10}
                md={5}
                lg={5}
                xl={5}
                xxl={5}
                className={styles.industry}
              >
                <div>
                  <p className={styles.company}>Financial Type*</p>
                </div>

                <Input className={styles.put} placeholder="Select Month..." />
              </Col>
              <Col
                xs={10}
                md={5}
                lg={5}
                xl={5}
                xxl={5}
                className={styles.industry}
              >
                <div>
                  <p className={styles.company}>Year Established*</p>
                </div>

                <Input className={styles.put} placeholder="Select Year..." />
              </Col>
              <Col
                xs={10}
                md={5}
                lg={5}
                xl={5}
                xxl={5}
                className={styles.industry}
              >
                <div>
                  <p className={styles.company}>Company Number*</p>
                </div>

                <Input className={styles.put} placeholder="Enter Number..." />
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
                    <p className={styles.company}>Company Email*</p>
                  </div>

                  <Input className={styles.put} placeholder="Enter Email..." />
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
                    <p className={styles.company}>GST Registered?*</p>
                  </div>

                  <Input className={styles.put} placeholder="Enter One..." />
                </Col>
              </Row>
            </Col>
            <Row justify="space-around">
              <Col
                xs={22}
                // sm={24}
                md={23}
                lg={13}
                xl={15}
                xxl={17}
                // className={styles.industry}
                className={styles.Paras}
              >
                <div>
                  <p className={styles.company}>GST Registered?*</p>
                </div>

                <Input className={styles.put} placeholder="Enter One..." />
              </Col>

              
                <Col xs={15} md={11} lg={4} xl={3} xxl={2} className={styles.Footer}>
                  <Button  size="large" shape="round" className={styles.brows}>
                    Browse File...
                  </Button>
                  
                </Col>
                <Col xs={15}  md={11} lg={4} xl={3} xxl={2} className={styles.Footer}>
                <Button size="large" shape="round" className={styles.remove}>
                    Remove
                  </Button>
                </Col>

            </Row>
          </div>
        </Col>
      </Row>
      <FooterDesign />
    </Fragment>
  );
}

export default Design;
