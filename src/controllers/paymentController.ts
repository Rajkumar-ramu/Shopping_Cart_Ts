// // import Payment from '../models/payment.ts';
// import Payment from "../models/payment";

// import {Request, Response} from 'express';

// export const getPaymentDetails = async (req: Request,res: Response) =>{
//     try{
//         const productId = req.params.productId;
//         const payment = await Payment.findOne({ productId: productId });
//         res.status(200).json({
//             status: 'success',
//             data: {
//                 payment
//             }
//           });
//     }catch (error: any){
//         res.status(400).json({error: error.message})
//     }
// }

// export const addPaymentDetails = async (req: Request, res: Response) => {
//     console.log('req%j', req);
//     // const { productId, amount, currency, status} = req.body;
//     try{
//         const addPayment = await Payment.create(req.body)
//         res.status(200).json(addPayment);
//     }catch(error: any){
//         res.status(400).json({error: error.message})
//     }
// }


// export const updatePaymentDetails = async (req: Request, res: Response) => {
//     const productId = req.params.productId;
//     try {
//         // Find the product by ID to update cart 
//         const existingCart = await Payment.findOneAndUpdate({productId: productId}, req.body, { new: true });
//         res.status(200).json(existingCart);
//     } catch (error: any) {
//         res.status(400).json({ error: error.message });
//     }
// };
