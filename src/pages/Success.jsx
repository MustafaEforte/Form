import { Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { LoadingOutlined, SafetyOutlined } from "@ant-design/icons";
const Success = () => {
  const { Title } = Typography;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#02224C",
        height: "100vh",
      }}
    >
      <Title style={{ color: "white" }}>
        <LoadingOutlined />
        Success
      </Title>
      <div
        style={{
          border: "2px solid black",
          height: "600px",
          width: "600px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: "20px",
          backgroundColor: "white",
        }}
      >
        <h1>
          <SafetyOutlined />
          Successfully Signedup
        </h1>
        <Link to="/signin">Go sign in</Link>
      </div>
    </div>
  );
};

export default Success;
