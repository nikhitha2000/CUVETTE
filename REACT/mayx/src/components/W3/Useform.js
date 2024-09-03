import React from 'react'
import {useForm} from 'react-hook-form'

function Useform() {
    const {register,handleSubmit,formState:{errors},} = useForm();
    const onSubmit = data => console.log(data);
  return (
    <div>
        <h1>Form Validation</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input{...register("email",{
                required: "Email is required",
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })} type= "email" placeholder='email'/>{errors.email&&(<div>{errors.email.message}</div>)}<br/>
            <input{...register("password",{
                required:"password is required",
                minLength:8,
            })} type='password' placeholder='password'/>{errors.password&&(<div>{errors.password.message}</div>)}<br/>
            <button type = "submit">Submit</button>
        </form>
    </div>
  )
}

export default Useform