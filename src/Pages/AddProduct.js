
import React, { useState } from 'react';
import PhotoUploader from '../components/PhotoUploader';
import Categories from '../components/Categories';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function AddProduct() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [category, setCategory] = useState([]);
    const [images, setImages] = useState([]);
    const [price, setPrice] = useState(1);
    const [description, setDescription] = useState('');
    const [first, setFirst] = useState('');
    const [highlights, setHighlights] = useState([]);


    function handleHigh(e) {
        e.preventDefault();
        setHighlights([...highlights, first]);
        setFirst('');
    }

    async function handleForm(e) {
        try {
            e.preventDefault();
            const response = await axios.post('/addproduct', {
                name, category, images, price, description, highlights
            })
            console.log(response);
            alert('product created');
            navigate('/myproducts')

        } catch (err) {
            alert('product upload failed', err);
        }

    }

    return (
        <div>
            <form onSubmit={handleForm}>
                <div className="px-4 py-4">
                    <div className="px-2 py-4 font-main text-3xl underline"><label>Fill The Details: </label></div>
                    <div className=" flex flex-col gap-3 lg:py-8 px-3 py-2 border border-4 border-primary rounded-2xl ">
                        <div className="px-1 py-2 flex  items-center gap-5 xs:gap-2 xs:px-0">
                            <label className="font-normal text-3xl  xs:text-3xl">Product Name : </label>
                            <input className="input-round" type='text' placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="px-1 py-2 flex  items-center lg:gap-24 xs:gap-10 xs:px-0">
                            <label className="font-normal text-3xl  xs:text-3xl">Price:</label>
                            <input className="input-round " type='number' placeholder="Ex: 2000" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <Categories
                            categories={category}
                            onChange={setCategory}
                        />
                        <div>
                            <label className="font-normal text-3xl xs:text-3xl">Images : </label>
                            <PhotoUploader
                                uploadedPhotos={images}
                                onChange={setImages} />
                        </div>
                        <div className="px-1 py-2 flex gap-4  ">
                            <label className="font-normal text-3xl xs:text-3xl">Description: </label>
                            <textarea className="border border-primary border-4 input-round lg:w-1/3" name="description" rows="" cols="" value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <div className="px-1 py-2 flex xs:flex-col lg:flex-row gap-2 ">
                            <label className="font-normal text-3xl xs:text-3xl">Highlights:</label>
                            <div className="flex gap-2 ">
                                <input className="input-round" type="text" placeholder="Highlight" name="highlight" value={first} onChange={(e) => setFirst(e.target.value)} />
                                <button onClick={handleHigh} className="bg-primary input-round px-2 lg:px-6" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                </button>
                            </div>
                        </div>
                        {highlights.length > 0 && (
                            <div className='flex flex-col bg-gray-200 lg:w-2/5 xs:w-full rounded-2xl px-2 pt-1 gap-2'>
                                {
                                    highlights.map((light) => (
                                        <div>
                                            <label className='font-normal text-3xl'> -> {light}</label>
                                        </div>
                                    ))
                                }
                            </div>
                        )}
                        <div className='w-full xs:mt-4 flex justify-center'>
                            <button type='submit' className='mb-3 btn bg-primary text-white text-lg font-bold w-fit px-12 py-2 shadow-below'>Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}