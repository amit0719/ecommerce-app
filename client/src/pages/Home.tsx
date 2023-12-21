import ProductsListing from "../components/ProductsListing/ProductsListing";

const Home = () => {
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/products")
  //     .then((response) => console.log(response.data))
  //     .catch((error) => console.error("Error fetching products:", error));
  // }, []);

  return (
    <>
      <ProductsListing />
    </>
  );
};

export default Home;
