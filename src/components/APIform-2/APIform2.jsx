import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Row, Col, Form, Input, Modal } from "antd"
import styles from "./api.module.scss"
import { SearchOutlined } from "@ant-design/icons";

function Comment() {

    const columns = [
        {
            title: "Branch Name",
            dataIndex: "branchname",
            key: "branchname",
        },
        {
            title: "Check In Redius",
            dataIndex: "checkinredius",
            key: "checkinredius",
        },
        {
            title: "Country",
            dataIndex: "country",
            key: "country",
        },
        {
            title: "Postal Code",
            dataIndex: "postalcode",
            key: "postalcode",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
        },

    ]

    const dataSource = [
        {
            key: "1",
            branchname: "paras",
            checkinredius: "prajapati",
            country: "india",
            postalcode: "loop",
            address: "avadh viceroy"
        },
        {
            key: "2",
            branchname: "paras",
            checkinredius: "prajapati",
            country: "india",
            postalcode: "loop",
            address: "avadh viceroy"
        },
        {
            key: "3",
            branchname: "paras",
            checkinredius: "prajapati",
            country: "india",
            postalcode: "loop",
            address: "avadh viceroy"
        },
        {
            key: "4",
            branchname: "paras",
            checkinredius: "prajapati",
            country: "india",
            postalcode: "loop",
            address: "avadh viceroy"
        }
    ]

    const [tableComment, setTableComment] = useState([]);
    const [data, setData] = useState([]);

    const getTableComment = async () => {
        try {
            const header = {
                'Content-Type': "application/json",
                'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJlbWFpbCI6ImtldmFsZ29uZGFsaXlhMzI5QGdtYWlsLmNvbSJ9LCJpYXQiOjE2NTU3OTQ1MzUsImV4cCI6MTc0MjE5NDUzNX0.8A595TzGRY4_Lr11KRD2MGBnM5V52Fpdc--jDHfGpq4"
            };
            const data = await axios.get("https://d5a4-2405-201-200c-ca31-a15d-8417-eb09-e56a.in.ngrok.io/api/branch", { headers: header });

            console.log("get", data.data);
            setTableComment([...data.data]);
        }

        catch (err) {
            console.log("get", err);
        }
    };


    const postTableComment = async () => {
        try {
            const header = {
                'Content-Type': "application/json",
                'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJlbWFpbCI6ImtldmFsZ29uZGFsaXlhMzI5QGdtYWlsLmNvbSJ9LCJpYXQiOjE2NTU3OTQ1MzUsImV4cCI6MTc0MjE5NDUzNX0.8A595TzGRY4_Lr11KRD2MGBnM5V52Fpdc--jDHfGpq4"
            };
            const body = {
                compID: 1,
                branch_name: "loop",
                checkin_radius: "656591",
                postal: 395006,
                add_line1: "surat",
                country: "india"
            }
            const data = await axios.post("https://d5a4-2405-201-200c-ca31-a15d-8417-eb09-e56a.in.ngrok.io/api/branch",

                body, { headers: header }, {
            })
                .then((res) => {
                    console.log("res", res);
                })
            console.log("post", data.data);

        } catch (err) {
            console.log("post", err);
        }
    }

    const deleteTableComment = async () => {
        try {
            const header = {
                'Content-Type': "application/json",
                'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJlbWFpbCI6ImtldmFsZ29uZGFsaXlhMzI5QGdtYWlsLmNvbSJ9LCJpYXQiOjE2NTU3OTQ1MzUsImV4cCI6MTc0MjE5NDUzNX0.8A595TzGRY4_Lr11KRD2MGBnM5V52Fpdc--jDHfGpq4"
            };

            const data = await axios.delete("https://d5a4-2405-201-200c-ca31-a15d-8417-eb09-e56a.in.ngrok.io/api/branch", { headers: header });

            console.log("delete", data.data);
            setTableComment([...data.data])
        } catch (err) {
            console.log("delete", err);
        }
    }

    const putTableComment = async () => {
        try {
            const header = {
                'Content-Type': "application/json",
                'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJlbWFpbCI6ImtldmFsZ29uZGFsaXlhMzI5QGdtYWlsLmNvbSJ9LCJpYXQiOjE2NTU3OTQ1MzUsImV4cCI6MTc0MjE5NDUzNX0.8A595TzGRY4_Lr11KRD2MGBnM5V52Fpdc--jDHfGpq4"
            };
            const body = {
                compID: 1,
                branch_name: "loopcode",
                checkin_radius: "656591",
                postal: 395006,
                add_line1: "surat",
                country: "india"

            }
            const data = await axios.post("https://d5a4-2405-201-200c-ca31-a15d-8417-eb09-e56a.in.ngrok.io/api/branch",

                body, { headers: header }, {
            })
                .then((res) => {
                    console.log("res", res);
                })
            console.log("put", data.data);

        } catch (err) {
            console.log("put", err);
        }
    }

    useEffect(() => {
        // getTableComment();
        // deleteTableComment();
        // postTableComment();
        // putTableComment();
    }, []);

    const handleDeleteClick = (index) => {
        const newData = tableComment;
        console.log("paras", index);
        newData.splice(index, 1);
        setData([...newData]);
    };

    return (
        <>
            <Row justify="center">
                <Col xl={22} className={styles.within}>
                    <span className={styles.view}>Branch Name</span>
                    <p className={styles.apply}>
                        Manage branches within the company here. Click on the respective button to edit or view the details
                    </p>
                </Col>
            </Row>

            <Row justify="space-around">
                <Col xl={11}  >
                    <Col xl={20} className={styles.Paras}>
                        <Input prefix={<SearchOutlined />} placeholder="Search Query..." />
                    </Col>
                </Col>
                <Col xl={5} className={styles.headerButton}>
                    <Button size="large" shape="round" className={styles.deleteButton}>
                        Mass Delete
                    </Button>
                </Col>
                <Col xl={5} className={styles.headerButton}>
                    <Button size="large" shape="round" className={styles.branchButton}>
                        Add Branch
                    </Button>
                </Col>
            </Row>

            <Row justify="center">
                <Col xl={23}>
                    <div className={styles.main}>
                        <Table
                            columns={columns}
                            dataSource={dataSource}
                        />
                    </div>
                </Col>
            </Row>
        </>
    );

}

export default Comment;
