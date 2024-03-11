import React from "react";

import { Card, Col, Row } from "antd";
const DemoBox = (props) => (
  <p
    className={`height-${props.value}`}
    style={{ backgroundColor: "red", height: props.value }}
  >
    {props.children}
  </p>
);
const Dashboard = () => {
  return (
    <>
      <div>Dashboard</div>
    </>
  );
};
export default Dashboard;
