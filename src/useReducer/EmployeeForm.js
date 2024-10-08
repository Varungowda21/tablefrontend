import { useState } from "react";
import EmployeContext from "./EmployeeContext";
import { useContext } from "react";

export default function EmployeeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { employeeDispatch } = useContext(EmployeContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      id: new Date().getMilliseconds(),
      name,
      email,
    };
    console.log(formData);
    employeeDispatch({ type: "ADD-EMP", payload: formData });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" />
      </form>
    </>
  );
}
