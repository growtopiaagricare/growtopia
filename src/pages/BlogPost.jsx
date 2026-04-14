// src/pages/BlogPost.jsx — fully responsive, class-based CSS (mirrors About.jsx pattern)
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogs.find((b) => b.id === parseInt(id));

  if (!post) {
    return (
      <div className="bp-not-found">
        <div className="bp-not-found-content">
          <h2 className="bp-not-found-title">Blog Post Not Found</h2>
          <p className="bp-not-found-text">The article you're looking for doesn't exist.</p>
          <Link to="/blog">
            <button className="bp-back-button">BACK TO BLOG</button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogs.filter((b) => b.id !== post.id).slice(0, 3);

  return (
    <div className="bp-container">

      {/* Back Button */}
      <button onClick={() => navigate("/blog")} className="bp-back-btn">
        <ArrowLeft size={20} /> BACK TO BLOG
      </button>

      {/* Article */}
      <article className="bp-article">

        {/* ── Hero / Header ── */}
        <header className="bp-header">
          {/* Row 1: Category + Date */}
          <div className="bp-header-top">
            <div className="bp-category-badge">{post.category}</div>
            <div className="bp-meta-info">
              <div className="bp-meta-item">
                <Calendar size={16} color="#f4a220" />
                <span>
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>

          {/* Row 2: Title */}
          <h1 className="bp-title">{post.title}</h1>

          {/* Row 3: Author */}
          <div className="bp-author-section">
            <div className="bp-author-info">
              <div className="bp-author-avatar">
                <User size={18} color="#f4a220" />
              </div>
              <div className="bp-author-text">
                <div className="bp-author-name">{post.author}</div>
                <div className="bp-author-role">{post.role}</div>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="bp-image-section">
          <div className="bp-blog-image">{post.image}</div>
        </div>

        {/* Content */}
        <div className="bp-content">
          {post.content.map((block,index) => {
            //handle heading type
            if(block.type === 'heading'){
              return (
                <h2 key={index} className="bp-heading">
                  {block.text}
                </h2>
              );
            }

            //handle subheading type
            if(block.type === 'subheading'){
              return (
                <h3 key={index} className="bp-subheading">
                  {block.text}
                </h3>
              );
            }

            //handle list type
            if (block.type === 'list'){
              return (
                <ul key={index} className="bp-list">
                  {block.items.map((item,i) => (
                    <li key={i} className="bp-item">{item}</li>
                  ))}
                </ul>
              );
            }

            //handle paragraph type (default)
            return (
              <p key={index} className="bp-paragraph">
                {block.text}
              </p>
            );
          })}
        </div>

        {/* Tags Footer */}
        <footer className="bp-footer">
          <div className="bp-tags-container">
            <Tag size={18} color="#f4a220" className="bp-tag-icon" />
            <div className="bp-tags-list">
              <span className="bp-tag">{post.category}</span>
              <span className="bp-tag">Agriculture</span>
              <span className="bp-tag">Technology</span>
              <span className="bp-tag">Farming</span>
            </div>
          </div>
        </footer>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bp-related-section">
          <div className="bp-related-header">
            <div className="bp-related-label-row">
              <div className="bp-related-label">MORE ARTICLES</div>
              <div className="bp-related-label-line" />
            </div>
            <h2 className="bp-related-title">Related Articles</h2>
          </div>

          <div className="bp-related-grid">
            {relatedPosts.map((rp) => (
              <Link key={rp.id} to={`/blog/${rp.id}`} className="bp-related-card">
                <div className="bp-related-img-wrap">
                  <div className="bp-related-img">{rp.image}</div>
                </div>
                <div className="bp-related-content">
                  <h3 className="bp-related-post-title">{rp.title}</h3>
                  <p className="bp-related-excerpt">{rp.excerpt}</p>
                  <span className="bp-read-more">READ MORE →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Work+Sans:wght@300;400;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; }

        /* ── Base ────────────────────────────────────────── */
        .bp-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: clamp(1.5rem, 4vw, 3rem) clamp(1rem, 4vw, 2rem);
          font-family: 'Work Sans', sans-serif;
          // background: #fafaf8;
        }

        /* Back button */
        .bp-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: none;
          color: #1a2f0d;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 1px;
          cursor: pointer;
          margin-bottom: 2rem;
          padding: 0.5rem 0;
          transition: gap 0.3s;
        }
        .bp-back-btn:hover { gap: 0.85rem; }

        /* Article shell */
        .bp-article {
          background: white;
          border: 3px solid #1a2f0d;
          overflow: hidden;
          margin-bottom: 4rem;
        }

        /* ── Hero Header ── */

        .bp-header {
          padding: clamp(1.5rem, 4vw, 3rem);
          border-bottom: 3px solid #f4a220;
        }

        .bp-header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 1.75rem;
        }

        .bp-category-badge {
          background: #1a2f0d;
          color: #f4a220;
          padding: 0.5rem 1.5rem;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .bp-meta-info {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .bp-meta-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: #666;
          font-size: 0.875rem;
        }

        .bp-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.5rem, 4.5vw, 3rem);
          color: #1a2f0d;
          margin-bottom: 1.75rem;
          line-height: 1.2;
          font-weight: 700;
          word-break: break-word;
        }

        .bp-author-section {
          padding-top: 1.25rem;
          border-top: 2px solid #f0f0f0;
        }

        .bp-author-info {
          display: flex;
          align-items: center;
          gap: 0.875rem;
        }

        .bp-author-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #f0f7ea;
          border: 2px solid #f4a220;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .bp-author-text { 
          display: flex; 
          flex-direction: column; 
          gap: 0.2rem; 
        }

        .bp-author-name { 
          font-weight: 700; 
          color: #1a2f0d; 
          font-size: 0.95rem;
        }

        .bp-author-role { 
          font-size: 0.8rem; 
          color: #999; 
        }

        /* Featured image */
        .bp-image-section {
          background: #f8f9fa;
          border-bottom: 3px solid #f4a220;
        }

        .bp-blog-image {
          font-size: clamp(3.5rem, 9vw, 7rem);
          text-align: center;
          padding: clamp(2rem, 5vw, 4rem) 2rem;
          min-height: clamp(180px, 25vw, 300px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Content */
        .bp-content { 
          padding: clamp(1.5rem, 5vw, 4rem);
          max-width: 900px;
          margin: 0 auto;
        }

        .bp-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.5rem, 3.5vw, 2.25rem);
          color: #1a2f0d;
          margin: 3rem 0 1.25rem 0;
          line-height: 1.2;
          font-weight: 900;
          position: relative;
        }

        .bp-subheading {
          font-family: 'Work Sans', sans-serif;
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          color: #f4a220;
          margin: 2rem 0 1rem 0;
          font-weight: 700;
          text-transformation: uppercase;
          letter-spacing: 0.5px;
        }

        .bp-paragraph {
          font-size: 1.125rem;
          color: #374151;
          line-height: 1.75;
          margin-bottom: 1.75rem;
          font-family: 'Work Sans', sans-serif;
          font-weight: 400;
        }

        .bp-list {
          margin: 1.5rem 0 2rem 1.5rem;
        }

        .bp-item {
          margin-bottom: 0.875rem;
          font-size: 1.05rem;
          color: #4b5563;
          line-height: 1.6;
        }

        .bp-paragraph:first-of-type::first-letter{
          float:left;
          font-family: 'Playfair Display', serif;
          font-size: 3.5rem;
          line-height: 1;
          font-weight: 900;
          padding-right: 10px;
          color: #1a2f0d;
        }

        /* Tags footer */
        .bp-footer {
          padding: 1.75rem clamp(1.5rem, 4vw, 3rem);
          border-top: 3px solid #f0f0f0;
          background: #fafaf8;
        }
        .bp-tags-container {
          display: flex;
          align-items: flex-start;
          gap: 0.875rem;
        }
        .bp-tag-icon { flex-shrink: 0; margin-top: 2px; }
        .bp-tags-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.625rem;
        }
        .bp-tag {
          display: inline-block;
          background: #1a2f0d;
          color: white;
          padding: 0.35rem 0.875rem;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 1px;
        }

        /* ── Related Section ── */
        .bp-related-section {
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 3px solid #e0e0e0;
        }
        .bp-related-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .bp-related-label-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1rem;
        }
        .bp-related-label {
          font-size: 0.7rem;
          letter-spacing: 3px;
          font-weight: 700;
          color: #f4a220;
        }
        .bp-related-label-line { width: 60px; height: 2px; background: #f4a220; }
        .bp-related-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 4vw, 2.5rem);
          font-weight: 700;
          color: #1a2f0d;
        }
        .bp-related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .bp-related-card {
          background: white;
          border: 3px solid #1a2f0d;
          overflow: hidden;
          color: inherit;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s;
        }
        .bp-related-card:hover { transform: translateY(-5px); }
        .bp-related-img-wrap {
          background: #f8f9fa;
          border-bottom: 3px solid #f4a220;
        }
        .bp-related-img {
          font-size: 3.5rem;
          text-align: center;
          padding: 2rem;
          min-height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bp-related-content { padding: 1.5rem; }
        .bp-related-post-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          color: #1a2f0d;
          margin-bottom: 0.75rem;
          font-weight: 700;
          line-height: 1.3;
        }
        .bp-related-excerpt {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        .bp-read-more {
          color: #1a2f0d;
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 1px;
          border-bottom: 2px solid #f4a220;
          padding-bottom: 0.25rem;
          display: inline-block;
        }

        /* Not Found */
        .bp-not-found {
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fafaf8;
          padding: 3rem clamp(1rem, 4vw, 3rem);
        }
        .bp-not-found-content { text-align: center; max-width: 600px; }
        .bp-not-found-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.75rem, 5vw, 3rem);
          color: #1a2f0d;
          margin-bottom: 1rem;
          font-weight: 700;
        }
        .bp-not-found-text { font-size: 1.1rem; color: #666; margin-bottom: 2rem; }
        .bp-back-button {
          padding: 1rem 2.5rem;
          background: #f4a220;
          color: white;
          border: none;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .bp-back-button:hover { background: #d4891a; transform: translateY(-2px); }

        /* ── Tablet (≤ 1024px) ──────────────────────────── */
        @media (max-width: 1024px) {
          .bp-related-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* ── Mobile (≤ 768px) ───────────────────────────── */
        @media (max-width: 768px) {
          .bp-header-top {
            flex-direction: column;
            align-items: flex-start;
          }
          .bp-related-grid { grid-template-columns: 1fr; gap: 1.25rem; }
          .bp-related-section { margin-top: 2.5rem; padding-top: 2rem; }
          .bp-related-header { margin-bottom: 2rem; }
        }

        /* ── Small Mobile (≤ 480px) ─────────────────────── */
        @media (max-width: 480px) {
          .bp-tags-container { flex-direction: row; align-items: flex-start; }
          .bp-author-name { font-size: 0.9rem; }
          .bp-paragraph { font-size: 0.975rem; }
        }

        /* ── Extra small (≤ 380px) ──────────────────────── */
        @media (max-width: 380px) {
          .bp-category-badge { padding: 0.4rem 1rem; font-size: 0.65rem; }
          .bp-author-avatar { width: 36px; height: 36px; }
          .bp-tag { font-size: 0.67rem; padding: 0.3rem 0.7rem; }
        }
      `}</style>
    </div>
  );
};

export default BlogPost;