import axios from "axios"
import { Router } from "next/router";
import { useEffect, useState } from "react"
import { RiDeleteBin6Fill } from "react-icons/ri";

const { default: Layout } = require("./Layout")

const Categories = () => {
    const [category, setCategory] = useState([])
    const [name, setName] = useState('')
    const [status, setStatus] = useState('')
    const [isOpenModal, setOpenModal] = useState(false)
    const [selectedCategoryId, setSelectedCategoryId] = useState(0)
    function changeHandler(e) {
        setName(e.target.value)
    }
    async function saveCategory(e) {
        e.preventDefault()
        if (name !== '') {
            await axios.post('/api/categories/', { name });
            setName('')
            fetchCategories()

            setStatus('category added.')

            setTimeout(() => setStatus(''), 3000);
        } else {
            setStatus('there is no input. please enter the category name!!')

            setTimeout(() => setStatus(''), 3000);
        }
    }
    function fetchCategories() {
        axios.get('/api/categories').then(res => setCategory(res.data))
    }
    function openModal(catId) {
        setOpenModal(true)
        setSelectedCategoryId(catId)
    }
    async function handleDeleteCat(catId) {
        setOpenModal(false)
        await axios.delete('/api/categories?id='+ catId)
        fetchCategories()

    }
    useEffect(() => {
        fetchCategories()
    }, [])
    return (
        <>
            <Layout>
                <main className="flex items-start justify-start flex-col w-full h-full p-10 relative">
                    <h1 className="text-xl font-bold py-5">
                        Categories
                    </h1>
                    <label className="my-2">New category name</label>
                    <form onSubmit={(e) => saveCategory(e)} className="flex flex-col sm:flex-row w-full gap-1">
                        <input onChange={(e) => changeHandler(e)} value={name} type="text" placeholder="category name" />
                        <select className="border-2 rounded-md px-1 cursor-pointer outline-none focus:bg-slate-50">
                            <option>no parent category</option>
                            {category.length > 0 && category.map(cat => (
                                <>
                                    <option value={cat._id}>{cat.name}</option>
                                </>
                            ))}
                        </select>
                        <button type='submit' className="btn-primary" >Save</button>
                    </form>
                    <ul className="w-full overflow-y-auto mt-10">
                        <li className="w-full bg-blue-800 text-white p-3 mt-10">Category name</li>
                        {category.length > 0 ? category.map(cat => (
                            <>
                                <li className="p-3 border flex justify-between">{cat.name}
                                    <button onClick={() => openModal(cat._id)}>
                                        <RiDeleteBin6Fill size={20} color="red" />
                                    </button>
                                </li>
                            </>
                        )) : <li className="p-3 border">There is not any categories.</li>}
                    </ul>
                </main>
                {status === 'there is no input. please enter the category name!!' ?
                    <div className="absolute bottom-5 left-[40%] rounded p-5 bg-red-600 text-white">{status}</div>
                    : status === 'category added.' ?
                        <div className="absolute bottom-5 left-[50%] rounded p-5 bg-green-600 text-white">{status}</div>
                        : ''
                }

                {isOpenModal &&
                    <Modal name={category.find(item => item._id === selectedCategoryId).name} handleDeleteCat={() => handleDeleteCat(selectedCategoryId)} setOpenModal={setOpenModal} />
                }
            </Layout>
        </>
    )
}

function Modal(props) {
    return (
        <>
            <div className="w-full h-full bg-[#333] fixed bottom-0 left-0 right-0 bg-opacity-30"></div>
            <div className="fixed sm:top-32 top-52 bg-white left-10% sm:left-[40%] p-5 shadow-xl">
                <h3 className="text-xl">Are you sure to delete <span className="text-red-500">{props.name}</span> category?</h3>
                <div className="flex items-center justify-center">
                    <button onClick={props.handleDeleteCat} className="text-red-600 p-2">yes</button>
                    <button onClick={() => props.setOpenModal(false)} className="p-2">no</button>
                </div>
            </div>
        </>
    )
}


export default Categories