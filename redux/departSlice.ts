import { createSlice} from "@reduxjs/toolkit";
import {RootState} from './index'

interface DepartState{
    department:any
}

const initialState:DepartState={
    department:[]
}

const departSlice = createSlice({
    name:'department',
    initialState,
    reducers:{
        EnterDepartment:(state,action)=>{
            state.department.push(action.payload);
        }
    }
})

export const {EnterDepartment} = departSlice.actions;
export const getDepartment = (state: RootState) => state.department.department;
export default departSlice.reducer 