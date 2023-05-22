import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteuser, showUser } from '../crudslice/userDetails';
import CustomModal from './CustomModal';
import { Link } from 'react-router-dom';

const Read = () => {

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false)
  const [radioData, setRadioData] = useState("");
  const [id, setId] = useState();

  const { users, loading, searchData } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser())
  }, []);

  if (loading) {
    return (<h2>loading...</h2>)
  }


  return (
    <div>
      {open && < CustomModal id={id} open={open} setOpen={setOpen} />}
      <h2>all data</h2>
      <input
        class="form-check-input"
        name="gender"
        checked={radioData === ""}
        type="radio"
        onChange={(e) => setRadioData("")}
      />
      <label class="form-check-label">All</label>
      <input
        class="form-check-input"
        name="gender"
        checked={radioData === "male"}
        value="male"
        type="radio"
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label class="form-check-label">Male</label>
      <input
        class="form-check-input"
        name="gender"
        value="female"
        checked={radioData === "female"}
        type="radio"
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label class="form-check-label">Female</label>
      <div>
        {users &&

          users.filter((ele) => {
            if (searchData.length === 0) {
              return ele
            } else {
              return ele.name.toLowerCase().includes(searchData.toLowerCase())
            }
          }).filter((ele) => {
            if (radioData === "male") {
              return ele.gender === radioData;
            } else if (radioData === "female") {
              return ele.gender === radioData;
            } else return ele;
          })




            .map((item) => (
              <div className="card w-50 mx-auto my-2" key={item.id}>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{item.name}</h6>
                  <p className="card-text">{item.gender}</p>
                  <button className="card-link" onClick={() => [setId(item.id), setOpen(true)]}>view</button>
                  <Link to={`/edit/${item.id}`} className="card-link">Edit</Link>
                  <Link onClick={() => dispatch(deleteuser(item.id))} className="card-link">Delete</Link>
                </div>
              </div>
            ))}
      </div>
    </div>
  )
}

export default Read;
