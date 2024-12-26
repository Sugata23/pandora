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
        <div className="relative w-screen h-dvh p-2 grid grid-cols-1 lg:grid-cols-[1fr, 1.2fr] lg:gap-2">
            <div className="flex flex-col p-4">
                <Link to="/" className='max-w-max mx-auto lg:mx-0'>
                <img src={logoLight} alt="Pandora logo" width={133} height={24} className='dark:hidden' />
                <img src={logoDark} alt="Pandora logo" width={133} height={24} className='hidden dark:block' />
                </Link> 
                <div className="flex flex-col gap-2 max-w-[480px] w-full mx-auto">
                    <h2 className='text-displaySmall font-semibold text-light-onBackground
                    dark:text-dark-onBackground text-center'>Create an account</h2>
                    <p className='text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-center mt-1 mb-5'>Register today and gain access to powerful tools that will supercharge your idea</p>
                    <Form 
                    method='POST'
                    className='grid grid-cols-1 gap-4'>
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
                <img src={banner} alt="Pandora logo" className='img-cover'  />
                <p className=''>Pandora - chat to supercharge your idea</p>
            </div>
        </div>
        </>
    )
}

export default Register