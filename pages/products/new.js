import { useState } from "react";
import Layout from "../Layout";
import { useRouter } from "next/router";

export default function NewProducts() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const router = useRouter()


    function createProduct() {
        
    }
    return (
        <Layout>
            <form onSubmit={createProduct} className="w-full h-screen gap-5 p-5 flex flex-col items-start justify-start">
                <div>
                    <h3>new Product</h3>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label>Product name</label>
                    <input type="text" placeholder="product name" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label>Description</label>
                    <textarea placeholder="description" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label>Price (in USA)</label>
                    <input type="number" placeholder="price" value={price} onChange={e => setPrice(e.target.value)} />
                </div>
                <div className="flex gap-2">
                    <button type="submit" className="text-white bg-blue-900 hover:bg-blue-800 py-2 px-5 rounded-md active:bg-white active:border-2 active:border-blue-900 active:text-blue-900">Save</button>
                    <button onClick={() => router.back()} className="text-blue-900 border-2 border-blue-900 hover:bg-blue-800 hover:text-white py-2 px-5 rounded-md">back</button>
                </div>
            </form>
        </Layout>
    )
}