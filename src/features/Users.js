import { createSlice } from "@reduxjs/toolkit";

import  data  from '../helper/data'


export const userSlice = createSlice({
    name: 'users',
    initialState: {value: data},
    reducers: {

        addUser: (state, action)=> {
            state.value.push(action.payload)
        },

        deleteUser: (state, action)=> {
            state.value = state.value.filter( user => user.id !== action.payload.id)
            
        }
    }
})


export const { addUser, deleteUser } = userSlice.actions

export default userSlice.reducer