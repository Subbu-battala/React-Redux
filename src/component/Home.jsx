import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retriveContacts } from "../Actions/ContactActions";
import { useNavigate } from "react-router-dom";
import ContactItem from "./ContactItem";

function Home(props){

    // const [contacts,setContacts] = useState([])
    

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const initFetch = useCallback(() => {
        dispatch(retriveContacts())
    },[])

    useEffect(()=> {
        initFetch()
    },[initFetch])

    // to read data
    const contacts = useSelector((item) => item.contacts)


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success">Home</h3>
                </div>
            </div>

            <div className="row">
                    {
                        contacts && contacts.map((item,index) => {
                            return (
                                <ContactItem key={index} {...item} />
                            )
                        })
                    }
                    
                </div>
                
        </div>
    )
}

export default Home