import React from "react";
import { Menu } from "antd";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";

function Nav() {
  return (
    <div>
      <Menu mode={"horizontal"} defaultSelectedKeys={["mail"]}>
        <Menu.Item key={"mail"} icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>

        <Menu.SubMenu title={"Navigation Two - SubMenu"} key={"SubMenu"}>
          <Menu.Item key={"Two"} icon={<AppstoreOutlined />}>
            Navigation Two
          </Menu.Item>
          <Menu.Item key={"Three"} icon={<AppstoreOutlined />}>
            Navigation Three
          </Menu.Item>
          <Menu.Item key={"Four"} icon={<AppstoreOutlined />}>
            Navigation Four
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>
  );
}

export default Nav;
