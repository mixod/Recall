import { Form } from "antd";

function Login() {
  const submit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Form onFinish={submit}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "please input email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "please input your password" }]}
        >
          <Input />
        </Form.Item>
        <Button className="primary" htmlType="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
