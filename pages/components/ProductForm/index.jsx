import { Router, useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import Image from "next/image";
import Spinner from "../Spinner";
import { ReactSortable } from "react-sortablejs";

const ProductForm = ({
    _id,
    title: existingTitle,
    description: existingDescription,
    price: existingPrice,
    images: existingImages,
}) => {
    const [images, setImages] = useState(existingImages || [])
    const [title, setTitle] = useState(existingTitle || '')
    const [description, setDescription] = useState(existingDescription || '')
    const [price, setPrice] = useState(existingPrice || '')
    const [goToProducts, setGoToProducts] = useState('')
    const [isUploading, setIsUploading] = useState(false)
    const router = useRouter()


    async function saveProduct(e) {
        e.preventDefault()
        const data = { title, description, price, images };

        if (_id) {
            await axios.put('/api/products', { ...data, _id })
        } else {
            await axios.post('/api/products', data);
        }
        setGoToProducts(true)
    }
    if (goToProducts) {
        router.push('/products')
    }
    async function uploadImages(e) {
        const files = e.target?.files;
        if (files?.length > 0) {
            setIsUploading(true)
            const data = new FormData();
            for (const file of files) {
                data.append('file', file)

            }
            const res = await axios.post('/api/upload', data)
            // console.log(res)
            setImages(oldImages => {
                return [...oldImages, ...res.data.Links]
            })
        }
        setIsUploading(false)
    }
    function uploadImagesOrder(images) {
        setImages(images)
    }
    return (
        <form onSubmit={saveProduct} className=" gap-5 p-5 flex flex-col items-start justify-start">
            <div className="w-full flex flex-col gap-2">
                <label>Product name</label>
                <input type="text" placeholder="product name" name="title" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="w-full flex flex-col gap-2">
                <label>Description</label>
                <textarea placeholder="description" name="description" value={description} onChange={e => setDescription(e.target.value)}></textarea>
            </div>
            <div className="flex overflow-x-scroll w-full">
                <ReactSortable list={images} className="flex gap-5 p-5" setList={uploadImagesOrder}>
                    {!!images?.length && images.map(link => (
                        <>
                            <div className="w-[150px] h-[180px] overflow-hidden rounded" key={link}>
                                <img src={`${link}`} alt='sa' width={150} height={150} />
                            </div>
                        </>
                    ))}
                </ReactSortable>
                {isUploading && (
                    <>
                        <div className="h-24">
                            <Spinner />
                        </div>
                    </>
                )}
                <label className='w-[150px] h-[150px] flex items-center justify-center border-2 cursor-pointer hover:bg-gray-300'>
                    <FiUpload size={25} />
                    <input type="file" onChange={uploadImages} className="hidden" />
                </label>

            </div>
            <div className="w-full flex flex-col gap-2">
                <label>Price (in USA)</label>
                <input type="number" placeholder="price" name="price" value={price} onChange={e => setPrice(e.target.value)} />
            </div>
            <div className="flex gap-2">
                <button type="submit" className="text-white bg-blue-900 hover:bg-blue-800 py-2 px-5 rounded-md active:bg-white active:border-2 active:border-blue-900 active:text-blue-900">save</button>
                <button onClick={() => router.back()} className="text-blue-900 border-2 border-blue-900 hover:bg-blue-800 hover:text-white py-2 px-5 rounded-md">back</button>
            </div>
        </form>
    )
}

export default ProductForm