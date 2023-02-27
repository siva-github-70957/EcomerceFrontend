import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { userData } from '../UserDataContext';

export default function LoginPage() {


    let { user, setUser } = useContext(userData);

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');

    const [lemail, setLemail] = useState('');
    const [lpassword, setLpassword] = useState('');
    async function NewRegister() {
        try {
            const userTemp = await axios.post('/register', {
                email, fullName, password
            });
            console.log(userTemp.fullName);
            alert('registration succes ');
        } catch (err) {
            console.log('error while sending posting to register : ', err);
        }
    }

    async function loginRequest() {
        try {
            const userTemp = await axios.post('/login', {
                email: lemail,
                lpassword
            });
            userTemp.status === 200 && (
                alert('login success')
            )
            setUser(userTemp);
            navigate('/');
        } catch (e) {
            alert('login failed');
        }
    }

    return (
        <div>
            <div className=" pri-bg flex items-center justify-center py-16">
                <div className=" grid  sm:grid-col-1 md:grid-cols-1 lg:grid-cols-2  w-fit xs:gap-10 gap-20 justify-around items-center">
                    <div className=" bg-white border border-gray-400  xs:px-1 sm:px-1 px-3 h-96">
                        <div className=" mt-2  xs:px-1 sm:px-1 px-3 py-4 register flex h-96">
                            <div className=" flex flex-col  justify-between w-fit items-center xs:px-1 sm:px-1 px-4  ">
                                <label className=" xs:text-md lg:text-xl font-bold text-gray-700">New Here, You can always Register here !</label>
                                <input onChange={(e) => setFullName(e.target.value)} type="text" placeholder="Full Name" value={fullName} />
                                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" value={email} />
                                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" value={password} />
                                <button onClick={NewRegister} className='mb-3 btn bg-primary text-white text-lg font-bold w-fit px-12 py-2 shadow-below'>
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-white border border-gray-400  xs:px-1 sm:px-1 px-3 ">
                        <div className=" mt-2 xs:px-1 sm:px-1 px-3 xs:py-2 py-4 login flex xs:h-72 h-96 ">
                            <div className=" flex flex-col   justify-evenly w-fit items-center xs:px-1 sm:px-1 px-4  ">
                                <label className=" xs:text-md lg:text-xl font-bold text-gray-700"> Signin here ! </label>
                                <input onChange={(e) => setLemail(e.target.value)} className="" type="email" placeholder="Email" value={lemail} />
                                <input onChange={(e) => setLpassword(e.target.value)} className="" type="password" placeholder="Password" value={lpassword} />
                                <button onClick={loginRequest} className='mb-3 btn bg-primary text-white text-lg font-bold w-fit px-12 py-2 shadow-below'>
                                    Log In
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}