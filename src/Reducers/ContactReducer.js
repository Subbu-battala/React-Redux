import { createSlice, combineReducers } from "@reduxjs/toolkit";
import { retriveContacts, retriveSingle, createContact, updateContact, deleteContact } from "../Actions/ContactActions";


//initial state
const initState = {
    contacts: []
}
const ContactSlice = createSlice({
    name:"contact",
    initialState: initState.contacts,
    extraReducers: (builder) => {
        builder.addCase(createContact.fulfilled, (state, action) => {
            state.push(action.payload)
        })
        .addCase(retriveContacts.fulfilled, (state, action) => {
            return [...action.payload]
        })
        .addCase(retriveSingle.fulfilled, (state, action) => {
            return action.payload
        })
        .addCase(updateContact.fulfilled, (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id)
            state[index] = {
                ...state[index],
                ...action.payload
            }
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id )
            state.splice(index,1)
        })
    }
})

//combine the reducer
const reducer = combineReducers({
    contacts: ContactSlice.reducer
})
export default reducer 