import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../config/firebase";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  function signUp() {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        message.success("Vous êtes bien inscrit");
      })
      .catch(() => {
        message.error("Erreur dans la saisie");
      });
  }

  return (
    <div>
      <div>
        <HomeOutlined
          style={{ marginTop: 50, marginLeft: 80, fontSize: 30 }}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          fontSize: 40,
          marginTop: 20,
          marginBottom: 70,
        }}
      >
        Inscription
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            width: 500,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={signUp}
          autoComplete="off"
        >
          <Form.Item
            label="Adresse email"
            name="username"
            rules={[
              {
                required: true,
                message: "Entrez votre adresse email",
              },
            ]}
          >
            <Input onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Mot de passe"
            name="password"
            rules={[
              {
                required: true,
                message: "Entrez votre mot de passe",
              },
            ]}
          >
            <Input.Password onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              S'inscrire
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Button
          onClick={() => {
            navigate("/login");
          }}
        >
          Connectez-vous
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
