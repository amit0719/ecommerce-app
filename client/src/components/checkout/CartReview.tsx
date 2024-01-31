const CartReview = ({ cartItems }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        marginBottom: "12px",
        borderRadius: "3px",
        padding: "8px",
      }}
    >
      <div className="bg-dark text-light p-2 mb-4">
        <h5>In Your Cart</h5>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(({ id, name, price, image, quantity }) => (
            <tr key={id}>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src={image}
                    alt={name}
                    className="me-3"
                    style={{ maxWidth: "50px" }}
                  />
                  <div>{name}</div>
                </div>
              </td>
              <td>${price}</td>
              <td>{quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <a href="/cart" className="btn btn-link">
          Edit Cart
        </a>
      </div>
    </div>
  );
};

export default CartReview;
