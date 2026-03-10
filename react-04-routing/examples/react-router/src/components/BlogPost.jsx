import { useParams, Link } from "react-router-dom";
import { posts } from "../posts";

export default function BlogPost() {
  const { id } = useParams();
  // grabs :id from /blog/:id
  const post = posts.find((post) => post.id === id);
  //return the first post (post) whose id property is equal to the id from the URL

  if (!post) {
    return (
      <section>
        <h2>Post not found</h2>
        <p>We could not find a blog post with id {id}.</p>
        <p>
          <Link to="/">Back to all posts</Link>
        </p>
      </section>
    );
  }

  return (
    <article>
      <h2>{post.title}</h2>
      <p><em>{post.summary}</em></p>
      <p>{post.body}</p>
      <p>
        <Link to="/">Back to all posts</Link>
      </p>
    </article>
  );
}
