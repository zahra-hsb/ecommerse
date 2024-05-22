import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/categories";

export default async function handle(req, res) {
    const method = req.method
    await mongooseConnect()

    if (method === 'POST') {
        const { name } = req.body;
        const categoryDoc = await Category.create({name})
        res.json(categoryDoc)
    }
    
    if (method === 'GET') {
        res.json(await Category.find())
    }

}