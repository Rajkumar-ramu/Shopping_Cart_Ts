
import {Request, Response} from 'express';
import { Cart } from '../models/cart';
import { AppDataSource } from '../config/data';


export const getAllCarts = async (req: Request, res: Response) => {
    try {
        const carts = await AppDataSource.manager.find(Cart, { relations: ["product"] });
        console.log('*******carts', carts);
        res.status(200).json({
            status: 'success',
            data: {
                carts
            }
        });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}

export const addCart = async (req: Request, res: Response) => {
    const { productId, quantity, price } = req.body;
    try{
        const addCart = await AppDataSource.manager.create(Cart, {productId, quantity, price})
        await AppDataSource.manager.save(addCart);

        console.log(addCart);
        
        res.status(200).json(addCart);
    }catch(error: any){
        res.status(400).json({error: error.message})
    }
}

// upsert<Entity extends ObjectLiteral>(target: EntityTarget<Entity>, entityOrEntities: QueryDeepPartialEntity<Entity> | QueryDeepPartialEntity<Entity>[], conflictPathsOrOptions: string[] | UpsertOptions<Entity>): Promise<InsertResult>;

export const updateCart = async (req: Request, res: Response) => {
    const productId = req.params.productId;
    try {
        // Find the product by ID to update cart 
        const existingCart = await AppDataSource.manager.update(Cart,{productId: productId}, req.body);        
        res.status(200).json(existingCart);
    } catch (error: any){
        res.status(400).json({ error: error.message });
    }
};
export const deleteCart = async (req: Request, res: Response) => {
    const { productId } = req.params;

    try {
        // Find the product by ID and delete it
        const deleteCart = await AppDataSource.manager.delete(Cart, {productId: productId});
        
        if (!deleteCart) {
            return res.status(404).json({ error: 'Item not found' });
        }
        
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};