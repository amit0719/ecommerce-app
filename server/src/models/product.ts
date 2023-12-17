import { Schema, model, InferSchemaType } from 'mongoose';

const productSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  image_url: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

export type IProduct = InferSchemaType<typeof productSchema>;

const Product = model<IProduct>('Product', productSchema);

export default Product;
