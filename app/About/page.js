"use client";

import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="page">
        {/* HERO */}
        <section className="hero">
          <div className="hero-text">
            <h1>About Silqu</h1>
            <p>
              Silqu is the smart platform transforming property management across Africa — empowering
              landlords, agents, and property stakeholders to manage with ease.
            </p>
          </div>
          <div className="hero-image">
            <Image
              src="/about.PNG"
              alt="Silqu About"
              fill
              className="about-img"
            />
          </div>
        </section>

        {/* MISSION / VALUES */}
        <section className="values">
          <div className="value-card">
            <h3>Our Mission</h3>
            <p>
              To simplify property management through a powerful, user-friendly platform that
              brings ease and efficiency to everyday operations.
            </p>
          </div>

          <div className="value-card">
            <h3>Our Vision</h3>
            <p>
              To be the #1 property management solution in Africa — driving smart real estate management
              for all.
            </p>
          </div>

          <div className="value-card">
            <h3>Our Values</h3>
            <p>
              Innovation, integrity, reliability, and customer success guide everything we do.
            </p>
          </div>
        </section>

        {/* TEAM / WHY SECTION */}
        <section className="team">
          <h2>Why Silqu Works</h2>
          <p>
            Built by experts in real estate and technology, Silqu understands the challenges of property
            management and delivers smart tools that solve real problems.
          </p>
        </section>

        {/* FOOTNOTE */}
        <footer className="footnote">
          <p>
            Join thousands of landlords and property professionals using Silqu to make property management
            simpler, smarter, and more efficient.
          </p>
        </footer>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
        }

        .page {
          width: 100%;
          background: #fdfdfd;
          padding: 60px 20px;
        }

        /* HERO */
        .hero {
          display: flex;
          align-items: center;
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto 60px auto;
        }

        .hero-text {
          flex: 1;
        }

        .hero-text h1 {
          font-size: 2.4rem;
          margin-bottom: 12px;
          color: #111;
        }

        .hero-text p {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
        }

        .hero-image {
          flex: 1;
          position: relative;
          min-height: 300px;
        }

        .about-img {
          object-fit: contain;
        }

        /* VALUES SECTION */
        .values {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
          margin: 40px auto;
          max-width: 1100px;
        }

        .value-card {
          background: white;
          padding: 28px 22px;
          border-radius: 14px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
          text-align: center;
        }

        .value-card h3 {
          font-size: 1.3rem;
          margin-bottom: 12px;
          color: #0f2a33;
        }

        .value-card p {
          font-size: 0.95rem;
          color: #555;
        }

        /* TEAM / WHY */
        .team {
          text-align: center;
          max-width: 900px;
          margin: 60px auto;
        }

        .team h2 {
          font-size: 1.8rem;
          color: #111;
          margin-bottom: 10px;
        }

        .team p {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
        }

        /* FOOTNOTE */
        .footnote {
          text-align: center;
          margin-top: 60px;
          font-size: 0.9rem;
          color: #555;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .hero {
            flex-direction: column;
            gap: 24px;
          }
        }

        @media (max-width: 480px) {
          .hero-text h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
}
