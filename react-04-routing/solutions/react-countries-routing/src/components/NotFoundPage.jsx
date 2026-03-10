import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section>
      <h2>Page not found</h2>
      <p>We could not find that route.</p>
      <p>
        <Link to="/">Go back to the home page</Link>
      </p>
    </section>
  );
}
