"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Definition() {
  const slides = [
    {
      tagline: "Simplify • Automate • Manage",
      heading: "Effortless Property Management from the Comfort of Your Home",
      text: "Oversee your portfolio effortlessly from the coziness of your personal sanctuary",
      image: "/couple.PNG",
    },
    {
      tagline: "Simplify • Automate • Manage",
      heading: "Manage Rent Collection on your Couch",
      text: "Streamline rent collection and tenant communication from home",
      image: "/phonedashboard.PNG",
    },
    {
      tagline: "Simplify • Automate • Manage",
      heading: "Take Charge of your Properties on the go",
      text: "Free up your time for what truly matters – Growing your property investments!",
      image: "/laptop.PNG",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => setCurrentSlide((currentSlide + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);

  return (
    <main className="container">
      <style jsx global>{`
        :root {
          --primary: #1a365d;
          --accent: #3182ce;
          --text-dark: #2d3748;
          --text-light: #718096;
          --bg-light: #f7fafc;
          --white: #ffffff;
        }

        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
          color: var(--text-dark);
          line-height: 1.6;
        }

        section {
          padding: 80px 5%;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Hero Section */
        .hero {
          background: linear-gradient(to right, #f8fbff, #ffffff);
          min-height: 500px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }

        .hero-slide {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .tagline {
          color: var(--accent);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.9rem;
        }

        .hero-text h1 {
          font-size: 3rem;
          line-height: 1.2;
          margin: 20px 0;
          color: var(--primary);
        }

        .hero-text p {
          font-size: 1.2rem;
          margin-bottom: 30px;
          color: var(--text-light);
        }

        .cta {
          background: var(--primary);
          color: white;
          padding: 15px 30px;
          border-radius: 8px;
          text-decoration: none;
          display: inline-block;
          font-weight: 600;
          transition: transform 0.2s;
        }

        .cta:hover {
          transform: translateY(-2px);
          background: #2c5282;
        }

        .hero-image {
          border-radius: 20px;
          object-fit: cover;
        }

        .hero-controls {
          margin-top: 30px;
        }

        .hero-controls button {
          background: var(--white);
          border: 1px solid #ddd;
          padding: 10px 20px;
          cursor: pointer;
          margin-right: 10px;
          border-radius: 50%;
          transition: all 0.3s;
        }

        .hero-controls button:hover {
          background: var(--primary);
          color: white;
        }

        /* Features Section */
        .features {
          text-align: center;
          background: var(--bg-light);
          max-width: 100%;
        }

        .feature-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 40px 0;
        }

        .feature-card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          font-weight: 500;
          border-bottom: 3px solid transparent;
          transition: border-color 0.3s;
        }

        .feature-card:hover {
          border-color: var(--accent);
        }

        /* User Types Section */
        .user-types {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
        }

        .user-card {
          padding: 30px;
          border: 1px solid #edf2f7;
          border-radius: 15px;
          text-align: center;
        }

        .user-card h3 {
          color: var(--primary);
          margin-bottom: 15px;
        }

        /* Diaspora Section */
        .diaspora {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 30px;
        }

        .stat-card {
          background: var(--primary);
          color: white;
          padding: 20px;
          border-radius: 10px;
        }

        /* Testimonials */
        .testimonials {
          text-align: center;
        }

        .testimonial-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .testimonial-card {
          background: #fdfdfd;
          padding: 30px;
          border-radius: 20px;
          border: 1px solid #eee;
          text-align: left;
          font-style: italic;
        }

        /* Final CTA */
        .final-cta {
          background: var(--primary);
          color: white;
          text-align: center;
          border-radius: 30px;
          margin-bottom: 80px;
        }

        .link-btn {
          color: var(--accent);
          text-decoration: underline;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .hero-slide, .diaspora {
            grid-template-columns: 1fr;
          }
          .hero-text h1 { font-size: 2rem; }
        }
      `}</style>

      {/* HERO / SLIDER */}
      <section className="hero">
        <div className="hero-slide">
          <div className="hero-text">
            <span className="tagline">{slides[currentSlide].tagline}</span>
            <h1>{slides[currentSlide].heading}</h1>
            <p>{slides[currentSlide].text}</p>
            <Link href="/register" className="cta">Get Started - It's Free!</Link>
          </div>
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].heading}
            width={450}
            height={450}
            className="hero-image"
          />
        </div>
        <div className="hero-controls">
          <button onClick={prevSlide}>❮</button>
          <button onClick={nextSlide}>❯</button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>What Silqu can do for you</h2>
        <div className="feature-cards">
          {[
            "Rent and service charge collection",
            "Tenant Management",
            "Financial Accounts reconciliation",
            "Visitor Management",
            "Vehicles and Parking Management",
            "Billing management",
            "Automated Invoicing and Receipting",
            "Expense management",
            "Property Reports and Analytics",
          ].map((feature, i) => (
            <div key={i} className="feature-card">{feature}</div>
          ))}
        </div>
        <p className="features-desc">
          We streamline all aspects of property management. Handle rent, tenants, maintenance, financial insights, and reports seamlessly.
        </p>
      </section>

      {/* USER TYPES */}
      <section className="user-types">
        {[
          { title: "For Landlords", text: "Individual and professional landlords managing properties." },
          { title: "For Property Managers", text: "Comprehensive tools for professional property management companies." },
          { title: "For Developers", text: "Solutions for real estate developers managing multiple projects." },
          { title: "For Estate Managers", text: "Integrated systems for large estate and community management." },
        ].map((user, i) => (
          <div key={i} className="user-card">
            <h3>{user.title}</h3>
            <p>{user.text}</p>
          </div>
        ))}
      </section>

      {/* DIASPORA / STATS */}
      <section className="diaspora">
        <Image src="/stress.PNG" alt="Man stressed over bills" width={500} height={400} className="hero-image" />
        <div>
          <h2>Property Management from Afar</h2>
          <h4>Distribution of Silqu Landlords</h4>
          <div className="stats">
            {[
              { value: "900+", label: "Landlords managing from afar" },
              { value: "10K+", label: "Properties under Silqu Management" },
              { value: "5+", label: "Years of commitment" },
            ].map((stat, i) => (
              <div key={i} className="stat-card">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="diaspora-link">
            Map showing our global presence — <strong>Join Hundreds Of Diaspora Landlords</strong>
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>Trusted by Landlords & Agents worldwide</h2>
        <p>Dive into the inspiring world of Silqu’s success stories.</p>
        <Link href="/success-stories" className="link-btn">View Success Stories</Link>

        <div className="testimonial-cards">
          {[
            { name: "ACIMKenya", text: "I don't write reviews but I had to for Silqu. Joined in January after a hectic period dealing with agents..." },
            { name: "Lynn Njura", text: "As a landlord from the diaspora, SILQU makes my life so much easier..." },
            { name: "Lyne Wambu", text: "Property management made easier by SILQU indeed they are smart managers." },
          ].map((t, i) => (
            <div key={i} className="testimonial-card">
              <h4>{t.name}</h4>
              <p>"{t.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <h2>Join 10,000+ landlords discovering a smart way to manage properties.</h2>
        <p>Becoming a landlord in Kenya can be a lucrative venture with the right tools.</p>
        <div style={{margin: '30px 0'}}>
            <Link href="/diaspora" className="link-btn" style={{color: '#63b3ed'}}>Diaspora? Click here</Link>
        </div>
        <h3>Ready for The Silqu Experience?</h3>
        <Link href="/dashboard" className="cta" style={{background: '#fff', color: '#1a365d', marginTop: '20px'}}>Dashboard</Link>
      </section>
    </main>
  );
}