// src/pages/About.jsx
import React from 'react';
import { cofounders, teamMembers } from '../data/team';
import { Mail } from 'lucide-react';

const About = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>About GROWTOPIA</h1>
        <p style={styles.heroSubtitle}>
          Pioneering the future of sustainable agriculture
        </p>
      </section>

      {/* Story Section */}
      <section style={styles.storySection}>
        <div style={styles.storyContent}>
          <h2 style={styles.sectionTitle}>Our Story</h2>
          <p style={styles.storyText}>
            GROWTOPIA was founded with a vision to revolutionize agriculture through technology and innovation. 
            We believe that sustainable farming practices combined with cutting-edge IoT solutions can address 
            global food security challenges while protecting our environment.
          </p>
          <p style={styles.storyText}>
            Our journey began when three passionate individuals – Dipak Raval, Jenil Sanchaniya, and Rahul Khara – 
            came together with a shared vision of transforming Indian agriculture. With backgrounds in technology, 
            business, and operations, they assembled a talented team dedicated to making farming smarter, 
            more efficient, and sustainable.
          </p>
          <p style={styles.storyText}>
            Today, GROWTOPIA serves farmers across India, providing innovative solutions that increase 
            yields, reduce costs, and promote environmentally friendly practices. Our team of agricultural 
            experts, engineers, and innovators work tirelessly to develop products that truly make a difference.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={styles.missionSection}>
        <div style={styles.missionGrid}>
          <div style={styles.missionCard}>
            <h3 style={styles.cardTitle}>Our Mission</h3>
            <p style={styles.cardText}>
              To empower farmers with innovative, affordable, and sustainable agricultural technology 
              that increases productivity while preserving the environment for future generations.
            </p>
          </div>
          <div style={styles.missionCard}>
            <h3 style={styles.cardTitle}>Our Vision</h3>
            <p style={styles.cardText}>
              To become India's leading agritech company, transforming farming through technology 
              and making sustainable agriculture accessible to every farmer.
            </p>
          </div>
          <div style={styles.missionCard}>
            <h3 style={styles.cardTitle}>Our Values</h3>
            <p style={styles.cardText}>
              Innovation, Sustainability, Farmer-First Approach, Quality Excellence, 
              and Environmental Responsibility guide everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Co-founders Section */}
      <section style={styles.teamSection}>
        <h2 style={styles.sectionTitle}>Meet Our Co-Founders</h2>
        <div style={styles.teamGrid}>
          {cofounders.map((member, index) => (
            <div key={index} style={styles.memberCard}>
              <div style={styles.memberAvatar}>
                <span style={styles.avatarIcon}>👤</span>
              </div>
              <h3 style={styles.memberName}>{member.name}</h3>
              <p style={styles.memberRole}>{member.role}</p>
              <p style={styles.memberBio}>{member.bio}</p>
              <a href={`mailto:${member.email}`} style={styles.emailLink}>
                <Mail size={16} /> {member.email}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Core Team Section */}
      <section style={styles.teamSection}>
        <h2 style={styles.sectionTitle}>Our Core Team</h2>
        <div style={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} style={styles.memberCard}>
              <div style={styles.memberAvatar}>
                <span style={styles.avatarIcon}>👤</span>
              </div>
              <h3 style={styles.memberName}>{member.name}</h3>
              <p style={styles.memberRole}>{member.role}</p>
              <p style={styles.memberBio}>{member.bio}</p>
              <a href={`mailto:${member.email}`} style={styles.emailLink}>
                <Mail size={16} /> {member.email}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1600px',
    margin: '0 auto',
    width: '100%'
  },
  hero: {
    background: 'linear-gradient(135deg, #2d5016 0%, #6b9e3e 100%)',
    color: 'white',
    padding: '5rem 2rem',
    textAlign: 'center'
  },
  heroTitle: {
    fontSize: '3.5rem',
    marginBottom: '1rem',
    color: 'white'
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    opacity: 0.9
  },
  storySection: {
    padding: '4rem 2rem',
    background: 'white'
  },
  storyContent: {
    maxWidth: '900px',
    margin: '0 auto'
  },
  sectionTitle: {
    fontSize: '2.5rem',
    color: '#2d5016',
    marginBottom: '2rem',
    textAlign: 'center'
  },
  storyText: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#333',
    marginBottom: '1.5rem'
  },
  missionSection: {
    padding: '4rem 2rem',
    background: '#f8f9fa'
  },
  missionGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  missionCard: {
    background: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  cardTitle: {
    fontSize: '1.8rem',
    color: '#2d5016',
    marginBottom: '1rem'
  },
  cardText: {
    fontSize: '1rem',
    lineHeight: '1.7',
    color: '#666'
  },
  teamSection: {
    padding: '4rem 2rem'
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '2rem auto 0'
  },
  memberCard: {
    background: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s'
  },
  memberAvatar: {
    width: '120px',
    height: '120px',
    background: 'linear-gradient(135deg, #6b9e3e, #2d5016)',
    borderRadius: '50%',
    margin: '0 auto 1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarIcon: {
    fontSize: '4rem'
  },
  memberName: {
    fontSize: '1.5rem',
    color: '#2d5016',
    marginBottom: '0.5rem'
  },
  memberRole: {
    fontSize: '1.1rem',
    color: '#6b9e3e',
    fontWeight: '600',
    marginBottom: '1rem'
  },
  memberBio: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#666',
    marginBottom: '1rem'
  },
  emailLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#f4a220',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '600'
  }
};

export default About;