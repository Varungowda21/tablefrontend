import EmployeContext from "./EmployeeContext";
import { useContext, useState } from "react";

export default function EmplyoeeTable() {
  const { employee } = useContext(EmployeContext);

  return (
    <table border={"1px"}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {employee.map((ele, i) => (
          <EmplyoeeItem ele={ele} key={i} />
        ))}
      </tbody>
    </table>
  );
}

const EmplyoeeItem = ({ ele }) => {
  const { employeeDispatch, handleEditId, editId } = useContext(EmployeContext);
  const [upname, setUpName] = useState(ele.name);
  const [upemail, setUpEmail] = useState(ele.email);

  const handleDelete = (EmpId) => {
    console.log(EmpId);
    employeeDispatch({ type: "DEL-EMP", payload: EmpId });
  };
  
  const handleEdit = (EmpId) => {
    handleEditId(EmpId);
  };

  const handleUpdate = (id) => {
    console.log(id);
    handleEdit(null);
    employeeDispatch({ type: "UPD-EMP", payload: { id, upname, upemail } });
  };
  return (
    <>
      {ele.id == editId ? (
        <tr>
          <td>
            <input
              type="text"
              value={upname}
              onChange={(e) => setUpName(e.target.value)}
            />
          </td>
          <td>
            <input
              type="text"
              value={upemail}
              onChange={(e) => setUpEmail(e.target.value)}
            />
          </td>
          <td>
            <button onClick={() => handleUpdate(ele.id)}>Update</button>
          </td>
        </tr>
      ) : (
        <tr>
          <td>{ele.name}</td>
          <td>{ele.email}</td>
          <button onClick={() => handleEdit(ele.id)}>Edit</button>
          <button onClick={() => handleDelete(ele.id)}>Delete</button>
        </tr>
      )}
    </>
  );
};
