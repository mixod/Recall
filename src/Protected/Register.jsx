import { Form, Input, Button } from "antd";
import { API_BASE_URL } from "../../apiconfig";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  if (localStorage.getItem("token")) {
    return <Navigate to="/home" />;
  }
  async function registerFunction(values) {
    console.log(values);
    try {
      const body = {
        email: values.email,
        full_name: values.full_name,
        password: values.password,
      };
      await axios.post(`${API_BASE_URL}/api/v1/register`, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }
  const submit = (values) => {
    registerFunction(values);
  };

  return (
    <div className="flex max-w-6xl mx-auto justify-center items-center mt-30">
      <div className="shadow-xl w-100  p-10">
        <Form onFinish={submit} layout="vertical ">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Register
          </h2>

          <Form.Item label="Full Name" name="full_name">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Phone No" name="phone_number">
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Register;
