import { Button, Checkbox, Form, Input, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

const App = () => {
  const [item, setItem] = useState({});
  const [condition, setCondition] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log("data", data);
  };
  const { Title } = Typography;

  const navigate = useNavigate();
  const Submit = () => {
    const items = JSON.parse(localStorage.getItem("items"));
    setItem(items);
    // console.log('item.email', item.email)
    // console.log('data.email', data.email)
    if (items.email === data.email && items.password === data.password) {
      navigate("/dashboard");
      // setCondition(true);
    } else {
      navigate("/error404");
    }
  };
  return (
    <>
      <Navigation />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
          backgroundColor: "#02224C",
        }}
      >
        <Title style={{ color: "white" }}>Signin</Title>
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
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input onChange={handleChange} name="email" />
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
              <Input.Password name="password" onChange={handleChange} />
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
        </div>
      </div>
    </>
  );
};

export default App;
