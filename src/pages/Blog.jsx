// src/pages/Blog.jsx
import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  return (
    <div style={styles.container}>
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>GROWTOPIA Blog</h1>
        <p style={styles.heroSubtitle}>
          Insights, tips, and innovations in agriculture technology
        </p>
      </section>

      <section style={styles.blogSection}>
        <div style={styles.blogsGrid}>
          {blogs.map((post) => (
            <article key={post.id} style={styles.blogCard}>
              <div style={styles.blogImage}>{post.image}</div>

              <div style={styles.blogContent}>
                <span style={styles.categoryBadge}>{post.category}</span>

                <h2 style={styles.blogTitle}>
                  <Link to={`/blog/${post.id}`} style={styles.titleLink}>
                    {post.title}
                  </Link>
                </h2>

                <p style={styles.blogExcerpt}>{post.excerpt}</p>

                <div style={styles.blogMeta}>
                  <div style={styles.metaItem}>
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div style={styles.metaItem}>
                    <Calendar size={16} />
                    <span>
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>

                <Link to={`/blog/${post.id}`} style={styles.readMoreLink}>
                  Read More <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1600px",
    margin: "0 auto",
    width: "100%",
  },
  hero: {
    background: "linear-gradient(135deg, #2d5016 0%, #6b9e3e 100%)",
    color: "white",
    padding: "4rem 1.5rem",
    textAlign: "center",
  },
  heroTitle: {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    marginBottom: "1rem",
    color: "white",
  },
  heroSubtitle: {
    fontSize: "clamp(1rem, 3vw, 1.3rem)",
    opacity: 0.9,
  },
  blogSection: {
    padding: "3rem 1.5rem",
  },
  blogsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
    gap: "2rem",
    maxWidth: "100%",
  },
  blogCard: {
    background: "white",
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    overflow: "hidden",
    transition: "transform 0.3s, box-shadow 0.3s",
    display: "flex",
    flexDirection: "column",
  },
  blogImage: {
    fontSize: "clamp(4rem, 8vw, 6rem)",
    background: "#f8f9fa",
    padding: "2rem",
    textAlign: "center",
    borderBottom: "3px solid #6b9e3e",
  },
  blogContent: {
    padding: "1.5rem",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  categoryBadge: {
    display: "inline-block",
    background: "#e8f5e9",
    color: "#2d5016",
    padding: "0.3rem 1rem",
    borderRadius: "15px",
    fontSize: "0.85rem",
    fontWeight: "600",
    marginBottom: "1rem",
    alignSelf: "flex-start",
  },
  blogTitle: {
    fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
    marginBottom: "1rem",
    lineHeight: "1.4",
  },
  titleLink: {
    color: "#2d5016",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  blogExcerpt: {
    color: "#666",
    lineHeight: "1.7",
    marginBottom: "1.5rem",
    flex: 1,
    fontSize: "clamp(0.9rem, 2vw, 1rem)",
  },
  blogMeta: {
    display: "flex",
    gap: "1rem",
    marginBottom: "1.5rem",
    paddingTop: "1rem",
    borderTop: "1px solid #e0e0e0",
    flexWrap: "wrap",
  },
  metaItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "#666",
    fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
  },
  readMoreLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "#6b9e3e",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "clamp(0.9rem, 2vw, 1rem)",
    transition: "gap 0.3s",
  },
};

export default Blog;
