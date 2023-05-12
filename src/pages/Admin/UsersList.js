import { Table, message } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ShowLoader } from "../../redux/loaderSlice";
import { GetAllUsers } from "../../apicalls/users";


function UsersList() {
  const [users, setUsers] = React.useState([]);
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      dispatch(ShowLoader(true));
      const response = await GetAllUsers();
      dispatch(ShowLoader(false));
      if (response.success) {
        setUsers(response.data);
      } else {
        throw new Error(response.message);
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
        title: "ID",
        dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
        title: "Role",
        dataIndex: "role",
      },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSourse={users} />
    </div>
  );
}

export default UsersList;
