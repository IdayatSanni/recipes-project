const Recipes = () => {
  return (
    <div className="container">
      <div className="recipe-card">
        {/* <div id="waffel"> */}

          <img
              src="https://www.inthekitchenwithmatt.com/wp-content/uploads/2019/09/classic-restaurant-style-belgian-waffles.jpg"
              alt="waffles"
          />
        {/* </div>   */}
          <div className="card-text">
              <h3>Wake up to smell of waffles</h3>
              <p>
                The gorgeous scent of vanilla infused waffles. Now that's the
                perfect start to the weekend
              </p>
            <div className="text-bottom">
                {" "}
                Preparation time: 10min <br /> Cook time: 15min
            </div>
            </div>
        
      </div>
      <div className="recipe-card">
        {/* <div id="soup-card"> */}
          <img
            src="https://bing.com/th?id=OSK.9159252a04638404f0d5cab853877912"
            alt="green-curry"
          />
          <div className="card-text">
            <h3>Thai food near you?</h3>
            <p>
            You can delete the takeaway app now once you find out how easy it is
            to make thai food at home.
            </p>
            <div className="text-bottom">
              Preparation time: 15min <br /> Cook time: 25min
            </div>
          </div>
        {/* </div> */}
      </div>
      <div className="recipe-card">
        <img
          src="https://bing.com/th?id=AMMS_2a78c7783ca95ffb97d6e20f5181eac1"
          alt="waffles"
        />
        <div className="card-text">
          <h3>Tender Tandoori wings</h3>
          <p>
            What makes this recipe simple is you can bake these in the oven with
            the marinade. Wash your chicken first though. This is not up for
            debate.
          </p>
          <div className="text-bottom">
            Preparation time: 10min <br /> Cook time: 15min
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
