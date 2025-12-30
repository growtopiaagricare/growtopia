/**
 * blog.js
 * Renders a formatted Growtopia blog post on a webpage.
 */

const blogData = {
  title: "Growtopia: Shaping the Future of Smart Gardening",
  content: [
    "In a world where technology touches every corner of our lives, even our gardens are getting smarter. Growtopia, an emerging startup in the agri-tech space, is redefining how we connect with nature — through innovation, sustainability, and intelligent design.",

    "The Vision Behind Growtopia",
    "At Growtopia, we believe that gardening should be as intuitive as using your smartphone — yet as soulful as tending plants with your own hands. Our mission is to blend nature and technology seamlessly, helping every home, balcony, and community space nurture plants effortlessly, efficiently, and sustainably.",
    "Growtopia empowers both tech-savvy users and traditional gardeners through a balanced approach — combining AI-powered automation with smart manual tools that make gardening simpler and more rewarding.",

    "The Problem We’re Solving",
    "Urban lifestyles have made it harder for people to stay connected to nature.",
    "Busy schedules leave little time for plant care.",
    "Lack of knowledge leads to poor plant health.",
    "Water scarcity and inconsistent maintenance are growing concerns.",
    "Growtopia addresses these challenges with smart solutions that adapt to every gardener’s style — whether you prefer fully automated systems or hands-on gardening with guided assistance.",

    "The Technology Behind Growth",
    "Growtopia’s innovation lies in its dual-mode ecosystem:",

    "AI-Powered Smart Tools",
    "• IoT sensors monitor soil moisture, sunlight, humidity, and nutrients.",
    "• AI-driven insights recommend watering schedules, fertilizer needs, and plant health tips.",
    "• Automated irrigation and control systems ensure optimal growth even when you’re away.",

    "Manual + Smart-Assisted Tools",
    "• Smart watering cans, soil testers, and nutrient indicators help traditional gardeners make informed decisions.",
    "• Growtopia App Guides offer real-time tips, plant identification, and visual growth tracking.",
    "• Offline garden kits are designed for beginners who want to learn the basics before going digital.",

    "Why Smart Gardening is the Future",
    "The smart gardening industry is booming, driven by eco-conscious consumers and the need for sustainable living. With environmental challenges rising, the ability to grow food and greenery intelligently is no longer a luxury — it’s a necessity. Growtopia stands at the forefront of this revolution, bridging human intuition and machine intelligence to make gardening both smarter and more personal.",

    "The Road Ahead",
    "Our future roadmap includes:",
    "• Expanding into AI-driven urban garden design and personalized plant care analytics.",
    "• Developing community-based digital gardens to connect green enthusiasts worldwide.",
    "• Creating hybrid kits that blend smart tech with manual tools for schools, homes, and urban farms.",
    "• Partnering with sustainability initiatives to promote eco-friendly gardening practices globally.",

    "Join the Green Movement",
    "Whether you’re a plant lover, a tech enthusiast, or a weekend gardener, Growtopia invites you to be part of this change. Together, we can make green living effortless, intelligent, and inspiring. Growtopia — nurturing a smarter tomorrow, one green leaf at a time."
  ]
};

/**
 * Render the blog into the #blog element
 */
function renderBlog(blog) {
  const container = document.getElementById("blog");
  if (!container) return;

  // Create title
  const titleEl = document.createElement("h1");
  titleEl.textContent = blog.title;
  container.appendChild(titleEl);

  // Add paragraphs
  blog.content.forEach((text) => {
    const p = document.createElement("p");
    p.textContent = text;
    container.appendChild(p);
  });
}

// Run when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  renderBlog(blogData);
});
