import React from 'react'

import PageTitle from '../components/PageTitle'
import TextFields from '../components/TextFields'
import { Button } from '../components/Button'

import { Link, Form } from 'react-router-dom'
import { logoLight, logoDark, banner } from '../assets/assets'
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
                    <Form 
                    method='POST'
                    className=''>
                        <TextFields
                        name='name'
                        label="Full Name"
                        type='text'
                        required={true}
                        placeholder='Full name'
                        autofocus={true}
                        />
                        <TextFields
                        name='email'
                        label="Email Address"
                        type='email'
                        required={true}
                        placeholder='Email address'
                        />
                        <TextFields
                        name='password'
                        label="Password"
                        type='password'
                        required={true}
                        placeholder='Password'
                        />
                        <Button
                        type='submit'
                        >
                            Create an account
                        </Button>
                    </Form>
                    <p className="">Already have an account? <Link to="/login" className=''>Login</Link></p>
                </div>
                <p className=''>&copy; {new Date().getFullYear()} Pandora. All rights reserved</p>
            </div>
            <div className="">
                <img src={banner} alt="Pandora logo" width={133} height={24} />
            </div>
        </div>
        </>
    )
}

export default Register