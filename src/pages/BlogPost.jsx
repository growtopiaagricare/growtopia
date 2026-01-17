// src/pages/BlogPost.jsx
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { blogs } from "../data/blogs"; //removed getBlogById
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // ERROR: 'const post = blogs(id)' treated an array like a function.
  // FIX: Changed to 'blogs.find(b => b.id === parseInt(id))'.
  // WHY: .find() is the correct array method to locate a specific object by its ID.
  //b => b.id: This is a shortcut for saying, "For every blog in the list, look at its id."
  //parseInt(id): This converts that text ("1") into a Number (1).
  const post = blogs.find((b) => b.id === parseInt(id));

  if (!post) {
    return (
      <div style={styles.notFound}>
        <h2>Blog Post Not Found</h2>
        <Link to='/blog'>
          <button style={styles.backButton}>Back to Blog</button>
        </Link>
      </div>
    );
  }

  // Get other blog posts for recommendations
  const relatedPosts = blogs.filter((b) => b.id !== post.id).slice(0, 3);

  return (
    <div style={styles.container}>
      <button onClick={() => navigate("/blog")} style={styles.backBtn}>
        <ArrowLeft size={20} /> Back to Blog
      </button>

      <article style={styles.article}>
        <header style={styles.header}>
          <div style={styles.blogImage}>{post.image}</div>
          <span style={styles.categoryBadge}>{post.category}</span>
          <h1 style={styles.title}>{post.title}</h1>

          <div style={styles.meta}>
            <div style={styles.metaItem}>
              <User size={18} />
              <div>
                <strong>{post.author}</strong>
                <span style={styles.role}>{post.role}</span>
              </div>
            </div>
            <div style={styles.metaItem}>
              <Calendar size={18} />
              <span>
                {new Date(post.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        </header>

        <div style={styles.content}>
          {
            // ERROR: Arrow function used { } without a 'return' statement, showing nothing.
            // FIX: Added 'return' keyword inside the curly braces.
            // WHY: In JS, if you open a code block { } in a map, you must explicitly return the JSX.
            (Array.isArray(post.content) ? post.content : [post.content]).map((paragraph, index) => {
                return(<p key={index} style={styles.paragraph}>{paragraph.trim()}</p>);})}
        </div>

        <footer style={styles.footer}>
          <div style={styles.tags}>
            <Tag size={18} />
            <span>Tags: {post.category}, Agriculture, Technology, Farming</span>
          </div>
        </footer>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section style={styles.relatedSection}>
          <h2 style={styles.relatedTitle}>Related Articles</h2>
          <div style={styles.relatedGrid}>
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.id}`}
                style={styles.relatedCard}
              >
                <div style={styles.relatedImage}>{relatedPost.image}</div>
                <h3 style={styles.relatedPostTitle}>{relatedPost.title}</h3>
                <p style={styles.relatedExcerpt}>{relatedPost.excerpt}</p>
                <span style={styles.readMore}>Read More →</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "2rem",
  },
  backBtn: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    background: "transparent",
    border: "none",
    color: "#6b9e3e",
    fontSize: "1rem",
    cursor: "pointer",
    marginBottom: "2rem",
    padding: "0.5rem",
    fontWeight: "600",
  },
  article: {
    background: "white",
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    overflow: "hidden",
    marginBottom: "3rem",
  },
  header: {
    padding: "2rem",
    borderBottom: "2px solid #f0f0f0",
  },
  blogImage: {
    fontSize: "6rem",
    textAlign: "center",
    marginBottom: "1.5rem",
  },
  categoryBadge: {
    display: "inline-block",
    background: "#6b9e3e",
    color: "white",
    padding: "0.5rem 1.5rem",
    borderRadius: "20px",
    fontSize: "0.9rem",
    fontWeight: "600",
    marginBottom: "1rem",
  },
  title: {
    fontSize: "2.5rem",
    color: "#2d5016",
    marginBottom: "1.5rem",
    lineHeight: "1.3",
  },
  meta: {
    display: "flex",
    gap: "2rem",
    flexWrap: "wrap",
  },
  metaItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    color: "#666",
  },
  role: {
    display: "block",
    fontSize: "0.85rem",
    color: "#999",
  },
  content: {
    padding: "2rem",
  },
  paragraph: {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "#333",
    marginBottom: "1.5rem",
  },
  footer: {
    padding: "2rem",
    borderTop: "2px solid #f0f0f0",
    background: "#f8f9fa",
  },
  tags: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    color: "#666",
  },
  relatedSection: {
    marginTop: "3rem",
  },
  relatedTitle: {
    fontSize: "2rem",
    color: "#2d5016",
    marginBottom: "2rem",
    textAlign: "center",
  },
  relatedGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
  },
  relatedCard: {
    background: "white",
    borderRadius: "10px",
    padding: "1.5rem",
    textDecoration: "none",
    color: "inherit",
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
    transition: "transform 0.3s",
  },
  relatedImage: {
    fontSize: "3rem",
    textAlign: "center",
    marginBottom: "1rem",
  },
  relatedPostTitle: {
    fontSize: "1.1rem",
    color: "#2d5016",
    marginBottom: "0.5rem",
  },
  relatedExcerpt: {
    fontSize: "0.9rem",
    color: "#666",
    marginBottom: "1rem",
    lineHeight: "1.5",
  },
  readMore: {
    color: "#6b9e3e",
    fontWeight: "600",
    fontSize: "0.9rem",
  },
  notFound: {
    textAlign: "center",
    padding: "5rem 2rem",
  },
  backButton: {
    marginTop: "2rem",
    padding: "1rem 2rem",
    background: "#6b9e3e",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
  },
};

export default BlogPost;
