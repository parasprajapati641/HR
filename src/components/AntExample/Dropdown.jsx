import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space, Menu } from "antd";
import MenuNav from "../AntExample/MenuNav.jsx";
import Headerpage from "../AntExample/Headerpage.jsx";
import StepAnt from "../AntExample/StepAnt.jsx"

function example() {
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
        {
          key: "2",
          label: (
            <a
              target={"_blank"}
              rel={"noopener noreferrer"}
              href={"https://www.aliyun.com"}
            >
              2nd menu item (disabled)
            </a>
          ),
          icon: <SmileOutlined />,
          disabled: true,
        },
        {
          key: "3",
          label: (
            <a
              target={"_blank"}
              rel={"noopener noreferrer"}
              href={"https://www.luohanacademy.com"}
            >
              3rd menu item (disabled)
            </a>
          ),
          disabled: true,
        },
        {
          key: "4",
          danger: true,
          label: "a danger item",
        },
      ]}
    />
  );

  return (
    <div>
      <h1>Dropdown</h1>
      <div>
        <Dropdown overlay={menu}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Click Me
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
      <br />
      
      <h1>PageHeader</h1>
      <Headerpage />
      <br />
      <h1>Menu</h1>
      <MenuNav />
      <br />
      <h1>Steps</h1>
      <StepAnt />
    </div>
  );
}

export default example;
