import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <div className="text-center my-4">
      <Link to="/subscribe">
        <button className="btn btn-danger">{props.message}</button>
      </Link>
    </div>
  );
};

export default Button;
