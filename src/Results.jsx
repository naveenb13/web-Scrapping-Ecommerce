import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import { env } from './config'

function Results() {

    const [result, setResult] = useState([])

    let loadData = async () => {
        const input = document.getElementById("inp1").value;
        let result = await axios.get(`${env.api}/${input}`, {
            headers: {
                "authorization": window.localStorage.getItem("app-token")
            }
        });
        setResult(result.data)
    }


    return (
        <div className='container-fluid container3'>
            <form className='form3'>
                <input id="inp1" className='input1' type={"text"} placeholder="Search iphone" />&nbsp;&nbsp;
                <Link className='btn btn-dark' onClick={loadData}>Search</Link>&nbsp;&nbsp;
                <Link to={"/home/addNewProduct"} className='btn btn-dark' >Add Product</Link>
            </form><br /><br /><br />
            <div className='row'>
                {
                    result.map((card) => {
                        return <Card card={card}></Card>
                    })
                }
            </div>
        </div>
    )
}

export default Results