import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// todo { cartItems }: any

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: "T-shirt",
      price: 19.99,
    },
    {
      id: 2,
      name: "Smartphone",
      price: 399.99,
    },
  ];

  const getTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item: any) => {
      total += item.price;
    });
    return total;
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Cart
      </Typography>
      <List>
        {cartItems.map((item: any) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.name} secondary={`$${item.price}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <Typography variant="h6" gutterBottom>
        Total Price: ${getTotalPrice()}
      </Typography>
    </div>
  );
};

export default CartPage;
