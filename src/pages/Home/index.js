import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GetAllDoctors } from "../../apicalls/doctors";
import { ShowLoader } from "../../redux/loaderSlice";
import { Col, Row, message } from "antd";


function Home() {
  const navigate = useNavigate();
  const [doctors = [], setDoctors] = React.useState([]);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const getData = async () => {
    try {
      dispatch(ShowLoader(true));
      const response = await GetAllDoctors();
      if (response.success) {
        setDoctors(response.data);
      } else {
        message.error(response.message);
      }

      dispatch(ShowLoader(false));
    } catch (error) {
      message.error(error.message);
      dispatch(ShowLoader(false));
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className='flex justify-between'>
        <div>
          <input placeholder='Search doctors' className='w400' />
        </div>
        <button
          className='outlined-btn my1'
          onClick={() => navigate("/apply-doctor")}
        >
          {" "}
          Apply doctor{" "}
        </button>
      </div>
      <Row gutter={[16, 16]} className="my1">
        {doctors.map((doctor) => {
          return (
            <Col span={8}>
              <div
                className="bg-white p1 flex flex-col gap1 cursor-pointer"
                onClick={() => navigate(`/book-appointment/${doctor.id}`)}
              >
                <div className="flex justify-between w-full">
                  <h2 className="uppercase">
                    {doctor.firstName} {doctor.lastName}
                  </h2>
                </div>
                <hr />
                <div className="flex justify-between w-full">
                  <h4>
                    <b>Speciality : </b>
                  </h4>
                  <h4>{doctor.speciality}</h4>
                </div>
                <div className="flex justify-between w-full">
                  <h4>
                    <b>Experience : </b>
                  </h4>
                  <h4>
                    {doctor.experience}
                    Years
                  </h4>
                </div>
                <div className="flex justify-between w-full">
                  <h4>
                    <b>Email : </b>
                  </h4>
                  <h4>{doctor.email}</h4>
                </div>
                <div className="flex justify-between w-full">
                  <h4>
                    <b>Phone : </b>
                  </h4>
                  <h4>{doctor.phone}</h4>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Home;
