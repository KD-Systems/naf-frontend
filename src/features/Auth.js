
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProfileService from "services/ProfileService";
import AuthService from "../services/AuthService";
// const user = JSON.parse(localStorage.getItem("user"));



// const getProfile = async () => {
//   setProfile(await ProfileService.getProfile());
// };





export const getProfile = createAsyncThunk("auth/getProfile",async(thunkAPI)=>{
  try {
    const data = await ProfileService.getProfile();
    return { user: data };
  } catch (error) {
    return thunkAPI.rejectWithValue();
  }
})


export const login = createAsyncThunk(
  "auth/login",
  async({email,password},thunkAPI)=>{ 
    try{
      const data = await AuthService.login(email,password);
      return { user: data };
      
    }
    catch(error){
      return thunkAPI.rejectWithValue();
    }
  }

)

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});





// const initialState = user
//   ? { isLoggedIn: true, user }
//   : { isLoggedIn: false, user: null };

const initialState = {
  isLoggedIn:false,
  user:null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [getProfile.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
  },
});


const { reducer } = authSlice;
export default reducer;