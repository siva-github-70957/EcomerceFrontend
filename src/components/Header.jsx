import React, { useContext, useEffect, useState } from "react";
import '../App.css'
import { Link } from "react-router-dom";
import { userData } from "../UserDataContext";
import axios from "axios";
export default function Header() {
    // storing user from usercontext
    const { user, setUser, cart } = useContext(userData);

    //reloading page for one time.....
    if (window.location.href.substr(-2) !== '?r') {
        window.location = window.location.href + '?r';
    }

    const [menu, setMenu] = useState(' xs:w-10 xs:h-10 lg:w-12 lg:h-12');
    const [crossMenu, setcrossMenu] = useState('xs:hidden absolute top-0  w-10 h-10 sm:hidden md:hidden  lg:hidden');
    const [dpmenu, setDpmenu] = useState('absolute bg-primary w-44 hidden ');
    const [stat, setStat] = useState(false);

    // For Drop down menu in mobile website view
    function changeMenu(stat) {
        if (stat) {
            // menu hide cross out
            setMenu(menu.concat(' xs:hidden '));
            setcrossMenu(crossMenu.replace('xs:hidden', ''));
            setDpmenu(dpmenu.replace('hidden', ''));
        }
        else {
            setMenu(menu.replace(' xs:hidden', ''));
            setcrossMenu(crossMenu.concat(' xs:hidden'));
            setDpmenu(dpmenu.concat(' hidden'));
        }
        setStat(stat);
    }

    async function handleLogout() {
        const loggedOut = await axios.post('/logout');
        if (loggedOut.status === 200) {
            setUser(null);
            alert('logged Out success');
        }
        else {
            alert('logout failed');
        }

    }

    return (
        <div className="sticky top-0 ">
            <div className=" bg-primary min-h-fit  overflow-hidden ">
                <div className="lg:hidden md:hidden absolute xs:top-5 lg:top-9 min-h-max w-fit ">
                    <svg onClick={() => changeMenu(!stat)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={menu}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg onClick={() => changeMenu(!stat)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={crossMenu}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className=" px-16  py-3 flex justify-between items-center">
                    <div className=" flex gap-5 items-center justify-center ">
                        <div className="hidden md:flex lg:flex flex-col items-center text-xs text-white hover:text-yellow-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            <h2>Search</h2>
                        </div>
                        <div className="hidden md:flex lg:flex flex-col items-center text-xs  text-white hover:text-yellow-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            Locate us
                        </div>
                    </div>
                    <div className="xs:text-4xl text-purple-600  text-6xl text-white">
                        <Link to='/home'>
                            <div className="xs:mt-0 mt-4 font-main">
                                <h2>Bliss</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="flex gap-5 items-center justify-center">
                        {!user && (
                            <Link to='/login'>
                                <div className=" xs:flex md:flex lg:flex flex-col items-center text-xs text-white hover:text-yellow-300">
                                    <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
                                    </svg></div>
                                    Log In
                                </div>
                            </Link>
                        )}
                        {user && (
                            <div className=" flex flex-col items-center   text-xs text-white hover:text-yellow-300">
                                <Link to='/profile'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </Link>
                                <div>
                                    {user.fullName}
                                </div>
                            </div>
                        )}
                        <div className=" relative xs:flex xs:-mr-10 lg:mr-0 md:flex lg:flex flex-col items-center text-xs  text-white hover:text-yellow-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            Bag
                            <div className="absolute animate-bounce min-w-min px-1 bg-yellow-200 bottom-6 right-0 text-black text-sm rounded-2xl ">
                                <p>{cart}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="pb-2 hidden md:flex lg:flex gap-6 justify-center text-lg text-white font-extrabold">
                        <p className="cursor-pointer font-link tracking-widest "> Electronics </p>
                        <p>|</p>
                        <p className="cursor-pointer font-link tracking-widest"> Home & Decor</p>
                        <p>|</p>
                        <p className="cursor-pointer font-link tracking-widest"> Body Care </p>
                        <p>|</p>
                        <p className="cursor-pointer font-link tracking-widest"> Tv's & Appliances </p>
                    </div>
                </div>
                <div className={dpmenu}>
                    <ul className="text-white py-4 pl-5 flex flex-col gap-5">
                        <Link to='/home'>Home</Link>
                        <li>Profile</li>
                        {!user && (<Link to='/login'>Login</Link>)}
                        {user && (<li onClick={handleLogout}>Logout</li>)}
                        <Link to='/login'>Register</Link>
                    </ul>
                </div>
            </div>

        </div>
    )
}