import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../../data/blogData";

const BlogDetails = () => {
  const { id } = useParams();
  const post = useMemo(() => blogPosts.find((item) => item.id === id) || blogPosts[0], [id]);

  return (
    <main>
      <section className="inner-banner"><div className="container"><h1>Blog Details</h1></div></section>
      <section className="blog-details">
        <div className="container">
          <img src={post.image} alt={post.title} className="blog-details-image" />
          <h2>{post.title}</h2>
          <p>{post.desc}</p>
          <p>{post.desc}</p>
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;
