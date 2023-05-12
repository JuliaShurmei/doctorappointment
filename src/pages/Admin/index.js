import React from 'react';
import { Tabs } from "antd";
import UsersList from './UsersList';
import DoctorsList from './DoctorsList';


function Admin() {
    const items = [
        { label: 'Users', key: '1', children:   <UsersList /> }, 
        { label: 'Doctors', key: '2', children: <DoctorsList/> },
      ];
  return (
    <div className="bg-white p1">
    <Tabs items={items}> </Tabs>
    </div>
  )
}

export default Admin;