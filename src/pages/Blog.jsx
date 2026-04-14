// src/pages/Blog.jsx - MOBILE RESPONSIVE
import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  return (
    <div className="bl-container">

      {/* ── Hero Section — mirrors Products exactly ── */}
      <section className="bl-editorial-header">
        <div className="bl-hero-overlay" />
        <div className="bl-hero-content">
          <div className="bl-label-box">OUR BLOG</div>
          <h1 className="bl-main-headline">
            GROWTOPIA,<br />
            <span className="bl-headline-italic">SHAPING THE FUTURE</span>
          </h1>
          <p className="bl-header-quote">
            Fresh reads for balcony growers, terrace gardeners, bungalow households,
            nursery farms, and green institutions — every urban space deserves to flourish.
          </p>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="bl-blog-section">
        <div className="bl-section-header">
          <div className="bl-section-label-container">
            <div className="bl-section-label">LATEST ARTICLES</div>
            <div className="bl-section-label-line" />
          </div>
          <h2 className="bl-section-title">Recent Posts</h2>
        </div>

        <div className="bl-blogs-grid">
          {blogs.map((post) => (
            <article key={post.id} className="bl-blog-card">
              <div className="bl-blog-image-container">
                <div className="bl-blog-image">{post.image}</div>
                <div className="bl-category-badge">{post.category}</div>
              </div>

              <div className="bl-blog-content">
                <h2 className="bl-blog-title">
                  <Link to={`/blog/${post.id}`} className="bl-title-link">
                    {post.title}
                  </Link>
                </h2>

                <p className="bl-blog-excerpt">{post.excerpt}</p>

                <div className="bl-blog-meta">
                  <div className="bl-meta-item">
                    <User size={16} color="#f4a220" />
                    <span>{post.author}</span>
                  </div>
                  <div className="bl-meta-item">
                    <Calendar size={16} color="#f4a220" />
                    <span>
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>

                <Link to={`/blog/${post.id}`} className="bl-read-more">
                  READ ARTICLE <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Work+Sans:wght@300;400;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; }

        /* ── Base ── */
        .bl-container {
          max-width: 100%;
          width: 100%;
          font-family: 'Work Sans', sans-serif;
          background: #fafaf8;
          overflow-x: hidden;
        }

        /* ── Hero — pixel-perfect match to Products ── */
        .bl-editorial-header {
          background-color: #1a2f0d;
          background-image: linear-gradient(to bottom, rgba(26,47,13,0.45), rgba(26,47,13,0.65)), url('/blogNav.webp');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          min-height: 60vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem;
        }
        .bl-hero-overlay {
          position: absolute;
          inset: 0;
          background: transparent;
        }
        .bl-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
          width: 100%;
          padding: 0 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .bl-label-box {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          border: 2px solid #f4a220;
          font-size: 0.7rem;
          letter-spacing: 4px;
          font-weight: 700;
          margin-bottom: 2rem;
          color: #f4a220;
          background: rgba(244, 162, 32, 0.05);
        }
        .bl-main-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5.5vw, 4.5rem);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: clamp(-0.5px, -0.04em, -2px);
          color: white;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          word-break: break-word;
        }
        .bl-headline-italic {
          font-style: italic;
          font-weight: 400;
          color: #8fbc5e;
        }
        .bl-header-quote {
          font-size: clamp(0.875rem, 2vw, 1.1rem);
          line-height: 1.8;
          color: rgba(255,255,255,0.92);
          font-style: italic;
          font-weight: 300;
          max-width: 560px;
        }

        /* ── Blog Section ── */
        .bl-blog-section {
          padding: 6rem 3rem;
          background: white;
        }
        .bl-section-header {
          max-width: 1400px;
          margin: 0 auto 4rem;
          text-align: center;
        }
        .bl-section-label-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1.2rem;
        }
        .bl-section-label {
          font-size: 0.7rem;
          letter-spacing: 3px;
          font-weight: 700;
          color: #f4a220;
        }
        .bl-section-label-line {
          width: 60px;
          height: 2px;
          background: #f4a220;
        }
        .bl-section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          color: #1a2f0d;
        }

        /* ── Blog Grid ── */
        .bl-blogs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.5rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        .bl-blog-card {
          background: white;
          border: 3px solid #1a2f0d;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.3s;
        }
        .bl-blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        .bl-blog-image-container {
          position: relative;
          width: 100%;
          background: #f8f9fa;
          border-bottom: 3px solid #f4a220;
        }
        .bl-blog-image {
          font-size: clamp(4rem, 8vw, 5rem);
          padding: 3rem 2rem;
          text-align: center;
          min-height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bl-category-badge {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: #1a2f0d;
          color: #f4a220;
          padding: 0.5rem 1.2rem;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .bl-blog-content {
          padding: 2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .bl-blog-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.3rem, 3vw, 1.6rem);
          margin-bottom: 1rem;
          line-height: 1.3;
          font-weight: 700;
        }
        .bl-title-link {
          color: #1a2f0d;
          text-decoration: none;
          transition: color 0.3s;
        }
        .bl-title-link:hover { color: #6b9e3e; }
        .bl-blog-excerpt {
          color: #666;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          flex: 1;
          font-size: 0.95rem;
        }
        .bl-blog-meta {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          padding-top: 1.5rem;
          border-top: 2px solid #f0f0f0;
          flex-wrap: wrap;
        }
        .bl-meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #666;
          font-size: 0.85rem;
          font-weight: 500;
        }
        .bl-read-more {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          color: #1a2f0d;
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 1px;
          transition: gap 0.3s;
          align-self: flex-start;
          padding: 0.75rem 0;
          border-bottom: 2px solid #f4a220;
        }
        .bl-read-more:hover { gap: 1rem; }

        /* ── Tablet (≤ 1024px) ── */
        @media (max-width: 1024px) {
          .bl-blogs-grid { grid-template-columns: repeat(2, 1fr); gap: 2rem; }
        }

        /* ── Mobile (≤ 768px) ── */
        @media (max-width: 768px) {
          .bl-editorial-header { padding: 3rem 1.5rem; min-height: 48vh; }
          .bl-main-headline { font-size: clamp(1.8rem, 8vw, 3rem); letter-spacing: -0.5px; }
          .bl-header-quote { font-size: clamp(0.8rem, 3vw, 1rem); }
          .bl-blog-section { padding: 4rem 1.5rem; }
          .bl-blogs-grid { grid-template-columns: 1fr; gap: 2rem; }
        }

        /* ── Small Mobile (≤ 480px) ── */
        @media (max-width: 480px) {
          .bl-editorial-header { padding: 2rem 1.25rem; min-height: 42vh; }
          .bl-main-headline { font-size: clamp(1.6rem, 8vw, 2.4rem); }
          .bl-header-quote { font-size: 0.82rem; }
          .bl-blog-card { border-width: 2px; }
        }

        /* ── Extra small (≤ 380px) ── */
        @media (max-width: 380px) {
          .bl-main-headline { font-size: 7.5vw; letter-spacing: 0; }
        }
      `}</style>
    </div>
  );
};

export default Blog;