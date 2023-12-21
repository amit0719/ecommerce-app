import { Grid } from "@mui/material";
import { appData } from "../../data";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const ProductsListing = () => {
  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {appData.products.map((product) => (
        <Grid item xs={2}>
          <Link to={`/product/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsListing;
