import React, { Fragment } from "react";
import styles from "./index.module.scss";
import { Button, Col, Input, Radio, Row } from "antd";



function last() {
    return (
        <Fragment>

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

                            <Col
                                xs={10}
                                md={5}
                                lg={5}
                                xl={5}
                                xxl={5}
                                className={styles.industry}
                            >
                                <div>
                                    <p className={styles.company}>Any Half Days?</p>
                                </div>

                                <Radio value={1}>Yes</Radio>
                                <Radio value={2}>No</Radio>
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
                                    <p className={styles.company}>Half Day</p>
                                </div>

                                <Input className={styles.put} placeholder="Select Days" />
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
                                    <p className={styles.company}>Reason For Leave*</p>
                                </div>

                                <Input className={styles.put} placeholder="Select Leave..." />
                            </Col>
                        </Row>
                        <Row justify="space-around">
                            <Col
                                xs={22}
                                // sm={24}
                                md={23}
                                lg={13}
                                xl={13}
                                xxl={17}
                                // className={styles.industry}
                                className={styles.Paras}
                            >
                                <div>
                                    <p className={styles.company}>GST Registered?*</p>
                                </div>

                                <Input className={styles.put} placeholder="Enter One..." />
                            </Col>


                            <Col xs={10} md={11} lg={4} xl={4} xxl={2} className={styles.Footer}>
                                <Button size="large" shape="round" className={styles.brows}>
                                    Browse File
                                </Button>

                            </Col>
                            <Col xs={10} md={11} lg={4} xl={4} xxl={2} className={styles.Footer}>
                                <Button size="large" shape="round" className={styles.remove}>
                                    Remove
                                </Button>
                            </Col>

                        </Row>

                    </div>
                </Col>
            </Row>
        </Fragment>
    );
}
export default last;