import { rentals } from "@/data/properties";

export default function Home() {
  const availableRentals = rentals.filter((rental) => rental.available);

  return (
    <main>
      <div className="announcement">Privately owned rentals · Raleigh, North Carolina</div>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Orchid Homes LLC home">
          <span className="brand-flower" aria-hidden="true">✿</span>
          <span>
            <strong>Orchid Homes LLC</strong>
            <small>Quality homes. Thoughtful living.</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#rentals">Rentals</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Raleigh, North Carolina</p>
          <h1>A place to<br />put down roots.</h1>
          <p className="hero-description">
            Discover comfortable two-bedroom rentals from Orchid Homes LLC, a private local landlord.
          </p>
          <a className="button" href="#rentals">Explore rentals <span aria-hidden="true">→</span></a>
        </div>
        <div className="hero-art" aria-label="Orchid-inspired decorative artwork" role="img">
          <div className="orchid-orbit orbit-one" />
          <div className="orchid-orbit orbit-two" />
          <div className="orchid-bloom">✿</div>
          <span className="art-caption">Find a space<br />that feels like yours.</span>
        </div>
      </section>

      <section className="portfolio-strip" aria-label="Rental portfolio">
        <div><strong>3</strong><span>Buildings</span></div>
        <div><strong>14</strong><span>Residential units</span></div>
        <div><strong>{availableRentals.length}</strong><span>Listed as available*</span></div>
      </section>

      <section className="section rentals-section" id="rentals">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Find your next home</p>
            <h2>Available rentals</h2>
            <p className="section-intro">Browse the two-bedroom rentals below. Confirm current availability, pricing, and lease details directly with the landlord.</p>
          </div>
          <a className="text-link" href="#contact">Have a question? <span aria-hidden="true">↗</span></a>
        </div>
        <div className="rental-grid">
          {availableRentals.map((rental) => (
            <article className="rental-card" key={rental.id}>
              <div className={`rental-image rental-image-${rental.id}`}>
                <span className="availability">Availability to confirm</span>
                <span className="image-flower" aria-hidden="true">✿</span>
                <span className="image-number">ORCHID HOMES · {String(rental.id).padStart(2, "0")}</span>
              </div>
              <div className="rental-content">
                <p className="rent">{rental.rent === null ? "Contact for pricing" : `$${rental.rent.toLocaleString("en-US")}`} {rental.rent !== null && <span>/ month</span>}</p>
                <h3>{rental.title}</h3>
                <p className="address">{rental.address}</p>
                <div className="rental-facts">
                  <span>{rental.bedrooms} bedrooms</span>
                  {rental.bathrooms !== null && <span>{rental.bathrooms} bath</span>}
                  {rental.squareFeet !== null && <span>{rental.squareFeet.toLocaleString("en-US")} sq. ft.</span>}
                </div>
                <p className="rental-description">{rental.description}</p>
                {rental.amenities.length > 0 && (
                  <ul className="amenities">
                    {rental.amenities.map((amenity) => <li key={amenity}>{amenity}</li>)}
                  </ul>
                )}
                <a className="card-link" href="#contact">Ask about this home <span aria-hidden="true">→</span></a>
              </div>
            </article>
          ))}
        </div>
        <p className="fine-print">*Availability count reflects the current prototype data and must be confirmed by Orchid Homes LLC before this website is published.</p>
      </section>

      <section className="about-section" id="about">
        <div className="about-mark" aria-hidden="true">✿</div>
        <div className="about-copy">
          <p className="eyebrow">A local private landlord</p>
          <h2>Simple, welcoming<br />rental living.</h2>
          <p>Orchid Homes LLC is a privately owned rental business with three buildings and 14 residential units in Raleigh. This website is designed to help renters discover available homes, review key details, and get in touch about a showing.</p>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">Start a conversation</p>
        <h2>Interested in a rental?</h2>
        <p>Reach out to ask about availability, pricing, or scheduling a showing.</p>
        <div className="contact-note">Landlord contact details will be added here after approval.</div>
      </section>

      <footer className="site-footer">
        <a className="footer-brand" href="#home">✿ Orchid Homes LLC</a>
        <span>Raleigh, North Carolina</span>
        <small>Website concept for owner review. Listing information and availability must be verified before publication.</small>
      </footer>
    </main>
  );
}
