import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import Button from "./components/Button";
import { useState } from "react";

function SubscribePage() {
  const [subscribed, setSubscribed] = useState(false);

  const handleClick = () => {
    setSubscribed(true);
  };

  return (
    <div>
      <Navbar />
      <div className="container ">
        <div className="row row-cols-lg-2 row-cols-md-1 subscribe-measure align-items-center justify-content-center">
          <img src="../images/recipe.jpg" className="food-img" alt="logo" />

          <div className="">
            <h1 className="mt-4">Want weekly recipes to your inbox?</h1>
            <div>
              <label for="exampleFormControlInput1" className="form-label mt-3">
                Email address
              </label>
              <input
                type="email"
                className="form-control mt-2"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              ></input>
            </div>
            {!subscribed && (
              <button onClick={handleClick} id="btn" className="btn btn-danger my-5">
                Subscribe Now!
              </button>
            )}

            {subscribed && <p className="clicked-text">Check Your Inbox!</p>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SubscribePage;
