import { Router, useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";

const ProductForm = ({
    _id,
    title: existingTitle,
    description: existingDescription,
    price: existingPrice
}) => {
    const [title, setTitle] = useState(existingTitle || '')
    const [description, setDescription] = useState(existingDescription || '')
    const [price, setPrice] = useState(existingPrice || '')
    const [goToProducts, setGoToProducts] = useState('')
    const router = useRouter()


    async function saveProduct(e) {
        e.preventDefault()
        const data = { title, description, price };

        if (_id) {
            await axios.put('/api/products', {...data, _id})
        } else {
            await axios.post('/api/products', data);
        }
        setGoToProducts(true)
    }
    if (goToProducts) {
        router.push('/products')
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