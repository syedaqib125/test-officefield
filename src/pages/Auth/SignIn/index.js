import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Form, Input, Card, message } from "antd";

import { signIn } from "../../../store/actions/authActions";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const { Meta } = Card;

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { isUser } = useSelector((state) => state.authReducer);

  const [isLoading, setIsLoading] = useState(false);

  const onSuccess = () => {
    setIsLoading(false);
  };

  const onFailure = (error) => {
    message.error(error);
    setIsLoading(false);
  };

  const onFinish = (values) => {
    dispatch(
      signIn(
        { username: "kminchelle", password: "0lelplR" },
        onSuccess,
        onFailure
      )
    );
    setIsLoading(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (isUser) {
      history.push("/user/dashboard");
    }
  }, [isUser, history]);

  const cardTitle = (
    <div style={{ textAlign: "center" }}>
      <div>
        <h1>Log in</h1>
      </div>
    </div>
  );

  return (
    <div>
      <div className="auth">
        <div>
          <Card title={cardTitle} bordered={true} className="signIn_main">
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 25,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout="vertical"
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input placeholder={"User Name"} prefix={<UserOutlined />} />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  placeholder={"Password"}
                  prefix={<LockOutlined />}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  style={{
                    backgroundColor: "#29A095",
                    color: "white",
                  }}
                  htmlType="submit"
                  loading={isLoading}
                  block
                >
                  LOG IN
                </Button>
              </Form.Item>
            </Form>
            <Meta
              style={{ textAlign: "center" }}
              description="© 2024. All Rights Reserved"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
