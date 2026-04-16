import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <article className="blog-card">
      <img src={post.image} alt={post.title} />
      <div className="blog-body">
        <div className="blog-meta">
          <span>By Admin</span>
          <span>2 Comments</span>
        </div>
        <h3>{post.title}</h3>
        <p>{post.desc}</p>
        <Link to={`/blog/${post.id}`}>Learn More</Link>
      </div>
    </article>
  );
};

export default BlogCard;
