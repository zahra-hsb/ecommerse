import { useRouter } from "next/router"
import Layout from "../../Layout"
import { useEffect, useState } from "react"
import axios from "axios"
import ProductForm from "@/pages/components/ProductForm"

const EditProductPage = () => {
    const [productInfo, setProductInfo] = useState(null)
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get('/api/products?id=' + id).then(response => {
            setProductInfo(response.data)
        })
    }, [id])

    return (
        <>
            <Layout>
                {productInfo &&
                    <div className="flex flex-col w-screen h-screen">
                        <div className="p-5 text-lg">
                            <h3>edit Product</h3>
                        </div>
                        <ProductForm {...productInfo}/>
                    </div>
                }
            </Layout>
        </>
    )
}

export default EditProductPage