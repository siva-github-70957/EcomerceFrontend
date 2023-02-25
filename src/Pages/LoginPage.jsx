

export default function LoginPage() {

    return (
        <div>
            <div className=" pri-bg flex items-center justify-center py-16">
                <div className=" grid  sm:grid-col-1 md:grid-cols-1 lg:grid-cols-2  w-fit xs:gap-10 gap-20 justify-around items-center">
                    <div className=" bg-white border border-gray-400  xs:px-1 sm:px-1 px-3 h-96">
                        <div className=" mt-2  xs:px-1 sm:px-1 px-3 py-4 register flex h-96">
                            <div className=" flex flex-col  justify-between w-fit items-center xs:px-1 sm:px-1 px-4  ">
                                <label className=" xs:text-md lg:text-xl font-bold text-gray-700">New Here, You can always Register here !</label>
                                <input type="text" placeholder="Full Name" />
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <button className='mb-3 btn bg-primary text-white text-lg font-bold w-fit px-12 py-2 shadow-below'>
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-white border border-gray-400  xs:px-1 sm:px-1 px-3 ">
                        <div className=" mt-2 xs:px-1 sm:px-1 px-3 xs:py-2 py-4 login flex xs:h-72 h-96 ">
                            <div className=" flex flex-col   justify-evenly w-fit items-center xs:px-1 sm:px-1 px-4  ">
                                <label className=" xs:text-md lg:text-xl font-bold text-gray-700"> Signin here !</label>
                                <input className="" type="email" placeholder="Email" />
                                <input className="" type="password" placeholder="Password" />
                                <button className='mb-3 btn bg-primary text-white text-lg font-bold w-fit px-12 py-2 shadow-below'>
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