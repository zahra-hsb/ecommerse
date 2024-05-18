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
    }

    useEffect(() => {
        axios.get('/api/categories').then(res => setCategory(res.data))
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
                        <button type='submit' className="btn-primary" >Save</button>
                    </form>
                    <ul>
                        {category.map(cat => (
                            <>
                                <li>{cat.name}</li>
                            </>
                        ))}
                    </ul>
                </main>

            </Layout>
        </>
    )
}

export default Categories