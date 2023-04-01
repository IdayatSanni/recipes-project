import Navbar from "./components/Navbar";
import Button from "./components/Button";

function SubscribePage() {
  return (
    <div>
      <Navbar />
      <div className="container ">
        <div className="row row-cols-lg-2 row-cols-md-1 subscribe-measure align-items-center justify-content-center">
          <img src="../images/recipe.jpg" className="food-img" alt="logo" />

          <div className="">
            <h1 className="mt-4">Need Daily Recipes Delivered To You?</h1>
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
            <Button message="Get It Delivered" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribePage;
