// src/pages/About.jsx
import React, { useState } from 'react';
import { cofounders, teamMembers } from '../data/team';
import { Mail, Linkedin, Github } from 'lucide-react';

const TeamCard = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="ga-card-container"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className="ga-card-inner"
        style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        {/* ── Front ── */}
        <div className="ga-card-front">
          <div className="ga-member-avatar">
           {member.image ? (
              <img 
                src={member.image} 
                alt={member.name} 
                className="ga-member-img" 
                loading="lazy"
              />
              ) : (
                <span className="ga-avatar-icon">👤</span>
              )}
          </div>
          <h3 className="ga-member-name">{member.name}</h3>
          <p className="ga-member-role">{member.role}</p>
        </div>

        {/* ── Back ── */}
        <div className="ga-card-back">
          <div className="ga-back-header">
            <h3 className="ga-member-name-back">{member.name}</h3>
            <p className="ga-member-role-back">{member.role}</p>
          </div>
          <p className="ga-member-bio">{member.bio}</p>
          <div className="ga-contact-links" onClick={(e) => e.stopPropagation()}>
            <a href={`mailto:${member.email}`} className="ga-contact-link ga-contact-link--email" title={member.email}>
              <Mail size={15} />
              <span>Email</span>
            </a>
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="ga-contact-link ga-contact-link--linkedin" title="LinkedIn">
                <Linkedin size={15} />
                <span>LinkedIn</span>
              </a>
            )}
            {member.github && (
              <a href={member.github.trim()} target="_blank" rel="noopener noreferrer" className="ga-contact-link ga-contact-link--github" title="GitHub">
                <Github size={15} />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="ga-container">

      {/* ── Hero Section — matches Products page layout ── */}
      <section className="ga-editorial-header">
        <div className="ga-hero-overlay" />
        <div className="ga-hero-content">
          <div className="ga-label-box">ABOUT GROWTOPIA</div>
          <h1 className="ga-main-headline">
            WHERE <span className="ga-headline-italic">INNOVATION</span><br />
            MEETS <span className="ga-headline-accent">GREEN LIVING</span>
          </h1>
          <p className="ga-header-quote">
            We cultivate the future of urban gardening through technology, passion,
            and unwavering commitment to every balcony, terrace, home, and nursery we serve.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="ga-story-section">
        <div className="ga-story-container">
          <div className="ga-story-image-placeholder">
            <div className="ga-image-overlay">EST. 2019</div>
          </div>

          <div className="ga-story-content">
            <div className="ga-section-label">— OUR STORY</div>
            <h2 className="ga-story-heading">
              Born from Vision, <br />
              <span className="ga-story-heading-accent">Driven by Purpose</span>
            </h2>

            <div className="ga-story-columns">
              <div className="ga-story-column">
                <p className="ga-story-text">
                  GROWTOPIA was founded with a vision to revolutionize agriculture through
                  technology and innovation. We believe that sustainable farming practices
                  combined with cutting-edge IoT solutions can address global food security
                  challenges while protecting our environment.
                </p>
              </div>
              <div className="ga-story-column">
                <p className="ga-story-text">
                  Our journey began when three passionate individuals – Dipak Raval, Jenil
                  Sanchaniya, and Rahul Khara – came together with a shared vision of
                  transforming Indian agriculture. With backgrounds in technology, business,
                  and operations, they assembled a talented team dedicated to making farming
                  smarter, more efficient, and sustainable.
                </p>
              </div>
            </div>

            <div className="ga-pull-quote">
              <div className="ga-pull-quote-text">
                Today, GROWTOPIA serves urban gardeners across India, providing innovative solutions
                that increase yields, reduce costs, and promote environmentally friendly practices.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Cards */}
      <section className="ga-mission-vision-section">
        <div className="ga-mv-grid">
          <div className="ga-mv-card ga-mv-card--dark">
            <div className="ga-mv-number">01</div>
            <div className="ga-mv-label">MISSION</div>
            <h3 className="ga-mv-title">Empowering Gardeners Through Innovation</h3>
            <p className="ga-mv-text">
              To empower urban gardeners with innovative, affordable, and sustainable
              technology that increases productivity while preserving the environment for
              future generations.
            </p>
            <div className="ga-mv-corner" />
          </div>
          <div className="ga-mv-card ga-mv-card--green">
            <div className="ga-mv-number">02</div>
            <div className="ga-mv-label">VISION</div>
            <h3 className="ga-mv-title">Leading India's Urban Garden Revolution</h3>
            <p className="ga-mv-text">
              To become India's leading urban gardening company, transforming green spaces
              through technology and making sustainable gardening accessible to every home.
            </p>
            <div className="ga-mv-corner" />
          </div>
          <div className="ga-mv-card ga-mv-card--teal">
            <div className="ga-mv-number">03</div>
            <div className="ga-mv-label">VALUES</div>
            <h3 className="ga-mv-title">Principles That Guide Us</h3>
            <p className="ga-mv-text">
              Innovation, Sustainability, Customer-First Approach, Quality Excellence, and
              Environmental Responsibility guide everything we do.
            </p>
            <div className="ga-mv-corner" />
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="ga-founders-section">
        <div className="ga-founders-header">
          <div className="ga-founders-label-container">
            <div className="ga-founders-label">THE VISIONARIES</div>
            <div className="ga-founders-label-line" />
          </div>
          <h2 className="ga-founders-title">Meet Our Co-Founders</h2>
        </div>
        <div className="ga-team-grid">
          {cofounders.map((member, index) => (
            <div key={index} className="ga-card-wrapper" style={{ animationDelay: `${index * 0.1}s` }}>
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </section>

      {/* Core Team Section */}
      <section className="ga-core-team-section">
        <div className="ga-core-team-header">
          <div className="ga-core-team-label-container">
            <div className="ga-core-team-label">THE TEAM</div>
            <div className="ga-core-team-label-line" />
          </div>
          <h2 className="ga-core-team-title">Our Core Team</h2>
          <p className="ga-core-team-subtitle">
            Dedicated individuals working tirelessly to bring innovation to urban gardening
          </p>
        </div>
        <div className="ga-team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="ga-card-wrapper" style={{ animationDelay: `${index * 0.1}s` }}>
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Work+Sans:wght@300;400;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .ga-container {
          max-width: 100%;
          width: 100%;
          font-family: 'Work Sans', sans-serif;
          background: #fafaf8;
          overflow-x: hidden;
        }

        /* ── Hero — mirrors Products page exactly ── */
        .ga-editorial-header {
          background-color: #1a2f0d;
          background-image: linear-gradient(to bottom, rgba(26,47,13,0.45), rgba(26,47,13,0.65)), url('/AboutNav.webp');
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
        .ga-hero-overlay {
          position: absolute;
          inset: 0;
          background: transparent;
        }
        .ga-hero-content {
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
        .ga-label-box {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          border: 2px solid #8fbc5e;
          font-size: 0.7rem;
          letter-spacing: 4px;
          font-weight: 700;
          margin-bottom: 2rem;
          color: #8fbc5e;
          background: rgba(143, 188, 94, 0.05);
        }
        .ga-main-headline {
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
        .ga-headline-italic { font-style: italic; font-weight: 400; color: #8fbc5e; }
        .ga-headline-accent { color: white; }
        .ga-header-quote {
          font-size: clamp(0.875rem, 2vw, 1.1rem);
          line-height: 1.8;
          color: rgba(255,255,255,0.92);
          font-style: italic;
          font-weight: 300;
          max-width: 560px;
        }

        /* Story */
        .ga-story-section { padding: 8rem 3rem; background: white; }
        .ga-story-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: 5rem;
          align-items: start;
        }
        .ga-story-image-placeholder {
          height: 600px;
          background: linear-gradient(135deg, #2d5016, #6b9e3e);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 20px 20px 0 #f4a220;
          flex-shrink: 0;
        }
        .ga-image-overlay {
          font-size: 3rem;
          font-family: 'Playfair Display', serif;
          color: white;
          font-weight: 700;
          transform: rotate(-90deg);
          white-space: nowrap;
        }
        .ga-story-content { padding-top: 2rem; }
        .ga-section-label {
          font-size: 0.75rem;
          letter-spacing: 3px;
          font-weight: 700;
          color: #f4a220;
          margin-bottom: 1.5rem;
        }
        .ga-story-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 700;
          line-height: 1.1;
          color: #1a2f0d;
          margin-bottom: 3rem;
        }
        .ga-story-heading-accent { font-style: italic; font-weight: 400; color: #6b9e3e; }
        .ga-story-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        .ga-story-text { font-size: 1rem; line-height: 1.8; color: #333; }
        .ga-pull-quote {
          background: #1a5f72;
          padding: 2.5rem;
          margin-top: 3rem;
          position: relative;
          transform: translateX(-3rem);
        }
        .ga-pull-quote-text {
          font-size: 1.3rem;
          line-height: 1.6;
          color: white;
          font-weight: 600;
          font-family: 'Playfair Display', serif;
        }

        /* Mission / Vision */
        .ga-mission-vision-section { padding: 6rem 3rem; background: #fafaf8; }
        .ga-mv-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .ga-mv-card {
          color: white;
          padding: 3rem;
          position: relative;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .ga-mv-card--dark  { background: #1a2f0d; }
        .ga-mv-card--green { background: #6b9e3e; }
        .ga-mv-card--teal  { background: #1a5f72; }
        .ga-mv-number {
          font-size: 8rem;
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          position: absolute;
          top: -2rem; right: 2rem;
          opacity: 0.1;
          line-height: 1;
        }
        .ga-mv-label { font-size: 0.7rem; letter-spacing: 3px; font-weight: 700; margin-bottom: 1.5rem; opacity: 0.8; }
        .ga-mv-title {
          font-family: 'Playfair Display', serif;
          min-height: 5.5rem;
          display: flex;
          align-items: flex-start;
          font-size: 1.8rem;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 1.5rem;
          color: white;
        }
        .ga-mv-text { font-size: 0.95rem; line-height: 1.7; opacity: 0.9; flex: 1; }
        .ga-mv-corner {
          position: absolute;
          bottom: 0; right: 0;
          width: 60px; height: 60px;
          background: rgba(255,255,255,0.2);
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
        }

        /* Founders */
        .ga-founders-section { padding: 8rem 3rem; background: white; }
        .ga-founders-header { max-width: 1400px; margin: 0 auto 5rem; text-align: center; }
        .ga-founders-label-container {
          display: flex; align-items: center; justify-content: center;
          gap: 1.5rem; margin-bottom: 1.5rem;
        }
        .ga-founders-label { font-size: 0.75rem; letter-spacing: 3px; font-weight: 700; color: #f4a220; }
        .ga-founders-label-line { width: 60px; height: 2px; background: #f4a220; }
        .ga-founders-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 700; line-height: 1.1; color: #1a2f0d;
        }

        /* Core Team */
        .ga-core-team-section { padding: 8rem 3rem; background: #fafaf8; }
        .ga-core-team-header { max-width: 1400px; margin: 0 auto 5rem; text-align: center; }
        .ga-core-team-label-container {
          display: flex; align-items: center; justify-content: center;
          gap: 1.5rem; margin-bottom: 1.5rem;
        }
        .ga-core-team-label { font-size: 0.75rem; letter-spacing: 3px; font-weight: 700; color: #f4a220; }
        .ga-core-team-label-line { width: 60px; height: 2px; background: #f4a220; }
        .ga-core-team-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 700; color: #1a2f0d; margin-bottom: 1rem;
        }
        .ga-core-team-subtitle { font-size: 1.1rem; color: #666; font-style: italic; }

        /* Team Grid */
        .ga-team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        .ga-card-wrapper { animation: ga-slideUp 0.6s ease-out both; }

        /* ── Flip Card ── */
        .ga-card-container {
          perspective: 1000px;
          height: 420px;
          cursor: pointer;
        }
        .ga-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 1s;
          transform-style: preserve-3d;
        }
        .ga-card-front, .ga-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          padding: 1.5rem;
          border: 3px solid #1a2f0d;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .ga-card-front {
          background: white;
          justify-content: center;
        }
        .ga-card-back {
          background: linear-gradient(135deg, #6b9e3e 0%, #2d5016 100%);
          transform: rotateY(180deg);
          color: white;
          justify-content: space-between;
          padding: 1.75rem 2rem;
        }

        /* Front face */
        .ga-member-avatar {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #6b9e3e, #2d5016);
          border-radius: 50%;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid #f4a220;
          overflow: hidden;
        }
        .ga-member-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        .ga-avatar-icon { font-size: 4rem; }
        .ga-member-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          color: #1a2f0d;
          margin-bottom: 0.5rem;
          font-weight: 700;
          text-align: center;
        }
        .ga-member-role {
          color: #6b9e3e;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.85rem;
          text-align: center;
        }

        /* Back face */
        .ga-back-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        .ga-member-name-back {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          color: white;
          margin-bottom: 0.3rem;
          font-weight: 700;
          text-align: center;
        }
        .ga-member-role-back {
          font-size: 0.78rem;
          color: #f4a220;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-align: center;
        }
        .ga-member-bio {
          font-size: 0.88rem;
          line-height: 1.6;
          color: rgba(255,255,255,0.92);
          text-align: center;
          padding: 0 0.25rem;
        }
        .ga-contact-links {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          align-items: center;
          width: 100%;
        }
        .ga-contact-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.45rem 0;
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.25s;
          border: 1.5px solid transparent;
          width: 80%;
        }
        .ga-contact-link--email { background: rgba(255,255,255,0.1); color: #f4a220; border-color: #f4a220; }
        .ga-contact-link--email:hover { background: rgba(244,162,32,0.25); }
        .ga-contact-link--linkedin { background: rgba(255,255,255,0.1); color: #7dd3f5; border-color: #7dd3f5; }
        .ga-contact-link--linkedin:hover { background: rgba(125,211,245,0.2); }
        .ga-contact-link--github { background: rgba(255,255,255,0.1); color: white; border-color: rgba(255,255,255,0.5); }
        .ga-contact-link--github:hover { background: rgba(255,255,255,0.22); }

        /* Animations */
        @keyframes ga-slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Tablet (≤ 1024px) ──────────────────────────── */
        @media (max-width: 1024px) {
          .ga-story-container { grid-template-columns: 320px 1fr; gap: 3rem; }
          .ga-story-image-placeholder { height: 480px; }
          .ga-mv-grid { grid-template-columns: 1fr; gap: 1.5rem; }
          .ga-mv-card { min-height: auto; padding: 2.5rem; }
          .ga-team-grid { grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
          .ga-pull-quote { transform: translateX(0); }
        }

        /* ── Mobile (≤ 768px) ───────────────────────────── */
        @media (max-width: 768px) {
          .ga-editorial-header { padding: 3rem 1.5rem; min-height: 48vh; }
          .ga-main-headline { font-size: clamp(1.8rem, 8vw, 3rem); letter-spacing: -0.5px; }
          .ga-header-quote { font-size: clamp(0.8rem, 3vw, 1rem); }

          .ga-story-section { padding: 4rem 1.5rem; }
          .ga-story-container { grid-template-columns: 1fr; gap: 2.5rem; }
          .ga-story-image-placeholder { height: 300px; box-shadow: 12px 12px 0 #f4a220; }
          .ga-image-overlay { font-size: 2rem; transform: rotate(0deg);}
          .ga-story-heading { font-size: clamp(1.75rem, 6vw, 2.5rem); text-align: center; }
          .ga-story-heading br { display: none; }
          .ga-story-columns { grid-template-columns: 1fr; gap: 1.5rem; }
          .ga-pull-quote { transform: translateX(0); }
          .ga-pull-quote-text { font-size: 1.1rem; }

          .ga-mission-vision-section { padding: 4rem 1.5rem; }
          .ga-mv-grid { grid-template-columns: 1fr; }
          .ga-mv-card { min-height: auto; padding: 2rem; }
          .ga-mv-number { font-size: 5rem; }
          .ga-mv-title { font-size: 1.5rem; min-height: auto; }

          .ga-founders-section { padding: 4rem 1.5rem; }
          .ga-founders-header { margin-bottom: 3rem; }
          .ga-core-team-section { padding: 4rem 1.5rem; }
          .ga-core-team-header { margin-bottom: 3rem; }
          .ga-team-grid { grid-template-columns: 1fr; }
          .ga-card-container { height: 400px; }
          .ga-member-avatar { width: 100px; height: 100px; }
          .ga-avatar-icon { font-size: 3rem; }
          .ga-member-name, .ga-member-name-back { font-size: 1.3rem; }
        }

        /* ── Small Mobile (≤ 480px) ─────────────────────── */
        @media (max-width: 480px) {
          .ga-editorial-header { padding: 2rem 1.25rem; min-height: 42vh; }
          .ga-main-headline { font-size: clamp(1.6rem, 8vw, 2.4rem); }
          .ga-header-quote { font-size: 0.82rem; }
          .ga-story-image-placeholder { height: 220px; box-shadow: 8px 8px 0 #f4a220; }
          .ga-image-overlay { font-size: 1.5rem; transform: rotate(0deg);}
          .ga-pull-quote { padding: 1.75rem; }
          .ga-pull-quote-text { font-size: 1rem; }
          .ga-mv-card { padding: 1.75rem; }
          .ga-card-container { height: 430px; }
          .ga-card-front, .ga-card-back { padding: 1.5rem; }
          .ga-member-avatar { width: 80px; height: 80px; margin-bottom: 1rem; }
          .ga-avatar-icon { font-size: 2.5rem; }
          .ga-member-bio { font-size: 0.82rem; }
          .ga-contact-link { font-size: 0.7rem; padding: 0.4rem 0.7rem; }
          .ga-core-team-subtitle { font-size: 0.95rem; }
        }

        /* ── Extra-small (≤ 380px) ──────────────────────── */
        @media (max-width: 380px) {
          .ga-main-headline { font-size: 5.5vw; letter-spacing: 0; }
          .ga-team-grid { grid-template-columns: 1fr; }
          .ga-card-container { height: 450px; }
          .ga-mv-number { font-size: 4rem; }
          .ga-contact-links { gap: 0.4rem; }
        }
      `}</style>
    </div>
  );
};

export default About;