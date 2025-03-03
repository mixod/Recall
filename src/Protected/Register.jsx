import { Form, Input, Button } from "antd";
import { API_BASE_URL } from "../../apiconfig";
import axios from "axios";

function Register() {
  async function registerFunction(values) {
    console.log(values);
    try {
      const body = {
        email: values.email,
        full_name: values.full_name,
        password: values.password,
      };
      const res = await axios.post(`${API_BASE_URL}/api/v1/register`, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  const submit = (values) => {
    registerFunction(values);
  };

  return (
    <div className="flex max-w-6xl mx-auto justify-center items-center mt-30">
      <div className="shadow shadow-gray-400 w-80 p-5">
        <Form onFinish={submit} layout="vertical ">
          <Form.Item
            label="Full Name"
            name="full_name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone No"
            name="phone_number"
            rules={[{ required: true, message: "Please input your phone no!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your phone no!" }]}
          >
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Register;
