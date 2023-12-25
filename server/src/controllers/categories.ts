// controllers/categoryController.ts

import { Request, Response } from "express";
import Category from "../models/category";

// Get all categories
export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// Get a specific category by ID
export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(category);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new category
export const createCategory = async (req: Request, res: Response) => {
  const { name, description, parentCategory, subcategories } = req.body;

  const category = new Category({
    name,
    description,
    parentCategory,
    subcategories,
    // Other attributes as needed
  });

  try {
    const newCategory = await category.save();
    res.status(201).json(newCategory);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

// Update a category by ID
export const updateCategory = async (req: Request, res: Response) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    // Update only provided fields
    Object.assign(category, req.body);

    const updatedCategory = await category.save();
    res.json(updatedCategory);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a category by ID
export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    await Category.deleteOne({ _id: req.params.id });
    res.json({ message: "Category deleted" });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
