import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { userData } from '../UserDataContext';

export default function ProductFullPage() {
    const { cart, setCart } = useContext(userData);
    const { id } = useParams();
    const [pro, setPro] = useState(null);
    useEffect(() => {
        axios.get(`/myproducts/${id}`)
            .then((res) => setPro(res.data));
    }, [])

    async function addItemToCart() {
        const res = axios.post('/toCart', { id });
        if (!res) {
            alert('added to cart');
        }
    }
    return (
        <div>
            <div className='border border-3 px-2 py-2 '>
                <div className='bg-gray-100 '>
                    <div className='lg:grid lg:grid-cols-[4fr_1fr] px-3 py-3 bg-gray-300 rounded-xl'>
                        <div>
                            <img className='' src={pro?.images[0]}></img>
                        </div>
                        <div className='border border-2 border-gray-200 flex xs:flex-row lg:flex-col lg:items-center overflow-scroll gap-4 py-2'>
                            {
                                pro?.images.map((pic) => (
                                    <div className=''>
                                        <img className='xs:h-32 xs:w-32 lg:w-fit ' src={pic}></img>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className=' px-2 py-3 lg:py-5'>
                        <label className='font-main text-3xl lg:text-5xl '>{pro?.name}</label>
                    </div>
                    <div className='py-2 pl-2 flex items-center'>
                        <label className='font-main text-3xl '>Price:
                            <span className='font-cool text-black pl-4 lg:pl-16 underline lg:text-7xl'>{pro?.price}</span></label>
                    </div>
                    <div className='px-2 pt-2'>
                        <p className='font-normal text-3xl lg:text-4xl text-gray'>{pro?.description}</p>
                    </div>
                    <div className='px-2 pt-2'>
                        <label className='font-main text-2xl '>Highlights: </label>
                        <div className=' pl-10 py-2 flex flex-col'>
                            {pro?.highlights.map((point) => (
                                <label className='font-normal text-3xl text-gray'>- {point}</label>
                            ))}
                        </div>
                    </div>
                    {/* <div className='w-full flex justify-center py-4'>
                        <button className='mb-3 btn bg-primary text-white text-lg font-bold w-fit px-12 py-2 shadow-below'
                            onClick={addItemToCart}> Add to Cart</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}