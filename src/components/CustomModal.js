import React from 'react';
import './CustomModal.css'
import { useSelector } from 'react-redux';



const CustomModal = ({ id, open, setOpen }) => {



    const allusers = useSelector((state) => state.app.users);
    const singleuser = allusers.filter((ele) => ele.id === id);


    return (

        <div className='modalBackground'>
            <div className='modalContainer'>
                <button onClick={() => setOpen(false)}>close</button>
                <h2>{singleuser[0].name}</h2>
                <h4>{singleuser[0].email}</h4>
                <h3>{singleuser[0].age}</h3>
                <p>{singleuser[0].gender}</p>
            </div>
        </div>
        
    )
}

export default CustomModal;
