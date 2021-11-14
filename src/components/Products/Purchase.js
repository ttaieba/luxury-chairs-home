import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

// // -------------------links----------------------


const Purchase = () => {
    const [purchase, SetPurchase] = useState({})
    const { id } = useParams()
    const { user } = useAuth();

    const email = user.email
    const userName = user.displayName


    useEffect(() => {
        fetch(`https://polar-chamber-50247.herokuapp.com/purchase/${id}`)
            .then(res => res.json())
            .then(data => SetPurchase(data))

    }, [])

    //     // -------------------hook form-----------------------
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        data.email = email;
        data.userName = userName;
        data.status = "pending";


        // orders


        fetch('https://polar-chamber-50247.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('placed your order');


                }
            })
    }

    return (
        <div>
            <Container className="mt-4 p-4 fluid">
                <h6>{user.displayName}</h6>
                <Row className="g-4">




                    {/* ----------------------------------------- */}
                    <Col xs={12} md={6} className="" >

                        <div>
                            <img className="w-50" src={purchase?.img} alt="" />
                        </div>
                        <div className="">
                            <h4>$: {purchase?.price}</h4>
                            <h4>{purchase?.name}</h4>
                            <p>{purchase?.des}</p>
                        </div>

                    </Col>

                    <Col xs={12} md={6} >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Row className="g-2  ">

                                <Col xs={12} md={12} >



                                    <input className=" w-75 " defaultValue={purchase?.img}   {...register("img")} />
                                    <br /><br />
                                    <input className=" w-75 " Value={purchase?.name} {...register("Productname")} /> <br /> <br />


                                    <input className=" w-75 " defaultValue={purchase?.price} {...register("price", { required: true })} />
                                    <br /><br />

                                    <input className=" w-75 " defaultValue={purchase?.des}{...register("des")} />

                                    <br /><br />
                                    {errors.email && <span className="error">This field is required</span>}

                                    <br /><br />
                                </Col>


                                {/* ------------------------------------------ */}
                                <Col xs={12} md={12} className="">
                                    <h5>Shipping Details</h5>
                                    <input className=" w-75 " placeholder="cell " defaultValue="" {...register("cell")} />

                                    <br /><br />
                                    <input className=" w-75 " placeholder="Address" defaultValue="" {...register("address")} />

                                    <br /><br />
                                    <input className=" w-75 " placeholder="Country" defaultValue="" {...register("Country")} />


                                </Col>



                            </Row>


                            <input className=" btn-primary mt-4 w-75 p-2" type="submit" value="Place order" />
                        </form>


                    </Col>




                </Row>

            </Container>
        </div >
    );
};

export default Purchase;