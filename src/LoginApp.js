import React from 'react'

export const LoginApp = () => {
    return (
        <div className='login__main-content'>
            <div className='login__user-img'>
                <img src="https://www.svgrepo.com/show/79517/user.svg" alt='user' />
            </div>
            <div className='login__content'>
                <input className='mb-20' type="email" placeholder='Email ID' />
                <input className='mb-20' type="password" placeholder='Password' />
                <div className='login__checkbox-ref mt-20'>
                    <p>
                        <input className='checkbox' type="checkbox" />
                        <span>Remember me?</span>
                    </p>
                    <a href='index.html'>Forgot Password?</a>
                </div>
                <button className='mt-20 pointer'>LOGIN</button>
            </div>
        </div>
    )
}
