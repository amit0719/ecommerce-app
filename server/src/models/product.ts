import { Schema, model, InferSchemaType } from "mongoose";

const productSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  discountedPrice: Number,
  discountStartDate: Date,
  discountEndDate: Date,
  isDiscounted: {
    type: Boolean,
    default: false,
  },
  isNewProduct: {
    type: Boolean,
    default: false,
  },
  newStartDate: Date,
  newEndDate: Date,
  ratings: [
    {
      rating: Number,
      count: Number,
    },
  ],
});

export type IProduct = InferSchemaType<typeof productSchema> & { _id: string };

const Product = model<IProduct>("Product", productSchema);

export default Product;
