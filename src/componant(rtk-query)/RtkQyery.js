import React, { useEffect, useState } from 'react';
import { useGetallProductQuery } from '../features/apislice'
import { useSelector } from 'react-redux';


const RtkQyery = () => {

    const { data: allproductdata } = useGetallProductQuery();
    console.log('allproductdata', allproductdata)

    const { searcResult } = useSelector((state) => state.app);
    console.log('searchitem---', searcResult)


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {allproductdata.products?.map((itm) => (
                        <div className="col-md-3" key={itm.id}>
                            <div className="card">
                                <div className="card-body">
                                    <img className="card-img-top" src={itm.thumbnail} alt="Card image cap" />
                                    <h5 className="card-title">{itm.brand}</h5>
                                    <h6 className="card-title">{itm.category}</h6>
                                    <h5 className="card-text">{itm.title}</h5>
                                    <p className="card-text">{itm.description}</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default RtkQyery;
