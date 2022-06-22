import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Row, Col, Form, Input, Modal } from "antd"
import styles from "./index.module.scss"
import { DeleteTwoTone, SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Comment() {
    const [tableComment, setTableComment] = useState([]);
    const [data, setData] = useState([]);
    const navigate = useNavigate();


    const columns = [
        {
            title: "compId",
            dataIndex: "compID",
            key: "compID",
        },
        {
            title: "Branch Name",
            dataIndex: "branch_name",
            key: "branch_name",
        },
        {
            title: "Check In Radius",
            dataIndex: "checkin_radius",
            key: "checkin_radius",
        },
        {
            title: "Country",
            dataIndex: "country",
            key: "country",
        },
        {
            title: "Postal Code",
            dataIndex: "postal",
            key: "postal",
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            render: (text, record) => {
                return (
                    <div>
                        <DeleteTwoTone
                            onClick={() => {
                                deleteTableComment(record.id);
                                console.log("delete", record.id);
                            }}
                        />
                    </div>
                )
            }
        },

    ]


    const getTableComment = async () => {
        try {
            const header = {
                'Content-Type': "application/json",
                'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJlbWFpbCI6ImtldmFsZ29uZGFsaXlhMzI5QGdtYWlsLmNvbSJ9LCJpYXQiOjE2NTU3OTQ1MzUsImV4cCI6MTc0MjE5NDUzNX0.8A595TzGRY4_Lr11KRD2MGBnM5V52Fpdc--jDHfGpq4",
                'Access-Control-Allow-Origin': "*"

            };
            const data = await axios.get("https://51b8-2405-201-200c-ca65-4825-26a2-8eef-7ba.in.ngrok.io/api/branch", { headers: header  });

            console.log("get", data.data.list);
            setTableComment([...data.data.list]);
        }

        catch (err) {
            console.log("get", err);
        }
        console.log("table", tableComment);
    };


    

    const deleteTableComment = async (id) => {
        try {
            const header = {
                'Content-Type': "application/json",
                'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJlbWFpbCI6ImtldmFsZ29uZGFsaXlhMzI5QGdtYWlsLmNvbSJ9LCJpYXQiOjE2NTU3OTQ1MzUsImV4cCI6MTc0MjE5NDUzNX0.8A595TzGRY4_Lr11KRD2MGBnM5V52Fpdc--jDHfGpq4"
            };

            const data = await axios.delete(`https://51b8-2405-201-200c-ca65-4825-26a2-8eef-7ba.in.ngrok.io/api/branch/${id}`, { headers: header, mode: 'cors'  });

            console.log("dele213te", data.data);
            if (data.data.status == 200) {
                getTableComment()
            }
            // setTableComment([...data.data])

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
            const data = await axios.post("https://51b8-2405-201-200c-ca65-4825-26a2-8eef-7ba.in.ngrok.io/api/branch",

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
        getTableComment();
    }, []);



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
                    <Button
                        size="large"
                        shape="round"
                        className={styles.branchButton}
                        onClick={() => {
                            navigate("/apiform");
                        }}
                    >
                        Add Branch
                    </Button>
                </Col>
            </Row>

            <Row justify="center">
                <Col xl={23}>
                    <div className={styles.main}>
                        <Table
                            columns={columns}
                            dataSource={tableComment}
                            pagination={{ total: tableComment.length }}
                        />
                    </div>
                </Col>
            </Row>
        </>
    );

}

export default Comment;
