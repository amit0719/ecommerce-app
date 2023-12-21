import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const ProductCard = ({ product }: any) => {
  const { imageUrl, category, price } = product;

  return (
    <Card>
      <CardMedia component="img" height="140" src={imageUrl} />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {category}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Price:{price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
