import "reflect-metadata"
import { DataSource } from "typeorm"
import { Cart } from "../models/cart"
import { Product } from "../models/product"

export const AppDataSource = new DataSource({
    type: "mongodb",
    url: "localhost",
    useNewUrlParser: true,
    synchronize: true,
    logging: true,
    entities: [Cart, Product]
})
