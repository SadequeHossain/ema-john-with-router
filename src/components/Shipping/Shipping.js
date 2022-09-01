import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import './Shipping.css'
const Shipping = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { user } = useAuth();
    const onSubmit = data => {

        const savedCart = getStoredCart();
        data.order = savedCart;
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order was successfully placed')
                    clearTheCart();
                    reset();
                }
            })
    };
    return (
        <div >
            <form className="shipping" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input placeholder="Your Full Name" defaultValue={user.displayName} {...register("name")} />

                {/* include validation with required or other standard HTML validation rules */}
                <input defaultValue={user.email} placeholder="Your Email" {...register("email", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Addres" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="Phone Number" defaultValue="" {...register("phone")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;