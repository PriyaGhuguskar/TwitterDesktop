import React from 'react'
import twitterLogo from '../assets/twitterLogo.png'
import './login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();

    const homepage = () => {
        navigate('/')
    }

    const tosignupPage = () => {
        navigate('/signup')
    }
    return (
        <div>

            <div className='login-wrapper'>
                <img className='twitterLogo' src={twitterLogo} alt='twitterLogo' />
                <div className='login-title'>Log in to Twitter</div>
                {/* <div className='input-wrapper'> */}
                <input className='inputDiv' placeholder='Phone number, email address' />
                {/* </div> */}

                {/* <div className='input-wrapper'> */}
                <input className='inputDiv' placeholder='Password' />
                {/* </div> */}
                <div className='login-btn' onClick={homepage}>Log In</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div className='bottom-err'>Forgot password?</div>
                    <div className='bottom-err' style={{ cursor: 'pointer' }} onClick={tosignupPage}>Sign up to Twitter</div>
                </div>
            </div>
        </div>
    )
}

export default Login