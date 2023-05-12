import React, { useEffect } from 'react';
import { Tabs, message } from "antd";
import UsersList from './UsersList';
import { useDispatch } from "react-redux";
import DoctorsList from './DoctorsList';
import { ShowLoader } from '../../redux/loaderSlice';
import { GetUserById } from '../../apicalls/users';


function Admin() {
    const [isAdmin, setIsAdmin] = React.useState(false);
    const user = JSON.parse(localStorage.getItem("user"));
    const dispatch = useDispatch();
    const items = [
        { label: 'Users', key: '1', children:   <UsersList /> }, 
        { label: 'Doctors', key: '2', children: <DoctorsList/> },
      ];
      const checkIsAdmin = async () => {
        try {
          dispatch(ShowLoader(true));
          const response = await GetUserById(user.id);
          dispatch(ShowLoader(false));
          if (response.success && response.data.role === "admin") {
            setIsAdmin(true);
          } else {
            throw new Error("You are not an admin");
          }
        } catch (error) {
          dispatch(ShowLoader(false));
          message.error(error.message);
        }
      };
      useEffect(() => {
        checkIsAdmin();
      }, []);

  return (
    isAdmin &&  <div className="bg-white p1">
    <Tabs items={items}> </Tabs>
    </div>
  )
}

export default Admin;