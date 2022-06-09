import React from "react";
import { PageHeader } from "antd";
import styles from "./Headerpage.module.scss";

function Header() {
  return (
    <div>
      <PageHeader
        title={"PageHeader"}
        onBack={() => null}
        subTitle={"this is a sub title"}
        className={styles.Header}
      />
    </div>
  );
}

export default Header;
