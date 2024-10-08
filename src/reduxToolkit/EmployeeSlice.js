import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetechEmployesData = createAsyncThunk(
  "employee/fetechEmployesData",
  async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);
const employeSlice = createSlice({
  name: "employee",
  initialState: {
    employess: [],
    editId: null,
    loading: false,
  },
  reducers: {
    addEmp: (state, action) => {
      state.employess.push(action.payload);
      // state.employess = action.payload;
    },
    delEmp: (state, action) => {
      // state.employess.pop(action.payload);removes last element only
      state.employess = state.employess.filter(
        (ele) => ele.id !== action.payload
      );
    },
    setEditId: (state, action) => {
      state.editId = action.payload;
    },
    updEmp: (state, action) => {
      state.editId = null;
      // state.employess = state.employess.map((ele) => {
      //   if (ele.id == action.payload.id) {
      //     return {
      //       ...ele,
      //       name: action.payload.upname,
      //       email: action.payload.upemail,
      //     };
      //   } else {
      //     return { ...ele };
      //   }
      // });
      const index = state.employess.findIndex(
        (ele) => ele.id == action.payload.id
      );
      state.employess[index] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetechEmployesData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetechEmployesData.fulfilled, (state, action) => {
      state.loading = false;
      state.employess = action.payload;
    });
    builder.addCase(fetechEmployesData.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { addEmp, delEmp, setEditId, updEmp } = employeSlice.actions;

export default employeSlice.reducer;
