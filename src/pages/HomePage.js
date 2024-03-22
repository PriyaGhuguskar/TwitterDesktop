import React from 'react'
import './homepage.css'
import homeLogo from '../assets/homeimg.png'
import twitterLogo from '../assets/twitterLogo.png'
import google from '../assets/google.png'
import apple from '../assets/apple.png'
import { useNavigate } from 'react-router-dom'


const HomePage = () => {
    const navigate = useNavigate();

    const footer = ['About', 'Help Center', 'Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Ads info', 'Blog', 'Status', 'Carrres',
        'Brand Resources', 'Advertsing', 'Marketing', 'Twitter for Business', 'Developers', 'Directory', 'Settings', '© 2021 Twitter, Inc.']

    const tosignupPage = () => {
        navigate('/signup')
    }
    const toLoginPage = () => {
        navigate('/login')
    }
    return (
        <div>
            <div className='homePage-wrapper'>
                <img src={homeLogo} alt='homeLogo' />
                <div className='right-wrapper'>
                    <img className='twitterLogo' src={twitterLogo} alt='twitterLogo' />
                    <div className='home-title'>Happening Now</div>
                    <div className='home-head'>Join Twitter today</div>
                    <div className='signupInput'>
                        <img src={google} alt='google' />
                        <div>Sign up with Google</div>
                    </div>
                    <div className='signupInput'>
                        <img src={apple} alt='google' />
                        <div>Sign up with Apple</div>
                    </div>
                    <div className='signupInput' style={{ cursor: 'pointer' }} onClick={tosignupPage}>
                        <div>Sign up with phone or email</div>
                    </div>
                    <div className='terms'>By singing up you agree to the <span>Terms of Service</span> and  <span>Privacy Policy</span> ,
                        including <span> Cookie Use.</span>
                    </div>
                    <div className='accout-term'>Already have an account? <span style={{ cursor: 'pointer' }} onClick={toLoginPage}>Log in</span> </div>
                </div>
            </div>
            <footer>
                <div className='footer-wrapper'>
                    {footer.map((item) => {
                        return <div key={item}>{item}</div>
                    })}
                </div>
            </footer>

        </div>
    )
}

export default HomePage