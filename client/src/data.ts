export const appData = {
  "categories": [
     {
      "id": 1,
      "name": "Mobiles"
    },
     {
      "id": 2,
      "name": "Electronics"
    },
    {
      "id": 3,
      "name": "Fashion"
    },
    {
      "id": 4,
      "name": "Kitchen"
    },
    {
      "id": 5,
      "name": "Kitchen"
    }
  ],
  "products": [
    {
      "id": 1,
      "name": "T-shirt",
      "category": "Fashion",
      "price": 19.99,
      "description": "Comfortable cotton t-shirt in various colors."
    },
    {
      "id": 2,
      "name": "Smartphone",
      "category": "Electronics",
      "price": 399.99,
      "description": "Latest smartphone with advanced features."
    },
    {
      "id": 3,
      "name": "Coffee Maker",
      "category": "Kitchen",
      "price": 49.99,
      "description": "Automatic coffee maker for brewing delicious coffee."
    }
  ],
  "users": [
    {
      "id": 1,
      "username": "user1",
      "email": "user1@example.com"
    },
    {
      "id": 2,
      "username": "user2",
      "email": "user2@example.com"
    }
  ],
  "orders": [
    {
      "id": 1,
      "userId": 1,
      "products": [
        {
          "productId": 1,
          "quantity": 2
        },
        {
          "productId": 3,
          "quantity": 1
        }
      ]
    },
    {
      "id": 2,
      "userId": 2,
      "products": [
        {
          "productId": 2,
          "quantity": 1
        }
      ]
    }
  ]
}
