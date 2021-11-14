import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../../hooks/useAuth';
// ---------------------links-------------------

const PostReviews = () => {
    const { user } = useAuth()

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch(`https://polar-chamber-50247.herokuapp.com/Addreviews`, {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())


            .then(result => {
                if (result.insertedId) {
                    alert('  sucessfully post your feedback');
                    reset()

                }
            })


    }

    return (
        <div>
            <h1 className="text-color text-font">Leave Your Reviews Here </h1>



            <form onSubmit={handleSubmit(onSubmit)} className="login">

                <input Value={user.displayName} className="m-2" {...register("name")} />
                <br />
                <input Value={user.email} className="m-2" {...register("email")} />
                <br />

                <input className="m-2 py-4" {...register("Review")} type="text" placeholder="Review" />
                <br />



                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input className=" btn-primary text-font p-2" type="submit" />
            </form>

        </div>
    );
};

export default PostReviews;