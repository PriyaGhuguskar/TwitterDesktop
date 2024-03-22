import React from 'react'
import twitterLogo from '../assets/twitterLogo.png'
import './signup.css'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate();
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const Day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    const year = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009]

    const toLoginPage = () => {
        navigate('/login')
    }

    return (
        <div>
            <div className='sigup-wrapper'>
                <img className='signup-twitterLogo' src={twitterLogo} alt='twitterLogo' />
                <div className='signup-title'>Create an account</div>

                <input className='signup-inputDiv' placeholder='Name' />

                <input className='signup-inputDiv' placeholder='Phone Number' />

                <div className='use-email'>Use email</div>

                <div style={{ display: 'flex', alignSelf: 'flex-start', fontSize: '18px', fontWeight: '700', lineHeight: '23px', marginBottom: '-10px' }}>
                    Date of Birth</div>
                <div className='date-text'>
                    Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue.
                    Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie
                    a sit. Elit congue.
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <select className='month-selection' name="Month" title='Month'>
                        <option value="">Month</option>
                        {month.map((item) => {
                            return <option key={item} value={item}>{item}</option>
                        })}

                    </select>

                    <select className='Day-selection' name="Day" title='Day' >
                        <option value="">Day</option>
                        {Day.map((item) => {
                            return <option key={item} value={item}>{item}</option>
                        })}
                    </select>

                    <select className='Year-selection' name="Year" id="Year">
                        <option value="">Year</option>
                        {year.map((item) => {
                            return <option key={item} value={item}>{item}</option>
                        })}
                    </select>
                </div>

                <div className='next-btn' onClick={toLoginPage}>Next</div>

            </div>
        </div>
    )
}

export default Signup