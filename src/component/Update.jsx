import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateContact } from "../Actions/ContactActions";
import { retriveSingle } from './../Actions/ContactActions';
import ContactApi from "../API/ContactApi";

function Update(props){
    const [contact,setContact] = useState({
        first: "",
        last: "",
        image: "",
        mobile: "",
        email: "",
        address: ""
    })

    const dispatcher = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    const singleContact = useSelector((item) => item.contacts)

    const getInit = useCallback(() => {
        dispatcher(retriveSingle({id: params.id}))
        //setContact(singleContact)
        const getData = async () => {
            const res = await ContactApi.getSingle(params.id)
            setContact(res.id)
        }
        getData()
    },[contact])


    useEffect(() => {
        getInit()
        //console.log('single=', singleContact)
    },[getInit])

    const readValue = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try{
            console.log('new contact =', contact)
            dispatcher(updateContact({ id: params.id , contact }))
              .unwrap()
              .then(res => {
                toast.success('contact updated successfully')
                navigate(`/`)
              })
              .catch(err => toast.error(err.message))

        } catch (err) {
            toast.error(err.message)
        }
    }


    return(
       <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="display-3 text-primary">Update  Contact</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md--6 offset-md-3">
                        <div className="card">
                            <div className="card-body">
                                <form autoComplete="off" onSubmit={submitHandler}>
                                    <div className="form-group mt-2">
                                        <label htmlFor="First">FirstName</label>
                                        <input type="text" name="first" id="first" value={contact.first} onChange={readValue} className="form-control"  placeholder="first name" required />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="last">LastName</label>
                                        <input type="text" name="last" id="last" value={contact.last} onChange={readValue} className="form-control"  placeholder="last name" required />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="image">Profile Image</label>
                                        <input type="url" name="image" id="image" value={contact.image} onChange={readValue} className="form-control"  placeholder="https://xyz.cpm/image1.jpj" required />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="mobile">Mobile</label>
                                        <input type="number" name="mobile" id="mobile" value={contact.mobile} onChange={readValue} className="form-control"  placeholder="99xxx 00xxx" required />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" id="email" value={contact.email} onChange={readValue} className="form-control"  placeholder="name@domain.com" required />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="address">Address</label>
                                        <textarea type="address" name="address" id="address" value={contact.address} onChange={readValue} cols="30" rows="10" className="form-control" required placeholder="address here" ></textarea>
                                    </div>
                                    <div className="form-group mt-2">
                                        <input type="submit" value="Update Contact" className="btn btn-outline-success" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


        </div>
    )
}

export default Update