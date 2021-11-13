import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
// --------------------------link-----------------

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [addAdmin, setAddAdmin] = useState(false)



    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleMakeAdmin = e => {
        const user = { email };
        fetch('http://localhost:5000/admin', {
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
            <h2>Make an Admin</h2>
            <form onSubmit={handleMakeAdmin}>

                <input

                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                />
                <br />
                <br />
                <Button type="submit" className="btn-prymary" >Make Admin</Button>
            </form>

        </div>
    );
};

export default MakeAdmin;