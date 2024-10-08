import { useState } from "react";
import { addEmp } from "./EmployeeSlice";
import { useDispatch } from "react-redux";

export default function EmployeeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      id: new Date().getMilliseconds(),
      name,
      email,
    };
    console.log(formData);
    dispatch(addEmp(formData));
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
