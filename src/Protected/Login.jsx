import { Button, Form, Input } from "antd";

function Login() {
  const submit = (values) => {
    console.log(values);
  };
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="m-auto bg-white rounded-lg shadow-xl w-96 p-8">
        <Form onFinish={submit} layout="vertical">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>
          <Form.Item
            label={<span className="text-gray-700">Email</span>}
            name="email"
            rules={[
              { required: true, message: "Please input your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input className="rounded-md hover:border-blue-500 " />
          </Form.Item>
          <Form.Item
            label={<span className="text-gray-700">Password</span>}
            name="password"
            rules={[{ required: true, message: "Please input your password" }]}
          >
            <Input.Password className="rounded-md hover:border-blue-500 " />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 rounded-md h-10 mt-4"
          >
            Sign In
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
