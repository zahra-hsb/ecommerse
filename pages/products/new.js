import Layout from "../Layout";
import ProductForm from "../components/ProductForm";


export default function NewProducts() {

    return (
        <Layout>
            <div className="flex flex-col w-screen h-screen">
                <div className="p-5 text-lg">
                    <h3>add new Product</h3>
                </div>
                <ProductForm />
            </div>


        </Layout>
    )
}