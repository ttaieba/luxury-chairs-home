import React, { } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

// --------imported--------------------------


const Register = () => {

    const { handdleSubmit, handleEmail, handlePassword, user } = useAuth()







    // -----------------------------------

    return (
        <div className="text-center p-4 my-5">

            <h1 className="mb-4 text-color">
                Register Here
            </h1>
            <div className="login">
                <h4 className="mb-4">{user.email}</h4>




                <form onSubmit={handdleSubmit} >


                    <input onChange={handleEmail} type="email" placeholder="Your Email " name="" id="" />
                    <br />
                    <br />
                    <input onChange={handlePassword} type="password" placeholder="Password" name="" id="" />
                    <br /><br />



                    <Button type="submit">Register</Button>
                    <br /><br />
                </form>
                {/* end */}


                {/* toggole text you can go login form  */}

                <Link to="/login" className="text-primary py-4">Already registered? please login</Link>
            </div>


        </div >
    );
};

export default Register;