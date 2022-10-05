import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { env } from './config'

function Signup() {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate: (values) => {
    },
    onSubmit: async (values) => {
      let signup = await axios.post(`${env.api}/register`, values)
      console.log(signup)
      alert("Account created. Now Sign in")
      navigate("/")
    }
  })

  return (
    <div className='container text-center'>
      <form className='form2' onSubmit={formik.handleSubmit}>
        <h1>SIGN UP</h1><br />
        <label className='label2'>Username</label>
        <input type={"text"} name='username' value={formik.values.username} onChange={formik.handleChange} /><br /><br />
        <label className='label2'>Email</label>
        <input type={"email"} name='email' value={formik.values.email} onChange={formik.handleChange} /><br /><br />
        <label className='label2'>Password</label>
        <input type={"password"} name='password' value={formik.values.password} onChange={formik.handleChange} /><br /><br />
        <input className='btn btn-success' type={"submit"} value="Submit"></input>
      </form>
    </div>
  )
}

export default Signup