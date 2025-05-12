import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UsersServices from "services/api/usersService";
import { get } from "lodash";

const initialState = {
  usersList: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk(
  "media/fetchUsers",
  async (params, thunkAPI) => {
    try {
      const request = await UsersServices.UsersList({});
      if (get(request, "status") != 200) {
        return thunkAPI.rejectWithValue(get(request, "message", ""));
      }
      const respond = await request.data;
      return respond;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const createUser = createAsyncThunk(
  "media/createUser",
  async (params, thunkAPI) => {
    try {
      const request = await UsersServices.UsersCreate(params);
      if (get(request, "status") != 201) {
        return thunkAPI.rejectWithValue(get(request, "message", ""));
      }
      const respond = await request.data;
      return respond;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ params, id }, thunkAPI) => {
    try {
      console.log(params, id);

      const request = await UsersServices.UsersUpdate(params, id);
      if (get(request, "status") != 200) {
        return thunkAPI.rejectWithValue(get(request, "message", ""));
      }
      const respond = await request.data;
      return respond;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const deleteUser = createAsyncThunk(
  "media/deleteUser",
  async ({ params, id }, thunkAPI) => {
    try {
      const request = await UsersServices.UsersDelete(params, id);
      if (get(request, "status") != 200) {
        return thunkAPI.rejectWithValue(get(request, "message", ""));
      }

      const respond = await request.data;
      return respond;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.usersList = get(action, "payload", []);
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.usersList = [...state.usersList, action.payload];
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload && action.payload) {
        state.usersList = state.usersList.map((user) =>
          user.id === action.payload.id ? action.payload : user
        );
      }
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(deleteUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false;
      state.usersList = state.usersList.filter(
        (project) => project.id != action.payload.id
      );
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
  },
});

export default usersSlice.reducer;
