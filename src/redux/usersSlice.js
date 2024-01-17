import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    currentUser : null
  },
  reducers: {
    setUsers: (state,action) => {
        state.currentUser = action.payload;
    }
  },
});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;