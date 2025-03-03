import { Form } from "antd";

function Login() {
  return (
    <div>
      <Form>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "please input name" }]}
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
      </Form>
    </div>
  );
}

export default Login;
