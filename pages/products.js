import Layout from "@/pages/Layout.js";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function Products() {
    return (
        <Layout>
            <div className="flex flex-col flex-start sm:p-20 py-10 px-5 w-screen h-screen gap-10 bg-gray-50">
                <div>
                    <button className="text-white bg-blue-900 hover:bg-blue-800 py-2 px-5 rounded-md">Add new product</button>
                </div>
                <div>
                    <div className="bg-white border p-4">
                        <p>PRODUCT NAME</p>
                    </div>
                    <ul className="bg-white drop-shadow-sm">
                        <li className="flex items-center justify-between w-full p-3 px-5">
                            <p>Iphone 14 Pro Black</p>
                            <div className="flex flex-col sm:flex-row w-1/2 gap-5">
                                <Link href={''} className="flex border p-1 px-3 items-center gap-2 active:bg-gray-50 hover:text-gray-700">
                                    <FaEdit />
                                    Edit
                                </Link>
                                <Link href={''} className="flex px-3 p-1 items-center text-red-600 active:bg-red-200 border border-red-500 gap-2">
                                    <RiDeleteBin5Line />
                                    Delete
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
} 