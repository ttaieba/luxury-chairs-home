import React, { useEffect, useState } from 'react';
import { Container, Row, Table, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

// ----------------------links------------------------

const ManageOrder = () => {
    const [orderManagment, setOrderManagment] = useState([])
    const { register, handleSubmit } = useForm();

    const [status, setStatus] = useState("");
    const [orderId, setOrderId] = useState("")

    // get all---------------------
    useEffect(() => {
        fetch(`https://polar-chamber-50247.herokuapp.com/orderManagment`)
            .then((res) => res.json())
            .then((data) => setOrderManagment(data));
    }, []);

    const handleOrderId = (id) => {
        setOrderId(id);

    };

    // update status for order--------------
    const onSubmit = (data) => {

        fetch(`https://polar-chamber-50247.herokuapp.com/status/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => setStatus(result));
    };

    // delete order -------------------------

    const handleuserDelete = id => {
        const confirm = window.confirm('Are you want to delet user?');

        if (confirm) {
            fetch(`https://polar-chamber-50247.herokuapp.com/orderManagment/${id}`,
                { method: 'DELETE' })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const exsitingUser = orderManagment.filter(user => user._id !== id);
                        setOrderManagment(exsitingUser);
                    }
                });

        }

    }



    return (
        <div>
            <Container className="fluid">
                <h1>Orders Collections</h1>
                <Row xs={12}>

                    <Table responsive="xs" variant="dark">
                        <thead>
                            <tr>
                                <th>user Name</th>

                                <th>Email</th>
                                <th>Products </th>
                                <th>Status </th>
                            </tr>
                        </thead>

                        {
                            orderManagment.map(order => <tbody

                                key={order._id}

                            >

                                <tr>

                                    <td>{order?.userName}</td>

                                    <td>{order?.email}</td>
                                    <td>{order?.Productname}</td>

                                    <td>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <select
                                                onClick={() => handleOrderId(order?._id)}
                                                {...register("status")}
                                            >
                                                <option value={order?.status}>{order?.status}</option>
                                                <option value="shipped ">shipped </option>
                                            </select>
                                            <input type="submit" />
                                        </form>
                                    </td>


                                    <Button onClick={() => handleuserDelete(order?._id)}
                                        variant="outline-danger">delete</Button>
                                </tr>


                            </tbody>)
                        }




                    </Table>
                </Row>
            </Container>
        </div >
    );
};

export default ManageOrder;