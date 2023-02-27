
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function MyProductsPage() {

    const [myproducts, setMyProducts] = useState([]);

    useEffect(() => {
        axios.get('/myproducts')
            .then((res) => {
                setMyProducts(res.data)
            })
    }, []);


    return (
        <div >
            <div className="mx-4 my-4 px-2 border border-4 h-fit">
                <div className='h-96 max-h-full flex flex-col px-4'>
                    <label className='py-2 font-main text-2xl'>My products</label>
                    {myproducts.length > 0 && (
                        <div className='lg:cursor-pointer xs:flex xs:flex-col overflow-scroll xs:gap-3   '>
                            {myproducts.map((product) => (
                                <Link to={`/myproducts/${product._id}`}>
                                    <div className='px-3 border border-secondary border-2 rounded-xl xs:bg-gray-100 lg:grid lg:grid-cols-[1fr_3fr] lg:gap-3 lg:px-0'>

                                        <div>
                                            <img className='pt-1 pb-2 h-44 w-50% lg:h-fit rounded-xl' src={product.images[0]}></img>
                                        </div>
                                        <div className='py-2  bg-secondary  rounded-2xl'>
                                            <div className=' px-2 flex flex-col lg:w-fit'>
                                                <label className='pt-2 font-normal text-3xl lg:text-2xl'>Name: <label className='xs:text-lg lg:text-3xl font-main'>{product.name}</label></label>
                                                <label className='pt-2 font-normal text-3xl ' >Price: <label className='xs:text-lg lg:text-3xl font-main'>{product.price}</label></label>
                                                {product.highlights.map((point) => (
                                                    <label className='font-normal text-2xl'>- {point}</label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                    {myproducts.length == 0 && (
                        <div>
                            <label className='font-normal'>No products to show</label>
                        </div>
                    )}
                </div>
                <div className='px-2 pt-4 flex justify-center'>
                    <Link to="/products/addProduct">
                        <button className="mb-3 btn bg-primary text-white text-lg font-bold w-fit px-12 py-2 shadow-below">
                            Add New product
                        </button>
                    </Link>
                </div>
            </div>
        </div >
    )
}