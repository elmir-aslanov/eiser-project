import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="inner-page">
      <section className="inner-banner">
        <div className="container">
          <h1>404</h1>
        </div>
      </section>
      <section className="inner-content">
        <div className="container">
          <h2>Page Not Found</h2>
          <p>The page you are trying to open does not exist.</p>
          <p><Link to="/" className="cta-btn">Back to Home</Link></p>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
