import { Request, Response } from "express";
import {Product} from '../models/product'
import { AppDataSource } from "../config/data";

export const getAllProducts = async (req: Request,res: Response) =>{
    try{
        const products = await AppDataSource.manager.find(Product);
        console.log('***products', products);
        res.status(200).json({
            status: 'success',
            data: {
                products
            }
          });
    }catch (error: any){
        res.status(400).json({error: error.message})
    }
}

export const createProduct = async (req: Request, res: Response) => {
    console.log(req.body);
    const { name, description, category, company, productId } = req.body;
    try{
        const createProduct = await AppDataSource.manager.create(Product, {name, description, category, company, productId});
        await AppDataSource.manager.save(createProduct);
        res.status(200).json(createProduct);
    }catch(error: any){
        res.status(400).json({error: error.message})
    }
}


export const updateProduct = async (req: Request, res: Response) => {
    const productId = req.params.productId;
    console.log('*******productId', productId);

    try {
        const existingProduct = await AppDataSource.manager.update(Product,{productId: productId}, req.body);        
        
        res.status(200).json(existingProduct);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};
export const deleteProduct = async (req: Request, res: Response) => {
    const { productId } = req.params;

    try {
        const deletedProduct = await AppDataSource.manager.delete(Product, {productId: productId});
        
        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};