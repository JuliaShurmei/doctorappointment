import { Col, Form, Row, message } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ShowLoader } from "../../redux/loaderSlice";
import { useNavigate } from "react-router-dom";
import { AddDoctor, CheckIfDoctorAccountIsApplied, } from "../../apicalls/doctors";

function DoctorForm() {
  const [days, setDays] = React.useState([]);
  const [alreadyApplied, setAlreadyApplied] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoader(true));
      const payload = {
        ...values,
        days,
        userId: JSON.parse(localStorage.getItem("user")).id,
        status: "pending",
      };
      const response = await AddDoctor(payload);
      if (response.success) {
        message.success(response.message);
        navigate("/profile");
      } else {
        message.error(response.message);
      }
      dispatch(ShowLoader(false));
    } catch (error) {
      dispatch(ShowLoader(false));
      message.error(error.message);
    }
  };

  const checkIfAlreadyApplied = async () => {
    try {
      dispatch(ShowLoader(true));
      const response = await CheckIfDoctorAccountIsApplied(
        JSON.parse(localStorage.getItem("user")).id
      );
      if (response.success) {
        setAlreadyApplied(true);
      }
      dispatch(ShowLoader(false));
    } catch (error) {
      dispatch(ShowLoader(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    checkIfAlreadyApplied();
  }, []);
  return (
    <div className='bg-white p2'>
      {!alreadyApplied && (
        <>
          {" "}
          <h3 className='uppercase my1'> Apply for a Doctor Account</h3>
          <hr />
          <Form layout='vertical' className='my1' onFinish={onFinish}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <h4 className='uppercase'> Personal information</h4>
              </Col>
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
              <Col span={24}>
                <hr />
              </Col>
              <Col span={24}>
                <h4 className='uppercase'> Professional information</h4>
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
                    <option value='dermatologist'> Dermatologist</option>
                    <option value='cardiologist'> Cardiologist</option>
                    <option value='gynecologist'> Gynecologist</option>
                    <option value='neurologist'> Neurologist</option>
                    <option value='orthopedict'> Orthopedic</option>
                    <option value='pediatrician'> Pediatrician</option>
                    <option value='psychiatrist'> Psychiatrist</option>
                    <option value='surgeon'> Surgeon</option>
                    <option value='urologist'> Urologist</option>
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
                    <option value='MBBS'> MBBS</option>
                    <option value='MD'> MD</option>
                    <option value='MS'> MS</option>
                    <option value='MDS'> MDS</option>
                  </select>
                </Form.Item>
              </Col>
              <Col span={24}>
                <hr />
              </Col>
              <Col span={24}>
                <h4 className='uppercase'> Work hours</h4>
              </Col>
              <Col span={8}>
                <Form.Item
                  label='Start time'
                  name='startTime'
                  rules={[
                    {
                      required: true,
                      message: "Required",
                    },
                  ]}
                >
                  <input type='time' />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label='End time'
                  name='endTime'
                  rules={[
                    {
                      required: true,
                      message: "Required",
                    },
                  ]}
                >
                  <input type='time' />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label='Fee'
                  name='fee'
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
              <Col span={24}>
                <div className='flex gap2'>
                  {[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ].map((day, index) => (
                    <div className='flex items-center'>
                      <input
                        type='checkbox'
                        key={index}
                        value={day}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setDays([...days, e.target.value]);
                          } else {
                            setDays(
                              days.filter((item) => item !== e.target.value)
                            );
                          }
                        }}
                      />

                      <label>{day}</label>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
            <div className='flex justify-end gap2'>
              <button className='outlined-btn' type='button'>
                Cancel
              </button>
              <button className='contained-btn' type='submit'>
                Submit
              </button>
            </div>
          </Form>
        </>
      )}
      {alreadyApplied && (
        <div className="flex flex-col items-center gap2">
            <h3 className="text-secondary">
                You have already applied for this doctor account, please wait for
                the admin to approve your request
            </h3>
        </div>
      )}
    </div>
  );
}

export default DoctorForm;
