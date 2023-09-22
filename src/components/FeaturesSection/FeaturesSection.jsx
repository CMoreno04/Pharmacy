import React from "react";

import FeaturesCard from "../FeaturesCard/FeaturesCard";

import "../../styles/flex-styles.css";
import "./features-section-styles.css";

const FeaturesSection = React.forwardRef((props, ref) => {
  return (
    <section className="features-section flex-container justify-center align-center" ref={ref}>
      <div className="features-content flex-container flex-column">
        <h1 className="features-title">
          Unlock a World of <br/> Healthcare Convenience
        </h1>
        <div className="features-card-container">
          <FeaturesCard title="Prescription Submission">
            Submit, track, and manage prescriptions effortlessly. Stay informed,
            pay securely, and choose pickup or delivery. Simplify your
            healthcare journey."
          </FeaturesCard>
          <FeaturesCard title="Pharmacy Selection">
            Choose the pharmacy that suits you best from our extensive network.
            Whether you prefer a nearby location, preferred brands, or the best
            deals, we've got you covered.
          </FeaturesCard>
          <FeaturesCard title="Medication Management">
            Never Miss a Dose! Set reminders, track medication history, and
            receive timely refill notifications. Taking care of your health has
            never been easier.
          </FeaturesCard>
          <FeaturesCard title="Payment Processing">
            Pay securely on our website or app. Your order is processed once
            payment is complete, ensuring a smooth prescription experience.
          </FeaturesCard>
          <FeaturesCard title="Order Tracking">
            Stay in the know with real-time order tracking. Get estimated wait
            times and custom instructions, ensuring a hassle-free experience.
          </FeaturesCard>
          <FeaturesCard title="Expert Support, Anytime">
            Need help or have questions? Our 24/7 chat support is here to assist
            you.
          </FeaturesCard>
        </div>
      </div>
    </section>
  );
});

export default FeaturesSection;
