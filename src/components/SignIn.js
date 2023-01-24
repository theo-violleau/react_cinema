import { Button, Form, Input, message } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  function signIn() {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
        message.success("Vous êtes connecté");
      })
      .catch(() => {
        message.error("Email ou mot de passe incorrect");
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
        Connexion
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
          onFinish={signIn}
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
              Se connecter
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Button
          onClick={() => {
            navigate("/register");
          }}
        >
          Inscrivez-vous
        </Button>
      </div>
    </div>
  );
};

export default SignIn;
