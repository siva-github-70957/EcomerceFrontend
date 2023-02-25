
export default function Footer() {
    return (
        <div className="bottom-0">
            <div>
                <div className="sm:flex sm:flex-col-reverse md:flex md:flex-col-reverse lg:grid lg:grid-cols-[4fr_1fr] w-auto xs:h-36    lg:h-72 ">
                    <div>
                        <div className=" xs:hidden  py-6 h-full text-white bg-primary lg:flex justify-around">
                            <div>
                                <div className="cursor-pointer flex flex-col gap-1 items-center">
                                    <label className="lg:text-2xl xs:text-xs sm:text-xs md:text-sm font-bold text-lg" >Certified</label>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                    </svg>
                                    <label className="font-semibold ">Corporation</label>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col items-start gap-4">
                                    <div className="text-2xl cursor-pointer font-extrabold"><label>Company</label></div>
                                    <div className="cursor-pointer font-semibold">
                                        <p>Who we are</p>
                                        <p>Find Bliss near you</p>
                                        <p>Bliss spa</p>
                                        <p>Shop</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl cursor-pointer font-extrabold"><label>Customer Care</label></div>
                                <div className="cursor-pointer font-semibold">
                                    <p>Gift Cards</p>
                                    <p>Contact Us</p>
                                    <p>Returns</p>
                                    <p>Shipping</p>
                                    <p>Ordering & Payment</p>
                                </div>
                            </div>
                            <div>
                                <div className="cursor-pointer font-extrabold"><label>The Dry Stuff</label></div>
                                <div className="cursor-pointer font-semibold">
                                    <p>Privacy Policy</p>
                                    <p>Terms & Conditions</p>
                                    <p>Accessibility Statement</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-secondary px-5 xs:py-6 py-12">
                        <div className="flex flex-col items-center xs:gap-2 gap-6">
                            <h4 className="text-2xl">Hear The Latest</h4>
                            <input type="email" placeholder="Email" />
                            <button className=' btn w-11/12 bg-primary text-white text-lg font-bold  lg:px-14 py-2 shadow-below'>
                                Submit
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 md:hidden lg:hidden">
                        <div className=" px-4 mt-2  flex justify-between border border-b-white  ">
                            <div>Customer Care</div>
                            <div className="text-xl">+</div>
                        </div>
                        <div className=" px-4 mt-2  flex justify-between border border-b-white  ">
                            <div>Company</div>
                            <div className="text-xl">+</div>
                        </div>
                        <div className=" px-4 mt-2  flex justify-between border border-b-white  ">
                            <div>Dry Stuff</div>
                            <div className="text-xl">+</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}