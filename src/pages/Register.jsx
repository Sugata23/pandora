import React from 'react'
import PageTitle from '../components/PageTitle'
import { Link, Form } from 'react-router-dom'
import { logoLight, logoDark } from '../assets/assets'
function Register() {
    return (
        <>
        <PageTitle title="Create an account" />
        <div className="">
            <div className="">
                <Link>
                <img src={logoLight} alt="Pandora logo" width={133} height={24} />
                <img src={logoDark} alt="Pandora logo" width={133} height={24} />
                </Link> 
                <div className="">
                    <h2>Create an account</h2>
                    <p>Register today and gain access to powerful tools that will supercharge your idea</p>
                    <Form></Form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Register