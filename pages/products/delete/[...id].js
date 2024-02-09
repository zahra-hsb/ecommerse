import Layout from "@/pages/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DeleteProductPage() {
    const [productInfo, setProductInfo] = useState()
    const router = useRouter()
    const {id} = router.query
    useEffect(() => {
        if(!id) {
            return;
        }
        axios.get('/api/products?id='+id).then(response => {
            setProductInfo(response.data)
        })
    }, [id])
    function goBack() {
        router.push('/products')
    }
    return (
        <Layout>
            <div className="flex flex-col gap-10 items-center w-full justify-center">
                <p className="text-lg"> Do you really want to delete <strong>{productInfo?.title}</strong>?</p>
                <div className="flex gap-5">
                    <button className='px-3 p-1 text-red-600 active:bg-red-200 border border-red-500'>yes</button>
                    <button onClick={goBack} className="border p-1 px-3 active:bg-gray-50 hover:text-gray-700">no</button>
                </div>
            </div>

        </Layout>
    )
} 