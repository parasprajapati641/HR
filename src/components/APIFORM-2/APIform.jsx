import { Button, Col, Input, Row } from 'antd'
import axios from "axios";
import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import styles from "./index.module.scss"

function APIform() {
    const [data, setData] = useState([])
    const [branchName, setBranchName] = useState("");
    const [checkInRadius, setCheckInRadius] = useState("");
    const [postal, setPostal] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");

    const postTableComment = async (e) => {
        try {
            const header = {
                'Content-Type': "application/json",
                'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJlbWFpbCI6ImtldmFsZ29uZGFsaXlhMzI5QGdtYWlsLmNvbSJ9LCJpYXQiOjE2NTU3OTQ1MzUsImV4cCI6MTc0MjE5NDUzNX0.8A595TzGRY4_Lr11KRD2MGBnM5V52Fpdc--jDHfGpq4"
            };
            const body = {
                compID: 1,
                branch_name: branchName,
                checkin_radius: checkInRadius,
                postal: postal,
                add_line1: address,
                country: country,
            }


            const data = await axios.post("https://ef71-2405-201-200c-ca65-35f8-eb11-9329-b6e7.in.ngrok.io/api/branch",
                body, { headers: header })

                .then((res) => {
                    console.log("res", res);
                })

            if (data) {
                setBranchName("");
                setCheckInRadius("");
                setPostal("");
                setAddress("");
                setCountry("");
            }

        } catch (err) {
            console.log("post", err);
        }
    }

    return (
        <div>
            <Row justify="center">
                <Col xl={22} className={styles.within}>
                    <span className={styles.view}>Add Branches</span>
                    <p className={styles.apply}>
                        Add branches for attandance taking within the company here. Fill in the respective fields.
                    </p>
                </Col>
            </Row>

            <Row justify="center">
                <Col xl={22}>
                    <div className={styles.entitled}>
                        <div>
                            <p className={styles.details}>Branch Details</p>
                        </div>
                        <Row justify="space-around">
                            <Col xl={11} className={styles.component}>
                                <div>
                                    <p className={styles.Country}>CompID</p>
                                </div>
                                <Input
                                    name='compId'
                                    className={styles.put}
                                    placeholder="Enter ID..."
                                />
                            </Col>
                            <Col xl={11} className={styles.component}>
                                <div>
                                    <p className={styles.Country}>Branch Name</p>
                                </div>
                                <Input
                                    name='branchName'
                                    className={styles.put}
                                    placeholder="Enter Branch Name..."
                                    onChange={(e) => setBranchName(e.target.value)}
                                />
                            </Col>

                            <Col xl={11} className={styles.component}>
                                <div>
                                    <p className={styles.Country}>Check In radius</p>
                                </div>
                                <Input
                                    name='checkInRadius'
                                    className={styles.put}
                                    placeholder="Enter Check In Radius..."
                                    onChange={(e) => setCheckInRadius(e.target.value)}
                                />
                            </Col>
                            <Col xl={11} className={styles.component}>
                                <div>
                                    <p className={styles.Country}>Postal Code</p>
                                </div>
                                <Input
                                    name='postal'
                                    className={styles.put}
                                    placeholder="Enter Postal Code..."
                                    onChange={(e) => setPostal(e.target.value)}
                                />
                            </Col>

                            <Col xl={11} className={styles.component}>
                                <div>
                                    <p className={styles.Country}>Address Line </p>
                                </div>
                                <Input
                                    name='address'
                                    className={styles.unit}
                                    placeholder="Enter Address..."
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </Col>
                            <Col xl={11} className={styles.component}>
                                <div>
                                    <p className={styles.Country}>Country</p>
                                </div>
                                <Input
                                    name='country'
                                    className={styles.unit}
                                    placeholder="Select Country..."
                                    onChange={(e) => setCountry(e.target.value)}
                                />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>

            <Row justify="center">
                <Col xl={3} className={styles.Footer}>
                    <Button
                        size="large"
                        shape="round"
                        className={styles.Apply}
                        htmlType="submit"
                    >
                        Submit
                    </Button>
                </Col>
                <Col xl={3} className={styles.Footer}>
                    <Button
                        size="large"
                        shape="round"
                        className={styles.Cancel}

                    >
                        Cancel
                    </Button>
                </Col>
            </Row>

        </div >
    )
}

export default APIform