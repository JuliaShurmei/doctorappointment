import React, { useEffect } from "react";
import { Button, Form, message } from "antd";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CreateUser } from "../../apicalls/users";
import { ShowLoader } from "../../redux/loaderSlice";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoader(true));
      const response = await CreateUser({
        ...values,
        role: "user",
      });
      dispatch(ShowLoader(false));
      if (response.success) {
        message.success(response.message);
        navigate("/login");
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(ShowLoader(false));
      message.error(error.message);
    }
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) navigate("/");
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

        <button className='contained-btn my1 w-full' type='submit'>
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
