export default function AboutPage() {
  console.log(import.meta.env.VITE_NAME);
  
    return (
      <section>
        <h2>About this app</h2>
        <p>
          This demo uses the World Population API and React Router to practise
          data fetching and client-side routing. I Appologise for how outdated some of the API data is...
        </p>
        <p>
          Try changing the URL or using the navigation links to see how different
          routes render different views.
        </p>
      </section>
    );
  }
