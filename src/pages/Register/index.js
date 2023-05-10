import React from "react";
import { Button, Form } from "antd";

function Register() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Form layout='vertical' className="w-400 bg-white p2">
        <Form.Item label='Name'>
          <input type='text' />
        </Form.Item>
        <Form.Item label='Email'>
          <input type='email' />
        </Form.Item>
        <Form.Item label='Password'>
          <input type='password' />
        </Form.Item>

        <button className="contained-btn"> REGISTER </button>
      </Form>
    </div>
  );
}

export default Register;
