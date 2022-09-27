import { Button, Typography } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const { Title } = Typography;
const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        background: "linear-gradient(#e66465, #9198e5)",
      }}
    >
      <Title>Welcome</Title>
      <div>
        <Link to="/signup" style={{ padding: "4px" }}>
          <Button>Signup</Button>
        </Link>
        <Link to="/signin" style={{ padding: "4px" }}>
          <Button>Signin</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
