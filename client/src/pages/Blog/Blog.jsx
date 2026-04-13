import BlogCard from "../../components/common/BlogCard";
import { blogPosts } from "../../data/blogData";

const Blog = () => {
  return (
    <main>
      <section className="inner-banner"><div className="container"><h1>Blog</h1></div></section>
      <section className="blog-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => <BlogCard key={post.id} post={post} />)}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
