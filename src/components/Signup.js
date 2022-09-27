import { Button, Checkbox, Form, Input, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

const App = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [condition, setCondition] = useState(false);
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const { Title } = Typography;
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    return false;
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setCondition(true);
    console.log("data :>> ", data);
  };

  const navigate = useNavigate();
  const Submit = () => {
    if (condition === true) {
      if (data.email.length > 10) {
        if (data.password.length > 0) {
          localStorage.setItem("items", JSON.stringify([data]));
          navigate("/signupsuccess");
          // console.log("oldData :>> ", oldData);
          // setData((oldData) => [...oldData, data]);
          // localStorage.setItem("items", JSON.stringify(data));
        }
        let oldData = JSON.parse(localStorage.getItem("items"));
        localStorage.setItem("items", JSON.stringify([...oldData, data]));
      }
    }
    // setData((current) => [...current, data]);
    // console.log("oldData :>> ", oldData);
  };
  return (
    <>
      {" "}
      <Navigation />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
          backgroundColor: "black",
        }}
      >
        <Title style={{ color: "white" }}>Signup</Title>
        <div
          style={{
            border: "2px solid black",
            height: "600px",
            width: "600px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "20px",
          }}
        >
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Fullname"
              name="fullname"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input name="fullname" onChange={handleChange} />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input onChange={handleChange} name="email" type="email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                onChange={handleChange}
                name="password"
                type="password"
              />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit" onClick={Submit}>
                Submit
              </Button>
            </Form.Item>
          </Form>
          <div style={{ flexDirection: "row", display: "flex" }}>
            <p style={{ paddingRight: "10px" }}>Already have an account?</p>
            <Link to="/signin">Signin</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
