import React from 'react';
import { useForm } from "react-hook-form";
// -------------------------links-----------------
const AddProducts = () => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch(`https://polar-chamber-50247.herokuapp.com/AddProducts`, {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())


            .then(result => {
                if (result.insertedId) {
                    alert('  sucessfully added product');
                    reset()

                }
            })


    }

    return (
        <div className="bacground py-3 ">
            <h1 className="text-color">Add a  Product</h1>



            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    defaultValue="https://templates.hibootstrap.com/ecop/default/assets/images/products/products4.png"
                    className="m-2 w-50"
                    {...register("img")}
                    placeholder=" url" />
                <br />
                <input
                    className="m-2 w-50"
                    {...register("name")}
                    placeholder="Product name" />
                <br />
                <input
                    className="m-2 w-50"
                    {...register("price")}
                    type="number"
                    placeholder="Price" />
                <br />
                <textarea
                    className="py-4 w-50 "
                    {...register("des")}
                    placeholder="descriptions"
                />


                <br />



                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input
                    className=" btn-primary p-2"
                    type="submit" />
            </form>

        </div>
    );
};

export default AddProducts;