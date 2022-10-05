import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import { env } from './config'

function Addnewproduct() {

    const formik = useFormik({
        initialValues: {
            title: "",
            image: "",
            discount: "",
            price: "",
            rating: "",
        },
        validate: (values) => {
        },
        onSubmit: async (values) => {
            let user = await axios.post(`${env.api}/iphone`, values, {
                headers: {
                    "authorization": window.localStorage.getItem("app-token")
                }
            })
            console.log(user)
            alert("Product created")
        }
    })

    return (
        <div className='container'>
            <form className='form4' onSubmit={formik.handleSubmit}>
                <h1 className='text-center'>Add New Product</h1><br />
                <label className='addprod'>Name</label>
                <input className='form-control' type={"text"} value={formik.values.title} onChange={formik.handleChange} name="title" placeholder='Example = Iphone 13'></input><span style={{ color: "red" }}>Enter product Name</span><br /><br />
                <label className='addprod'>Image</label>
                <input className='form-control' type={"text"} value={formik.values.image} onChange={formik.handleChange} name="image" placeholder='Example = http/https://. . . . . . .jpeg(or)png'></input><span style={{ color: "red" }}>Please enter image URL in http/https or as a Link</span><br /><br />
                <label className='addprod'>Discount/Actual Amount</label>
                <input className='form-control' type={"text"} value={formik.values.discount} onChange={formik.handleChange} name="discount" placeholder='Example = 76000 , 15000'></input><span style={{ color: "red" }}>Please enter the discounted amount of the product</span><br /><br />
                <label className='addprod'>Original Price</label>
                <input className='form-control' type={"text"} value={formik.values.price} onChange={formik.handleChange} name="price" placeholder='Example = 76000 , 15000'></input><span style={{ color: "red" }}>Please enter the actual amount of the product</span><br /><br />
                <label className='addprod'>Rating of the Product</label>
                <input className='form-control' type={"text"} value={formik.values.rating} onChange={formik.handleChange} name="rating" placeholder='Example = 3 (or) 4.5'></input><span style={{ color: "red" }}>Please enter number between 0 to 5</span><br /><br />
                <button className='btn btn-success' type={"submit"} value="Submit">Submit</button>&nbsp;&nbsp;&nbsp;
                <Link to={"/home"} className='btn btn-warning'>Back</Link>
            </form>
        </div>
    )
}

export default Addnewproduct