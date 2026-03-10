import { Link } from "react-router-dom";
import { posts } from "../posts";

export default function BlogList() {
  return (
    <section>
      <h2>All posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>
              <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </h3>
            <p>{post.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
