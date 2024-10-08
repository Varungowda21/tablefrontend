import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetechEmployesData } from "./EmployeeSlice";
import EmployeeTable from "./EmployeeTable";
import EmployeeForm from "./EmployeeForm";

export default function ReduxToolkit() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetechEmployesData());
  }, []);
  return (
    <>
      <EmployeeForm />
      <EmployeeTable />
    </>
  );
}
