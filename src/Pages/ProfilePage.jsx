
import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { userData } from "../UserDataContext"

export default function ProfilePage() {
    const { user, ready } = useContext(userData);
    if (window.location.href.substr(-2) !== '?r') {
        window.location = window.location.href + '?r';
    }
    return (
        <div>
            <div className="hidden  xs:flex sm:flex flex-col px-8 py-4">
                <div className="py-8 px-4 border border-8 border-primary-600  rounded-2xl bg-white shadow-xl">
                    <div className="text-2xl font-main">
                        <h2>Welcome {user?.fullName}</h2>
                    </div>
                    <div className="mt-4 py-4 px-4 border border-2 rounded-2xl relative flex flex-col gap-4">
                        <Link to="/EditProfile">
                            <div className="absolute top-2 right-2 flex flex-col items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                                <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                            </svg>
                                Edit
                            </div>
                        </Link>
                        <div className="text-lg font-semibold">
                            <label className="font-cool text-xl pr-4">Name : </label>
                            <label className="font-main font-thin">{user?.fullName}</label>
                        </div>
                        <div className="text-lg font-semibold">
                            <label className="font-cool text-xl pr-4">Email : </label>
                            <label className="font-main font-thin">{user?.email}</label>
                        </div>
                        <Link to='/cart'>
                            <h3 className="font-link text-lg underline text-primary w-fit px-3 py-1  rounded-2xl">My Cart</h3>
                        </Link>
                        <Link to='/myproducts'>
                            <h3 className="font-link text-lg underline text-primary w-fit px-3 py-1  rounded-2xl">My Products</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}