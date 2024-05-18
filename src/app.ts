import express, { Express } from 'express';
// import connectDB from './src/config/db.js';
// import updatePaymentDateMiddleware from './src/middlewares/paymentMiddleware.js'
const app: Express = express();
import { AppDataSource } from './config/data';
import cartRoutes from './routes/cartRoutes';
import productRoutes from './routes/productRoutes';



// import productRoutes from './src/routes/productRoutes.js';
// import cartRoutes from './src/routes/cartRoutes.js';
// import paymentRoutes from './src/routes/paymentRoutes.js';


//Request parsing
app.use(express.json());
// app.use(updatePaymentDateMiddleware);


// //MongoDb connection
// connectDB();
// // Routes
app.use('/products', productRoutes);
app.use('/carts', cartRoutes);
// app.use('/payments', paymentRoutes);
AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        console.log('Mongo Database connection Sucess');
        // console.log('MongoDB connection properties:', AppDataSource);
    })
    .catch((error) => console.log(error))


const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Server started runnning on the port ${PORT}`);
})

