import axios from "axios"
import { useEffect, useState } from "react"

const { default: Layout } = require("./Layout")

const Categories = () => {
    const [category, setCategory] = useState([])
    const [name, setName] = useState('')

    function changeHandler(e) {
        setName(e.target.value)
    }
    async function saveCategory(e) {
        e.preventDefault()
        await axios.post('/api/categories/', { name });
        setName('')
        fetchCategories()
    }
    function fetchCategories() {
        axios.get('/api/categories').then(res => setCategory(res.data))
    }
    useEffect(() => {
        fetchCategories()
    }, [])
    return (
        <>
            <Layout>
                <main className="flex items-start justify-start flex-col w-full h-full p-10">
                    <h1 className="text-xl font-bold py-5">
                        Categories
                    </h1>
                    <label className="my-2">New category name</label>
                    <form onSubmit={(e) => saveCategory(e)} className="flex gap-1">
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
                    <ul className="w-full">
                        <li className="w-full bg-blue-800 text-white p-3 mt-10">Category name</li>
                        {category.length > 0 ? category.map(cat => (
                            <>
                                <li className="p-3 border">{cat.name}

                                </li>
                            </>
                        )) : <li className="p-3 border">There is not categories.</li>}
                    </ul>
                </main>

            </Layout>
        </>
    )
}

export default Categories