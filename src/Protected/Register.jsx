import { Form, Input } from "antd";

function Register() {
  // async function registerFunction() {
  //     try{
  //         const response
  //     }
  // }
  //

  return (
    <div>
      <Form>
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
      </Form>
    </div>
  );
}

export default Register;

// const registerFn = async () => {
//     try {
//       const res = await axios.post(
//         `${API_BASE_URL}/api/v1/register`,
//         {
//           email: "nepal@gmail.com",
//           full_name: "nepal",
//           password: "password",
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log(res);
//     } catch (error) {
//       console.log(error);
//     }
//   };

// <>
//   <button onClick={registerFn}>jjj</button>
// </>
