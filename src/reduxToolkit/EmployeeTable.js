import { useSelector, useDispatch } from "react-redux";
import { delEmp, setEditId, updEmp } from "./EmployeeSlice";
import { useState } from "react";

export default function EmployeeTable() {
  const { employess } = useSelector((state) => state.employee);
  console.log(employess);
  return (
    <table border={"1"}>
      <thead>
        <tr>
          <th>name</th>
          <th>email</th>
          <th>Action</th>
        </tr>
      </thead>
      <thead>
        {employess.map((ele) => (
          <EmployeeItem ele={ele} />
        ))}
      </thead>
    </table>
  );
}

const EmployeeItem = ({ ele }) => {
  const { editId } = useSelector((state) => state.employee);

  const [upname, setUpname] = useState(ele.name);
  const [upemail, setUpemail] = useState(ele.email);
  const dispatch = useDispatch();
  const handleDelete = (EmpId) => {
    console.log(EmpId);
    dispatch(delEmp(EmpId));
  };
  const handleEditId = (EmpId) => {
    dispatch(setEditId(EmpId));
  };
  const handleUpdate = (id) => {
    // dispatch(updEmp({ id, upname, upemail }));
    const formData = {
      id,
      name: upname,
      email: upemail,
    };
    dispatch(updEmp(formData));
  };
  return (
    <>
      {ele.id == editId ? (
        <tr>
          <td>
            <input
              type="text"
              value={upname}
              onChange={(e) => setUpname(e.target.value)}
            />
          </td>
          <td>
            <input
              type="text"
              value={upemail}
              onChange={(e) => setUpemail(e.target.value)}
            />
          </td>
          <button onClick={() => handleUpdate(ele.id)}>Update</button>
        </tr>
      ) : (
        <tr>
          <td>{ele.name}</td>
          <td>{ele.email}</td>
          <td>
            <button onClick={() => handleDelete(ele.id)}>Delete</button>
            <button onClick={() => handleEditId(ele.id)}>Edit</button>
          </td>
        </tr>
      )}
    </>
  );
};
