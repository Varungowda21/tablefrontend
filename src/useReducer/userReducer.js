import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import EmployeContext from "./EmployeeContext";
import EmplyoeeTable from "./EmployeeTable";
import EmployeeForm from "./EmployeeForm";
import "../App.css";

const employeeReducer = (state, action) => {
  switch (action.type) {
    case "SET-EMP": {
      return [...action.payload];
    }
    case "ADD-EMP": {
      return [...state, action.payload];
    }
    case "DEL-EMP": {
      return state.filter((ele) => {
        return ele.id !== action.payload;
      });
    }
    case "UPD-EMP": {
      return state.map((ele) => {
        if (ele.id == action.payload.id) {
          return {
            ...ele,
            name: action.payload.upname,
            email: action.payload.upemail,
          };
        } else {
          return { ...ele };
        }
      });
    }
    default: {
      return "Case not matched";
    }
  }
};

export default function UseReducer() {
  const [employee, employeeDispatch] = useReducer(employeeReducer, []);
  const [editId, setEditId] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(response.data);
        employeeDispatch({ type: "SET-EMP", payload: response.data });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  console.log(employee);

  const handleEditId = (EmpId) => {
    setEditId(EmpId);
  };
  return (
    <>
      <div className="App">
        <EmployeContext.Provider
          value={{ employee, employeeDispatch, handleEditId, editId }}
        >
          <EmployeeForm />
          <EmplyoeeTable />
        </EmployeContext.Provider>
      </div>
    </>
  );
}
