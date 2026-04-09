import React from 'react';
import { FiMessageCircle, FiArrowRight } from 'react-icons/fi';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Ford clever bed stops your sleeping partner hogging the whole",
      image: "https://preview.colorlib.com/theme/eiser/img/b1.jpg",
      author: "Admin",
      comments: 2,
      date: "Jan 10, 2026",
      desc: "Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light Forth."
    },
    {
      id: 2,
      title: "Ford clever bed stops your sleeping partner hogging the whole",
      image: "https://preview.colorlib.com/theme/eiser/img/b2.jpg",
      author: "Admin",
      comments: 2,
      date: "Jan 10, 2026",
      desc: "Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light Forth."
    },
    {
      id: 3,
      title: "Ford clever bed stops your sleeping partner hogging the whole",
      image: "https://preview.colorlib.com/theme/eiser/img/b3.jpg",
      author: "Admin",
      comments: 2,
      date: "Jan 10, 2026",
      desc: "Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light Forth."
    }
  ];

  return (
    <section className="blog-section py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="section-title text-center mb-16">
          <h2 className="text-3xl font-bold text-[#2a2a2a] uppercase mb-4 tracking-wider">LATEST BLOG</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">Bring called seed first of third give itself now ment</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <div key={blog.id} className="blog-item group">
              <div className="blog-image overflow-hidden mb-6">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="blog-content">
                <div className="blog-meta flex items-center gap-6 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1 hover:text-[#71cd14] cursor-pointer transition-colors">
                    By {blog.author}
                  </span>
                  <span className="flex items-center gap-1 hover:text-[#71cd14] cursor-pointer transition-colors">
                    <FiMessageCircle size={12} /> {blog.comments} Comments
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#2a2a2a] mb-4 group-hover:text-[#71cd14] transition-colors leading-tight">
                  <a href="#">{blog.title}</a>
                </h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {blog.desc}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#2a2a2a] hover:text-[#71cd14] transition-colors uppercase tracking-widest"
                >
                  Learn More <FiArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
