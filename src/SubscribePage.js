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
            <h1>Need Daily Recipes Delivered To You?</h1>
            <div>
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
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
