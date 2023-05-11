import { Col, Form, Row } from "antd";
import React from "react";

function DoctorForm() {
  return (
    <div className='bg-white p2'>
      <h3 className='uppercase my1'> Apply for a Doctor Account</h3>
      <hr />
      <Form layout='vertical' className='my1'>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Form.Item
              label='First name'
              name='firstname'
              rules={[
                {
                  required: true,
                  message: "Required",
                },
              ]}
            >
              <input type='text' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label='Last name'
              name='lastname'
              rules={[
                {
                  required: true,
                  message: "Required",
                },
              ]}
            >
              <input type='text' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label='Email'
              name='email'
              rules={[
                {
                  required: true,
                  message: "Required",
                },
              ]}
            >
              <input type='email' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label='Last name'
              name='lastname'
              rules={[
                {
                  required: true,
                  message: "Required",
                },
              ]}
            >
              <input type='text' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label='Phone'
              name='phone'
              rules={[
                {
                  required: true,
                  message: "Required",
                },
              ]}
            >
              <input type='number' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label='Website'
              name='website'
              rules={[
                {
                  required: true,
                  message: "Required",
                },
              ]}
            >
              <input type='text' />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label='Address'
              name='address'
              rules={[
                {
                  required: true,
                  message: "Required",
                },
              ]}
            >
              <textarea type='text' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label='Speciality'
              name='speciality'
              rules={[
                {
                  required: true,
                  message: "Required",
                },
              ]}
            >
              <select>
                <option value="dermatologist"> Dermatologist</option>
                <option value="cardiologist"> Cardiologist</option>
                <option value="gynecologist"> Gynecologist</option>
                <option value="neurologist"> Neurologist</option>
                <option value="orthopedict"> Orthopedic</option>
                <option value="pediatrician"> Pediatrician</option>
                <option value="psychiatrist"> Psychiatrist</option>
                <option value="surgeon"> Surgeon</option>
                <option value="urologist"> Urologist</option>
                

              </select>
            </Form.Item>
            </Col>
            <Col span={8}>
            <Form.Item
              label='Experience'
              name='experience'
              rules={[
                {
                  required: true,
                  message: "Required",
                },
              ]}
            >
              <input type='number' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label='Qualification'
              name='qualification'
              rules={[
                {
                  required: true,
                  message: "Required",
                },
              ]}
            >
              <select>
                <option value="MBBS"> MBBS</option>
                <option value="MD"> MD</option>
                <option value="MS"> MS</option>
                <option value="MDS"> MDS</option>    
              </select>
            </Form.Item>
            </Col>
        </Row>
      </Form>
    </div>
  );
}

export default DoctorForm;
