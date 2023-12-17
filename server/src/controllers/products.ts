import { Request, Response } from 'express';
import Product, { IProduct } from '../models/product';

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products: IProduct[] = await Product.find();
    res.json(products);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req: Request, res: Response): Promise<void> => {
  try {
    const product: IProduct | null = await Product.findById(req.params.productId);
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.json(product);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, amount, image_url, description } = req.body;
      const newProduct: IProduct = new Product({
        name,
        amount,
        image_url,
        description
      });
      const savedProduct: IProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    
  };
  
  export const updateProduct = async (req: Request, res: Response): Promise<void> => {
    try {
      const productId: string = req.params.productId;
      const { name, amount, image_url, description } = req.body;
      const updatedProduct: IProduct | null = await Product.findByIdAndUpdate(productId, {
        name,
        amount,
        image_url,
        description
      }, { new: true });
      if (!updatedProduct) {
        res.status(404).json({ message: 'Product not found' });
        return;
      }
      res.json(updatedProduct);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
    try {
      const productId: string = req.params.productId;
      const deletedProduct = await Product.findByIdAndDelete(productId);
      if (!deletedProduct) {
        res.status(404).json({ message: 'Product not found' });
        return;
      }
      res.json({ message: 'Product deleted successfully' });
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  };

// Other controller methods like createProduct, updateProduct, deleteProduct, etc.
