import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../../assets/blogs.js";
import { slugify } from "../../utils/slugify.js";
import Header2 from "../Header/Header2";
import "./Blog.css";

const PREVIEW_LENGTH = 120;

const getPreview = (text) => {
  if (text.length <= PREVIEW_LENGTH) return text;
  return text.slice(0, PREVIEW_LENGTH).trim() + "...";
};

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header2 title="Blog" subtitle="Latest updates from RNC" />
      <div className="blog-board">
        <div className="blog-search-bar">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="blog-grid">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <Link
                to={`/blog/${slugify(post.title)}`}
                className="blog-member"
                key={index}
              >
                <h3>{post.title}</h3>
                <p>{getPreview(post.body)}</p>
                <h5>{post.name}</h5>
                <span className="blog-read-more">Read more →</span>
              </Link>
            ))
          ) : (
            <p className="blog-no-results">No posts match your search.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;