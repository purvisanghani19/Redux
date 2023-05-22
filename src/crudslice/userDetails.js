import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


//action----------------------------------------------

// export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {

//     const response = await fetch("https://64685964e99f0ba0a822d791.mockapi.io/crud", 
//     {
//         method: 'POST',
//         headers: {
//             "Contant-type": "application/json",
//         },
//         body: JSON.stringify(data)
//     })
//     try {
//         const result = await response.json();
//         return result;
//     } catch (error) {
//         return rejectWithValue(error.response)
//     }
// })


export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {
    const response = await fetch("https://64685964e99f0ba0a822d791.mockapi.io/crud",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

//read action -----------------------------------

export const showUser = createAsyncThunk("showUser", async (args, { rejectWithValue }) => {

    const responce = await fetch('https://64685964e99f0ba0a822d791.mockapi.io/crud');

    try {
        const result = await responce.json();
        console.log("yyyyyyyyyyyyy---", result);
        return result;
    } catch (error) {
        return rejectWithValue(error)
    }
})

// //delete-------------------------
export const deleteuser = createAsyncThunk("deleteuser", async (id, { rejectWithValue }) => {

    const responce = await fetch(`https://64685964e99f0ba0a822d791.mockapi.io/crud/${id}`, { method: "DELETE" });

    try {
        const result = await responce.json();
        return result;
    } catch (error) {
        return rejectWithValue(error)
    }
})

//update--------------------------------------------------

export const updateUser = createAsyncThunk("updateUser", async (data, { rejectWithValue }) => {
    console.log('data----', data)
    const response = await fetch(`https://64685964e99f0ba0a822d791.mockapi.io/crud/${data.id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});



export const useDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
        searchData: [],
    },

    
  reducers: {
    searchUser: (state, action) => {
      console.log(action.payload);
      state.searchData = action.payload;
    },
  },


    extraReducers: {
        [createUser.pending]: (state) => {
            state.loading = true;
        },
        [createUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
        },
        [createUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        //read-----------------------------------------------------
        [showUser.pending]: (state) => {
            state.loading = true;
        },
        [showUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [showUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        //delete------------------------------
        [deleteuser.pending]: (state) => {
            state.loading = true;
        },
        [deleteuser.fulfilled]: (state, action) => {
            state.loading = false;

            const { id } = action.payload;

            if (id) {
                state.users = state.users.filter((ele) => ele.id !== id);
            }

        },
        [deleteuser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        //update------------------------------
        [updateUser.pending]: (state) => {
            state.loading = true;
        },
        [updateUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = state.users.map((ele) => (
                ele.id === action.payload.id ? action.payload : ele
            ));
        },
        [updateUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    }

});

export default useDetail.reducer;
export const { searchUser } = useDetail.actions;