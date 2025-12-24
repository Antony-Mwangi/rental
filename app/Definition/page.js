"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Definition() {
  const slides = [
    {
      tagline: "Simplify • Automate • Manage",
      heading: "Effortless Property Management from Home",
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
    <main className="page-wrapper">
      <style jsx global>{`
        :root {
          --primary: #1e3a8a;
          --accent: #2563eb;
          --bg: #ffffff;
          --card-bg: #f8fafc;
          --text-main: #1e293b;
          --text-muted: #64748b;
          --radius: 16px;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          color: var(--text-main);
          background-color: var(--bg);
          overflow-x: hidden;
        }

        /* Responsive Container */
        section {
          width: 100%;
          padding: 60px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* --- HERO SECTION --- */
        .hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
          padding-top: 40px;
          text-align: center;
        }

        .hero-text {
          order: 2; /* Text below image on mobile */
        }

        .tagline {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 15px;
        }

        .hero-text h1 {
          font-size: clamp(2rem, 5vw, 3.5rem);
          line-height: 1.1;
          color: var(--primary);
          margin-bottom: 20px;
        }

        .hero-text p {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: var(--text-muted);
          margin-bottom: 30px;
          max-width: 600px;
          margin-inline: auto;
        }

        .hero-image-container {
          order: 1; /* Image on top on mobile */
          width: 100%;
          max-width: 500px;
          position: relative;
        }

        .hero-image {
          width: 100%;
          height: auto;
          border-radius: var(--radius);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .hero-controls {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-top: 20px;
        }

        .hero-controls button {
          background: white;
          border: 1px solid #e2e8f0;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1.2rem;
          transition: 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-controls button:hover {
          background: var(--primary);
          color: white;
        }

        /* --- FEATURES (Grid) --- */
        .features {
          background: var(--card-bg);
          border-radius: 40px;
          margin-block: 40px;
        }

        .features h2 {
          text-align: center;
          margin-bottom: 40px;
          font-size: clamp(1.5rem, 4vw, 2.5rem);
        }

        .feature-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .feature-card {
          background: white;
          padding: 24px;
          border-radius: var(--radius);
          font-weight: 600;
          display: flex;
          align-items: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          color: var(--accent);
        }

        /* --- USER TYPES --- */
        .user-types {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }

        .user-card {
          padding: 30px;
          border-radius: var(--radius);
          background: #fff;
          border: 1px solid #f1f5f9;
          transition: 0.3s;
        }

        .user-card:hover {
          background: var(--primary);
        }

        .user-card:hover h3, .user-card:hover p {
          color: white;
        }

        /* --- DIASPORA / STATS --- */
        .diaspora {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 15px;
          margin: 30px 0;
        }

        .stat-card {
          padding: 20px;
          background: #eff6ff;
          border-radius: 12px;
          text-align: center;
        }

        .stat-card h3 {
          font-size: 1.8rem;
          color: var(--accent);
        }

        /* --- TESTIMONIALS --- */
        .testimonial-cards {
          display: flex;
          overflow-x: auto;
          gap: 20px;
          padding-bottom: 20px;
          scrollbar-width: none; /* Firefox */
        }

        .testimonial-cards::-webkit-scrollbar { display: none; } /* Chrome/Safari */

        .testimonial-card {
          min-width: 280px;
          background: #fdfdfd;
          padding: 25px;
          border-radius: var(--radius);
          border: 1px solid #e2e8f0;
        }

        /* --- FINAL CTA --- */
        .final-cta {
          background: var(--primary);
          color: white;
          border-radius: 30px;
          text-align: center;
          margin-bottom: 60px;
        }

        .cta {
          display: inline-block;
          background: var(--accent);
          color: white;
          padding: 16px 32px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          margin-top: 20px;
          transition: opacity 0.2s;
        }

        /* --- DESKTOP ADJUSTMENTS --- */
        @media (min-width: 992px) {
          .hero {
            flex-direction: row;
            text-align: left;
            min-height: 80vh;
          }
          .hero-text { order: 1; flex: 1; }
          .hero-image-container { order: 2; flex: 1; max-width: 600px; }
          .hero-text p { margin-inline: 0; }
          .hero-controls { justify-content: flex-start; }
          .diaspora { grid-template-columns: 1fr 1fr; }
          .testimonial-cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            overflow-x: visible;
          }
        }
      `}</style>

      {/* HERO / SLIDER */}
      <section className="hero">
        <div className="hero-text">
          <span className="tagline">{slides[currentSlide].tagline}</span>
          <h1>{slides[currentSlide].heading}</h1>
          <p>{slides[currentSlide].text}</p>
          <Link href="/register" className="cta">Get Started - It's Free!</Link>
          <div className="hero-controls">
            <button onClick={prevSlide}>❮</button>
            <button onClick={nextSlide}>❯</button>
          </div>
        </div>
        <div className="hero-image-container">
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].heading}
            width={600}
            height={600}
            priority
            className="hero-image"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>What Silqu can do for you</h2>
        <div className="feature-cards">
          {[
            "Rent collection",
            "Tenant Management",
            "Accounts reconciliation",
            "Visitor Management",
            "Parking Management",
            "Billing management",
            "Automated Invoicing",
            "Expense management",
            "Property Analytics",
          ].map((feature, i) => (
            <div key={i} className="feature-card">{feature}</div>
          ))}
        </div>
      </section>

      {/* USER TYPES */}
      <section className="user-types">
        {[
          { title: "Landlords", text: "Individual and professional landlords managing properties." },
          { title: "Property Managers", text: "Comprehensive tools for professional companies." },
          { title: "Developers", text: "Solutions for real estate developers and projects." },
          { title: "Estate Managers", text: "Systems for large estates and communities." },
        ].map((user, i) => (
          <div key={i} className="user-card">
            <h3>{user.title}</h3>
            <p>{user.text}</p>
          </div>
        ))}
      </section>

      {/* DIASPORA / STATS */}
      <section className="diaspora">
        <Image src="/stress.PNG" alt="Management" width={500} height={400} className="hero-image" />
        <div>
          <h2>Property Management from Afar</h2>
          <div className="stats">
            {[
              { value: "900+", label: "Global Landlords" },
              { value: "10K+", label: "Properties Managed" },
              { value: "5+", label: "Years Experience" },
            ].map((stat, i) => (
              <div key={i} className="stat-card">
                <h3>{stat.value}</h3>
                <p style={{fontSize: '0.8rem'}}>{stat.label}</p>
              </div>
            ))}
          </div>
          <p><strong>Join Hundreds Of Diaspora Landlords</strong></p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2 style={{textAlign: 'center', marginBottom: '30px'}}>Trusted Worldwide</h2>
        <div className="testimonial-cards">
          {[
            { name: "ACIMKenya", text: "Joined in January after a hectic period dealing with agents. Life is easier now." },
            { name: "Lynn Njura", text: "As a landlord from the diaspora, SILQU makes my life so much easier..." },
            { name: "Lyne Wambu", text: "Property management made easier by SILQU, they are truly smart managers." },
          ].map((t, i) => (
            <div key={i} className="testimonial-card">
              <h4 style={{color: 'var(--accent)', marginBottom: '10px'}}>{t.name}</h4>
              <p>"{t.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <h2>Ready for The Silqu Experience?</h2>
        <p style={{marginTop: '15px', opacity: 0.9}}><b>Join 10,000+ landlords</b> discovering a smart way to manage properties.</p>
        <Link href="/dashboard" className="cta" style={{background: 'white', color: 'var(--primary)'}}>Go to Dashboard</Link>
      </section>
    </main>
  );
}