import EmployeContext from "./EmployeeContext";
import { useContext, useState } from "react";

export default function EmplyoeeTable() {
  const { employees, handleDelete, handleEdit, handleUpdate } =
    useContext(EmployeContext);

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
        {employees.map((ele, i) => (
          <EmplyoeeItem
            ele={ele}
            key={i}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleUpdate={handleUpdate}
          />
        ))}
      </tbody>
    </table>
  );
}

const EmplyoeeItem = ({ ele, handleUpdate, handleEdit, handleDelete }) => {
  const { editId } = useContext(EmployeContext);
  const [upname, setUpName] = useState(ele.name);
  const [upemail, setUpEmail] = useState(ele.email);

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
            <button
              onClick={() => handleUpdate({ Employee: ele, upname, upemail })}
            >
              Update
            </button>
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
