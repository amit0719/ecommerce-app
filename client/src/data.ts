import proImage from "./assets/images/laptopImg.jpg";

export const appData = {
  categories: [
    { id: 1, name: "Mobile" },
    { id: 2, name: "Laptop" },
    { id: 3, name: "TV & Appliance" },
    { id: 4, name: "Fashion" },
    { id: 5, name: "Electronics" },
  ],
  products: [
    {
      id: 1,
      name: "T-shirt",
      category: "Fashion",
      price: 19.99,
      description: "Comfortable cotton t-shirt in various colors.",
      imageUrl: proImage,
    },
    {
      id: 2,
      name: "Smartphone",
      category: "Electronics",
      price: 399.99,
      description: "Latest smartphone with advanced features.",
      imageUrl: proImage,
    },
    {
      id: 3,
      name: "Coffee Maker",
      category: "Kitchen",
      price: 49.99,
      description: "Automatic coffee maker for brewing delicious coffee.",
      imageUrl: proImage,
    },
    {
      id: 4,
      name: "T-shirt",
      category: "Fashion",
      price: 19.99,
      description: "Comfortable cotton t-shirt in various colors.",
      imageUrl: proImage,
    },
    {
      id: 5,
      name: "Smartphone",
      category: "Electronics",
      price: 399.99,
      description: "Latest smartphone with advanced features.",
      imageUrl: proImage,
    },
    {
      id: 6,
      name: "Coffee Maker",
      category: "Kitchen",
      price: 49.99,
      description: "Automatic coffee maker for brewing delicious coffee.",
      imageUrl: proImage,
    },
    {
      id: 7,
      name: "Backpack",
      category: "Travel",
      price: 29.99,
      description: "Durable and spacious backpack for travel and daily use.",
      imageUrl: proImage,
    },
    {
      id: 8,
      name: "Watch",
      category: "Fashion",
      price: 149.99,
      description: "Elegant wristwatch with a stainless steel strap.",
      imageUrl: proImage,
    },
    {
      id: 9,
      name: "T-shirt",
      category: "Fashion",
      price: 19.99,
      description: "Comfortable cotton t-shirt in various colors.",
      imageUrl: proImage,
    },
    {
      id: 10,
      name: "Smartphone",
      category: "Electronics",
      price: 399.99,
      description: "Latest smartphone with advanced features.",
      imageUrl: proImage,
    },
    {
      id: 11,
      name: "Coffee Maker",
      category: "Kitchen",
      price: 49.99,
      description: "Automatic coffee maker for brewing delicious coffee.",
      imageUrl: proImage,
    },
    {
      id: 12,
      name: "T-shirt",
      category: "Fashion",
      price: 19.99,
      description: "Comfortable cotton t-shirt in various colors.",
      imageUrl: proImage,
    },
    {
      id: 13,
      name: "Smartphone",
      category: "Electronics",
      price: 399.99,
      description: "Latest smartphone with advanced features.",
      imageUrl: proImage,
    },
    {
      id: 14,
      name: "Coffee Maker",
      category: "Kitchen",
      price: 49.99,
      description: "Automatic coffee maker for brewing delicious coffee.",
      imageUrl: proImage,
    },
    {
      id: 15,
      name: "Backpack",
      category: "Travel",
      price: 29.99,
      description: "Durable and spacious backpack for travel and daily use.",
      imageUrl: proImage,
    },
    {
      id: 16,
      name: "Watch",
      category: "Fashion",
      price: 149.99,
      description: "Elegant wristwatch with a stainless steel strap.",
      imageUrl: proImage,
    },
  ],
  users: [
    {
      id: 1,
      username: "user1",
      email: "user1@example.com",
    },
    {
      id: 2,
      username: "user2",
      email: "user2@example.com",
    },
  ],
  orders: [
    {
      id: 1,
      userId: 1,
      products: [
        {
          productId: 1,
          quantity: 2,
        },
        {
          productId: 3,
          quantity: 1,
        },
      ],
    },
    {
      id: 2,
      userId: 2,
      products: [
        {
          productId: 2,
          quantity: 1,
        },
      ],
    },
  ],
};

//create a product deatil page which conatin image of product and description of product and price of product and add to cart button
//create a product list page which contain list of product and on click of product it will redirect to product detail page
//create a cart page which contain list of product which are added to cart and total price of product and remove button
//create a checkout page which contain list of product which are added to cart and total price of product and checkout button
//create a login page which contain login form and on click of login button it will redirect to product list page
//create a signup page which contain signup form and on click of signup button it will redirect to product list page
//create a order page which contain list of product which are added to cart and total price of product and order button
//create a order detail page which contain list of product which are added to cart and total price of product and order button
//create a order list page which contain list of product which are added to cart and total price of product and order button
