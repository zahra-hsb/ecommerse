import { Category } from "@/models/categories";

export default async function handle(req, res) {
    const method = req.method
    
    if (method === 'POST') {
        const { name } = req.body;
        const categoryDoc = await Category.create({name})
        res.json(categoryDoc)
    } else if (method === 'GET') {
        res.json(await Category.find())
    }

}