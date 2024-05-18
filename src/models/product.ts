
import { ObjectId } from "mongodb";
import { Column, Entity, ObjectIdColumn, OneToMany } from "typeorm";
import { Cart } from "./cart";
@Entity("products")
export class Product {
    @ObjectIdColumn()
    _id: ObjectId = new ObjectId;
    id!: number;
    @Column()
    name!: string;
    @Column()
    description!: string;
    @Column()
    category!: string;
    @Column()
    company!: string;
    @Column()
    productId!: string;
    // carts: any;

    @OneToMany(() => Cart, cart => cart.product) // Specify the target entity and the property to use as the inverse side
    carts!: Cart[]; // Define a property to access the associated Cart entities
}

