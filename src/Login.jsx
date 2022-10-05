import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { env } from './config'

function Login() {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async (values) => {
            try {
                let loginData = await axios.post(`${env.api}/login`, values)
                console.log(loginData)
                if (loginData && loginData.status === 200) {

                    window.localStorage.setItem("app-token", loginData.data.token)
                    navigate("/home");
                }
            } catch (error) {
                alert(error.response.data.message)
                console.log(error)
            }
        }
    })
    return (
        <div className='container text-center'>
            <form className='form1' onSubmit={formik.handleSubmit}>
                <h1>LOGIN</h1><br />
                <label className='label2'>Email</label>
                <input className='label1' type={"email"} name="email" value={formik.values.email} onChange={formik.handleChange}></input><br /><br />
                <label className='label2'>Password</label>
                <input className='label1' type={"password"} name="password" value={formik.values.password} onChange={formik.handleChange}></input><br /><br />
                <button className='btn btn-success' type={"submit"}>Login</button>&nbsp;&nbsp;&nbsp;
                <Link to="/signup" class="btn btn-info btn-user btn-block">
                    Signup
                </Link>
            </form>

        </div>
    )
}

export default Login