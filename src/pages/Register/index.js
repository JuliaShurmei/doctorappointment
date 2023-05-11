import React, {useEffect} from "react";
import { Button, Form, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { CreateUser } from "../../apicalls/users";

function Register() {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const response = await CreateUser(values);
      if (response.success) {
        message.success(response.message);
        navigate("/login");
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) navigate ("/");
  }, []);
  return (
    <div className='flex justify-center items-center h-screen'>
      <Form layout='vertical' className='w-400 bg-white p2' onFinish={onFinish}>
        <h2 className='uppercase my1'>
          <strong> Stayhealthy Register</strong>
        </h2>
        <hr />
        <Form.Item label='Name' name='name'>
          <input type='text' />
        </Form.Item>
        <Form.Item label='Email' name='email'>
          <input type='email' />
        </Form.Item>
        <Form.Item label='Password' name='password'>
          <input type='password' />
        </Form.Item>

        <button className='contained-btn my1' type='submit'>
          {" "}
          REGISTER{" "}
        </button>
        <Link className='underline' to='/login'>
          Already have an account? <strong> Sign in</strong>
        </Link>
      </Form>
    </div>
  );
}

export default Register;
