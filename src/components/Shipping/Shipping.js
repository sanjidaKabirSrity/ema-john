import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipping.css';
import useAuth from '../../hooks/useAuth';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="shipping-form">
                <input defaultValue={user.displayName} {...register("example")} />
                <input defaultValue={user.email} {...register("exampleRequired", { required: true })} />
                {errors.exampleRequired && <span className="error">This field is required</span>}
                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;