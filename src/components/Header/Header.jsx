import { Button, Col, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

function Header() {
  const navigation = useNavigate();
  return (
    <Row>
      <Col xxl={2}>
        <Button
          onClick={() => {
            navigation("/");
          }}
          type="link"
        >
          login
        </Button>
      </Col>
      <Col xxl={2}>
        <Button
          onClick={() => {
            navigation("/dashboard");
          }}
          type="link"
        >
          dashboard
        </Button>
      </Col>
      <Col xxl={2}>
        <Button type="link">form</Button>
      </Col>
    </Row>
  );
}

export default Header;
