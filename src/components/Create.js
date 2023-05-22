import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../crudslice/userDetails';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [users, setUsers] = useState();
    console.log('users', users)
    const getUserdata = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value });
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log('users', users)
        dispatch(createUser(users))
        navigate('/read')
    }



    return (
        <div>
        <h2 className='my-2'>fill the data</h2>
            <form className='w-50 mx-auto my-5' onSubmit={handlesubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" onChange={getUserdata} />

                </div>
                <div className="mb-3">
                    <label className="form-label" >email</label>
                    <input type="email" className="form-control" name='email' onChange={getUserdata} />
                </div>
                <div className="mb-3">
                    <label className="form-label" >age</label>
                    <input type="number" className="form-control" name='age' onChange={getUserdata} />
                </div>

                <div className="mb-3">
                    <input className="form-check-input" name="gender" value="male" onChange={getUserdata} type="radio" />
                    <label className="form-check-label" >
                        Male
                    </label>
                </div>
                <div className="mb-3">
                    <input className="form-check-input" name="gender" value='female' onChange={getUserdata} type="radio" />
                    <label className="form-check-label" >
                        female
                    </label>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Create;
