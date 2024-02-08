import Layout from "../Layout";

export default function NewProducts() {
    return (
        <Layout>
            <div className="w-full h-screen gap-5 p-5 flex flex-col items-start justify-start">
                <div>
                    <h3>new Product</h3>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label>Product name</label>
                    <input type="text" placeholder="product name" />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label>Description</label>
                    <textarea placeholder="description"></textarea>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label>Price (in USA)</label>
                    <input type="number" placeholder="price" />
                </div>
                <button className="text-white bg-blue-900 hover:bg-blue-800 py-2 px-5 rounded-md">Save</button>
            </div>
        </Layout>
    )
}