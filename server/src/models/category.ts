import { Document, Schema, model } from "mongoose";

// Interface for Category document
interface ICategory extends Document {
  name: string;
  description: string;
  parentCategory?: Schema.Types.ObjectId | null;
  subcategories: Schema.Types.ObjectId[];
  // Other attributes if needed
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
    parentCategory: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },
    subcategories: [
      {
        type: Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
    // Other attributes you might need, e.g., imageURL, isActive, createdAt, updatedAt, etc.
  },
  { timestamps: true }
);

const Category = model<ICategory>("Category", categorySchema);

export default Category;
