import axios from 'axios';
import { useState } from 'react';

export default function PhotoUploader({ uploadedPhotos, onChange }) {

    const [link, setLink] = useState('');


    async function handleUploadByLink(e) {
        try {
            e.preventDefault();
            const res = await axios.post('/uploadByLink', { link });
            onChange([...uploadedPhotos, res.data]);
            setLink('');
        }
        catch (e) {
            alert('immproper url');
        }
    }

    async function handleNormalUpload(e) {
        const files = e.target.files;
        const data = new FormData();
        // for (let i = 0; i < files.length; i++) {
        //     data.append('photos', files[i]);
        // }
        try {
            await axios.post('/normalupload', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
        } catch (e) {
            alert('feature under development');
        }

    }

    return (
        <>
            <div className="px-1 py-2 flex xs:gap-2 lg:gap-4  ">
                <input className="input-round  " type="text" placeholder="upload by link" value={link}
                    onChange={(e) => setLink(e.target.value)} />
                <button onClick={handleUploadByLink} className="input-round bg-primary px-1 py-1 lg:px-6"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.22-3.22V16.5a.75.75 0 01-1.5 0V4.81L8.03 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zM3 15.75a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                </svg>
                </button>
            </div>
            {uploadedPhotos.length > 0 && (<label className='font-normal text-3xl '>Uploaded photos: </label>)}
            {uploadedPhotos.length > 0 && (
                <div className='bg-gray-200 rounded-2xl px-3 py-3 grid xs:grid-cols-2 lg:grid-cols-6  lg:gap-x-0 gap-y-2 items-center'>
                    {uploadedPhotos.map((photo) => (
                        <div className=''>
                            <img className='  h-28 w-28 ' src={photo}></img>
                        </div>

                    ))}
                </div>
            )}
            <div className='flex xs:justify-center lg:justify-start px-4 lg:py-4 xs:py-2 font-main lg:text-3xl xs:text-xl'><label>OR</label></div>
            <div className="flex my-6 xs:justify-start ">
                <div className="px-1 py-3 flex justify-center xs:pl-4 input-round bg-primary ">
                    <label className="font-normal xs:text-2xl">
                        <input type="file" multiple onChange={handleNormalUpload} /></label>
                </div>
            </div>
        </>
    )
}