const Summary = ({ totalAmount }) => {
  const subtotal = totalAmount;
  const shippingCharge = 0;
  const tax = 50;
  const total = subtotal + shippingCharge + tax;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        marginBottom: "12px",
        borderRadius: "3px",
        padding: "8px",
      }}
    >
      <div className="bg-dark text-light p-2 mb-4 ">
        <h5>Summary</h5>
      </div>
      <div className="p-2 mb4">
        <p>Subtotal: ${subtotal}</p>
        <p>Shipping Charge: ${shippingCharge}</p>
        <p>Tax: ${tax}</p>
        <hr />
        <h6>Total: ${total}</h6>
      </div>
    </div>
  );
};

export default Summary;
