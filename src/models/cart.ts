import { ObjectId } from "mongodb";
import { Entity, Column, ObjectIdColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Product } from "./product";

@Entity("carts")
export class Cart {
    @ObjectIdColumn()
    _id: ObjectId = new ObjectId(); // This line looks fine

    @Column()
    productId!: string;

    @Column()
    quantity!: number;

    @Column()
    price!: number;

    // @ManyToOne(() => Product, (product: { carts: any; }) => product.carts) // Specify the target entity and the property to use as the inverse side
    @ManyToOne(() => Product, product => product.carts)
    @JoinColumn({ name: "productId" })
    product!: Product;
}
