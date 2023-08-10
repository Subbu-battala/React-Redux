import { createAsyncThunk } from "@reduxjs/toolkit";
import ContactApi from "../API/ContactApi";

// createAsyncThunk(action const, action method)
//create action
export const createContact = createAsyncThunk("contact/create", async (contact) => {
    console.log("new contact=", contact);
    const res = await ContactApi.create(contact)
    return res.data
})

//read all action
export const retriveContacts = createAsyncThunk("contact/retrive", async () => {

})

//read single contact
export const retriveSingle = createAsyncThunk("contact/retrive/single", async ({id}) =>{
    console.log("contact id = ", id)
})

//update action
export const updateContact = createAsyncThunk("contact/update", async ({id, contact}) => {
    console.log("id= ", id, "contact = ", contact)
})
 //delete action
 export const deleteContact = createAsyncThunk("contact/delete", async ({id}) => {
    console.log("contact id", id)
 })