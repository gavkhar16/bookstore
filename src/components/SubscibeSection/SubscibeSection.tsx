"use client";
import "./SubscibeSection.css";

export default function SubscibeSection() {
  return (
    <section  id="subscribe" className="subscribe-section">
      <img src="/pictures/icons/up.svg" alt="decor-up" className="decor decor-up" />

      <div className="subscribe-wrapper">
        <div className="orange-box">
          <h2>Subscribe to Our Newsletter</h2>
          <p>
            Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet,
            consectetur. Elit adipiscing enim pharetra hac.
          </p>
        </div>

        <div className="form-wrap">
          <form
            className="subscribe-form"
            action="#"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="envelope">
              <p>✉️</p>
            </div>

            <input
              type="email"
              placeholder="youremail123@gmail.com"
              required
              aria-label="email"
            />

            <button type="submit" className="subscribe-btn">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <img src="/pictures/icons/leftSide.svg" alt="decor-left" className="decor decor-left" />
      <img src="/pictures/icons/down.svg" alt="decor-down" className="decor decor-down" />
    </section>
  );
}
