import React from "react";
import { Layout, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { Header } = Layout;
  let navigate = useNavigate();

  return (
    <Layout>
      <Header>
        <Row justify="space-between" style={{ color: "white" }}>
          <Col
            onClick={() => navigate("/")}
            style={{ marginLeft: 640, fontSize: 25 }}
          >
            React Cinema
          </Col>
          <Col>
            <UserOutlined
              style={{ fontSize: 25 }}
              onClick={() => navigate("/login")}
            />
          </Col>
        </Row>
      </Header>
    </Layout>
  );
};

export default NavBar;
