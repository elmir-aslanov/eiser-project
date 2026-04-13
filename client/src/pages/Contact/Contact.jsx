const Contact = () => {
  return (
    <main>
      <section className="inner-banner"><div className="container"><h1>Contact Us</h1></div></section>
      <section className="contact-section">
        <div className="container contact-grid">
          <div>
            <h3>California, United States</h3>
            <p>Santa monica bullevard</p>
            <p>+01 253 565 2365</p>
            <p>support@colorlib.com</p>
          </div>
          <form className="contact-form">
            <input placeholder="Enter your name" />
            <input placeholder="Enter email address" />
            <input placeholder="Enter Subject" />
            <textarea rows={6} placeholder="Enter Message" />
            <button type="button" className="cta-btn">Send Message</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
