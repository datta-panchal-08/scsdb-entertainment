import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    info:null
}

export const TvSlice = createSlice({
    name:"tv",
    initialState,
    reducers:{
        loadTvShow:(state,action)=>{
         state.info = action.payload;
        },
        removeTvShow:(state)=>{
            state.info = null;
        }

    }
});

export const {loadTvShow,removeTvShow} = TvSlice.actions;
export default TvSlice.reducer;