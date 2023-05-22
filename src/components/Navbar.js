import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { result, searchUser } from '../crudslice/userDetails';
import { useGetProductQuery } from '../features/apislice';

const Navbar = () => {

    const dispatch = useDispatch();
    const allusers = useSelector((state) => state.app?.users);
    const [searchData, setSearchData] = useState("");


    const { data: singleproductdata } = useGetProductQuery(searchData);

    // console.log('singleproductdata', singleproductdata)

    useEffect(() => {
        dispatch(searchUser(searchData));
        dispatch(result(singleproductdata))

    }, [searchData]);



    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid ">
                        <h4 className="navbar-brand">RTK</h4>

                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        Create Post
                                    </Link>
                                </li>
                                <li className="nav-item" style={{ marginLeft: "16px" }}>
                                    <Link to="/read" className="nav-link">
                                        All Post
                                        ({allusers?.length})
                                    </Link>
                                </li>
                                <li className="nav-item" style={{ marginLeft: "16px" }}>
                                    <Link to="/rtk" className="nav-link">
                                        Rtk Query
                                    </Link>
                                </li>
                            </ul>
                            <input
                                className="form-control me-2 w-50"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={searchData}
                                onChange={(e) => setSearchData(e.target.value)}
                            />
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default Navbar;
