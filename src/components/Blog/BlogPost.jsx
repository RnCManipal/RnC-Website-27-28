import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../../assets/blogs.js";
import { slugify } from "../../utils/slugify.js";
import "./Blog.css";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => slugify(p.title) === slug);

  if (!post) {
    return (
      <div className="blog-post-container">
        <h1>Post not found</h1>
        <Link to="/blog" className="back-to-blog">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="blog-post-container">
      <Link to="/blog" className="back-to-blog">
        ← Back to Blog
      </Link>
      <h1>{post.title}</h1>
      <h5 className="blog-post-author">{post.name}</h5>
      <p className="blog-post-body">{post.body}</p>
    </div>
  );
};

export default BlogPost;