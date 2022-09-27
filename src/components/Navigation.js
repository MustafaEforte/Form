import { Menu } from "antd";
import { HomeOutlined, MailFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Navigation = () => (
  <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
    <Menu.Item key="mail" icon={<HomeOutlined />}>
      <Link to="/">Home</Link>
    </Menu.Item>
    <Menu.Item key="mail" icon={<MailFilled />}>
      <Link to="/signup">Sign up</Link>
    </Menu.Item>
    <Menu.Item key="mail" icon={<MailFilled />}>
      <Link to="/signin">Sign in</Link>
    </Menu.Item>
  </Menu>
);

export default Navigation;
