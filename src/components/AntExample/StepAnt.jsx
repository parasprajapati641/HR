import { Steps } from "antd";
import React from "react";

function progress() {
  const { Step } = Steps;

  return (
      <Steps current={1} >
        <Step title={"Finished"} description={"This is a description"} />
        <Step
          title={"In Pregress"}
          subTitle={"123456789"}
          description={"This is a description"}
        />
        <Step title={"Waiting"} description={"This is a description "}/>
      </Steps>
  );
}

export default progress;
