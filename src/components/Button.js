import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link to="/subscribe">
      <button className="btn btn-danger">Click To Get More Recipes</button>;
    </Link>
  );
};

export default Button;
