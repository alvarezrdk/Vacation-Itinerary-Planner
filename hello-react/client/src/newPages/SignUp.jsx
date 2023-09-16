import React from 'react'
import './SignUp.css'

function Signup() {



    return (
        <>
            <div className='signupLoginMain'>
                <div className='signupLoginSub'>
                    <h2 className='signupLoginTitle'>Login</h2>
                    <form>
                    <div className='formSub'>
                            <input className='formSubInput' placeholder='Username' type="text" />
                        </div>
                        <div className='formSub'>
                            <input className='formSubInput' placeholder='Password' type="password" />
                        </div>
                        <div className='formSub'>
                            <button className='formSubButton' type="submit">Login</button>
                        </div>
                    </form>
                </div>
                <div className='signupLoginSub'>
                    <h2 className='signupLoginTitle'>Signup</h2>
                    <form>
                        <div className='formSub'>
                            <input className='formSubInput' placeholder='Username' type="text" />
                        </div>
                        <div className='formSub'>
                            <input className='formSubInput' placeholder='Password' type="password" />
                        </div>
                        <div className='formSub'>
                            <button className='formSubButton' type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup