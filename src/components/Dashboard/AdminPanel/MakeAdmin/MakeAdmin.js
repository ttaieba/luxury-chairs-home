import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
// --------------------------link-----------------

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [addAdmin, setAddAdmin] = useState(false)



    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleCreateAdmin = e => {
        const user = { email };
        fetch('https://polar-chamber-50247.herokuapp.com/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {

                    setAddAdmin(true)
                    alert(' Admin successfully make');
                }

            })

        e.preventDefault()
    }
    return (
        <div>
            <h2>Create an Admin</h2>
            <form onSubmit={handleCreateAdmin} className="login">

                <input
                    placeholder="Enter a Email"
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                />
                <br />
                <br />
                <Button type="submit" className="btn-success" >Create Admin</Button>


            </form>

        </div>
    );
};

export default MakeAdmin;