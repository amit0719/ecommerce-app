import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Page Not Found</h2>
      <p>Oops! The requested page does not exist.</p>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
};

export default PageNotFound;
