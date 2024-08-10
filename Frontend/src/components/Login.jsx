import React from 'react'
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"


function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data)

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" 
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={()=> document.getElementById("my_modal_3").close()}>
              ✕
            </Link>
          <h3 className="font-bold text-lg">Log in</h3>
          <div className='mt-5'>
            <span>Email: </span>
            <br />
            <input 
              type="email"
              placeholder='Enter email'
              className='mt-2 w-80 px-3 py-2 border rounded-md outline-none dark:text-white bg-transparent' 
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          <div className='mt-4'>
            <span>Password: </span>
            <br />
            <input 
              type="password"
              placeholder='Enter password' 
              {...register("password", { required: true })}
              className='mt-2 w-80 px-3 py-2 border rounded-md outline-none dark:text-white bg-transparent'
            />
            <br />
            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          <div className='mt-5'>
            <button className='bg-pink-500 px-5 py-2 rounded-md text-white hover:bg-pink-700 duration-200'>
              Log in
            </button>
            <p className='mt-2'>Not registered? {} 
              <Link to="/signup" className='underline text-blue-500 font-semibold cursor-pointer'>
                Sign up
              </Link>{" "}
            </p>
          </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default Login
