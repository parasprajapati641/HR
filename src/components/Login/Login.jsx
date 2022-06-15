import { Button, Col, Form, Input, Popover, Row } from "antd";
import Password from "antd/lib/input/Password";
import useItems from "antd/lib/menu/hooks/useItems";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import logo from "./logo.png";

function Contant() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log(values);

    console.log(values.username);
    if (values.username !== "" && values.password !== "") {
      localStorage.setItem("user", JSON.stringify(values));
      navigate("/dashboard");
    } else {
      console.log("error");
    }
  };

  // const componentDidUpdate = () => {
  //   if (values) {
  //     window.onbeforeunload = () => true
  //   } else {
  //     window.onbeforeunload = undefined
  //   }
  // }

  return (
    <Row justify="center" className={styles.loginMain}>
      <Col xl={9}>
        <div className={styles.headerMain}>
          <img src={logo} alt="logo" />
        </div>
        
        <div className={styles.loginName}>
          <p>{"Welcome to <COMPANY> HR Application"}</p>
        </div>
       
        <Form name="login-form" onFinish={onFinish}>
          <Form.Item name="username">
            <Input
              name="username"
              placeholder="Username"
              required
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            />
          </Form.Item>

          <Form.Item name="password">
            <Input
              name="password"
              placeholder="Password"
              type="password"
              required
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            />
          </Form.Item>

          <Form.Item className={styles.buttonMain}>
            <div>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.loginButton}
              >
                Login
              </Button>
            </div>
          </Form.Item>
        </Form>
        <div className={styles.linkButton}>
          <Button
            type="link"
            // onClick={() => {
            //   onLogoutClick();
            // }}
          >
            <u>Forgot Password ?</u>
          </Button>
        </div>
      </Col>
    </Row>
  );
}

export default Contant;
