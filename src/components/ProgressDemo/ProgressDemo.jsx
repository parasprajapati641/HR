import React, { useState } from "react";
import { Input, Progress } from "antd";
import styles from "./Progress.module.scss";

function Demo() {
  const [percent, setPercent] = useState(0);

  const increase = (data) => {
    if (data > 100) {
      setPercent(100);
    }
    setPercent(data);
    console.log("data",data);
  };

  return (
    <div className={styles.Header}>
        <h1>ProgressBar</h1>
      <Input
        type={"text"}
        // className={styles.component}
        onChange={(e) => increase(e.target.value)}
      />
      <Progress className={styles.footer} percent={percent} />
    </div>
  );
}

export default Demo;
