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
        .addCase(retriveContacts.fulfilled, (state, action) => {})
        .addCase(retriveSingle.fulfilled, (state, action) => {})
        .addCase(updateContact.fulfilled, (state, action) => {})
        .addCase(deleteContact.fulfilled, (state, action) => {})
    }
})

//combine the reducer
const reducer = combineReducers({
    contacts: ContactSlice.reducer
})
export default reducer 