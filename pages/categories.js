import axios from "axios"
import { useState } from "react"

const { default: Layout } = require("./Layout")

const Categories = () => {

    const [name, setName] = useState('')

    function changeHandler(e) {
        setName(e.target.value)
    }
    async function saveCategory(e) {
        e.preventDefault()
        await axios.post('/api/categories/', {name});
        setName('')
    }
    return (
        <>
            <Layout>
                <main className="flex items-start flex-col w-full ">
                    <h1>
                        Categories
                    </h1>
                    <label>New category name</label>
                    <form onSubmit={(e) => saveCategory(e)} className="flex gap-1">
                        <input onChange={(e) => changeHandler(e)} value={name} type="text" placeholder="category name" />
                        <button type='submit' className="btn-primary" >Save</button>
                    </form>
                </main>

            </Layout>
        </>
    )
}

export default Categories