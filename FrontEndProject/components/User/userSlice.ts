import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    account: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAccount: (state, {payload}) => {
            state.account = payload.account
        },
        clearAccount: (state) => {
            state = initialState
        }
    }
})

export const {setAccount, clearAccount} = userSlice.actions
export default userSlice.reducer