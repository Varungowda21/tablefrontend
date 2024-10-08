import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./EmployeeSlice";

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});
