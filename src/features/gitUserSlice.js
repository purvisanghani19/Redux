// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// export const getallData = createAsyncThunk("getusers", async (args, { rejectWithValue }) => {
//     const response = await fetch('https://api.github.com/users');
//     try {
//         const result = response.json();
//         return result;
//     } catch (error) {
//         return rejectWithValue(error)
//     }
// })


// export const gitUser = createSlice({
//     name: "gituser",
//     initialState: {
//         users: [],
//         loading: false,
//         error: null
//     },
//     extraReducers: {
//         [getallData.pending]: (state) => {
//             state.loading = true;
//         },
//         [getallData.fulfilled]: (state, action) => {
//             state.loading = false;
//             state.users = action.payload;
//         },
//         [getallData.rejected]: (state, action) => {
//             state.loading = false;
//             state.error = action.payload
//         },
//     }

// });



// export default gitUser.reducer;

