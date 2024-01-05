import { Document, Schema, model } from "mongoose";

// Interface for Category document
interface ICategory extends Document {
  name: string;
  description: string;
  isFeatured: boolean;
  subcategories: Schema.Types.ObjectId[];
}

// Schema definition
const categorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      default: "",
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    subcategories: [
      {
        type: Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
  },
  { timestamps: true }
);

const Category = model<ICategory>("Category", categorySchema);

export default Category;
