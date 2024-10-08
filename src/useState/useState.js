import axios from "axios";
import { useState, useEffect } from "react";
import EmployeContext from "./EmployeeContext";
import EmplyoeeTable from "./EmployeeTable";
import EmployeeForm from "./EmployeeForm";
import "../App.css";

export default function UseState() {
  const [employees, setEmployees] = useState([]);
  const [editId, setEditId] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(response.data);
        setEmployees(response.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  console.log(employees);

  const handleAdd = (formData) => {
    const newArr = [...employees, formData];
    setEmployees(newArr);
  };

  const handleDelete = (id) => {
    console.log(id);
    const newArr = employees.filter((ele) => ele.id !== id);
    setEmployees(newArr);
  };

  const handleEdit = (EmpId) => {
    setEditId(EmpId);
  };

  const handleUpdate = (Emp) => {
    console.log(Emp);
    setEditId(null);
    const newArr = employees.map((ele) => {
      if (ele.id == Emp.Employee.id) {
        return { ...ele, name: Emp.upname, email: Emp.upemail };
      } else {
        return { ...ele };
      }
    });
    setEmployees(newArr);
  };

  return (
    <>
      <div className="App">
        <EmployeContext.Provider
          value={{
            employees,
            handleAdd,
            handleEdit,
            editId,
            handleDelete,
            handleUpdate,
          }}
        >
          <EmployeeForm />
          <EmplyoeeTable />
        </EmployeContext.Provider>
      </div>
    </>
  );
}
