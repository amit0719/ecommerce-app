import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import { Search, AccountCircle, ShoppingCart } from "@mui/icons-material";
import CategoriesNavigation from "./CategoriesNavigation";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {/* App Logo */}
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            App Name
          </Typography>

          {/* Search with Logo */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <Search />
            <input
              type="text"
              placeholder="Search..."
              style={{ marginLeft: 8 }}
            />
          </div>

          {/* Login/Register with User Icon */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body1">Login</Typography>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </div>

          {/* Cart with Icon */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to={"cart"}>
              <Typography variant="body1" style={{ marginRight: 10 }}>
                Cart
              </Typography>

              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <CategoriesNavigation />
    </>
  );
};

export default Header;
