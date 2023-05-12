import { Table, message } from 'antd';
import React, { useEffect } from 'react';
import {useDispatch} from "react-redux";
import { GetAllDoctors } from '../../apicalls/doctors';
import { ShowLoader } from '../../redux/loaderSlice';



function DoctorsList() {
    const [doctors, setDoctors] =React.useState([]);
    const dispatch = useDispatch();
    const getData = async () => {
        try {
            dispatch(ShowLoader(true));
            const response= await GetAllDoctors();
            dispatch(ShowLoader(false));
            if (response.success) {
                setDoctors(response.data);
            } else {
                throw new Error (response.message);
            }
        } catch (error) {
            dispatch(ShowLoader(false));
            message.error(error.message);
        }
    };
    useEffect(() => {
        getData();
    }, []);

    const columns = [
        {
            title: "First Name",
            dataIndex: "firstname",
        },
        {
            title: "Last Name",
            dataIndex: "lastname",
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Phone",
            dataIndex: "phone",
        },
        {
            title: "Speciality",
            dataIndex: "speciality",
        },
        {
            title: "Status",
            dataIndex: "status",
        }
    ]
  return (
    <div>
        <Table columns={columns} dataSourse={doctors} />
    </div>
  )
}

export default DoctorsList