"use client";

import Link from "next/link";

export default function Pricing() {
  return (
    <>
      <div className="page">
        {/* HEADER */}
        <section className="header">
          <h1>Simple, Transparent Pricing</h1>
          <p>
            Choose a plan that fits your property management needs.
          </p>
        </section>

        {/* PRICING CARDS */}
        <section className="pricing">
          <div className="card">
            <h3>Starter</h3>
            <p className="price">Free</p>
            <p className="desc">Perfect for individual landlords</p>

            <ul>
              <li>Up to 5 units</li>
              <li>Tenant management</li>
              <li>Basic reporting</li>
              <li>Email support</li>
            </ul>

            <Link href="/register" className="btn secondary">
              Get Started
            </Link>
          </div>

          <div className="card featured">
            <span className="badge">Most Popular</span>
            <h3>Professional</h3>
            <p className="price">KES 500 <span>/ unit / month</span></p>
            <p className="desc">For growing landlords & agents</p>

            <ul>
              <li>Unlimited units</li>
              <li>Automated rent collection</li>
              <li>Invoicing & receipting</li>
              <li>Advanced analytics</li>
              <li>Priority support</li>
            </ul>

            <Link href="/register" className="btn">
              Start Free Trial
            </Link>
          </div>

          <div className="card">
            <h3>Enterprise</h3>
            <p className="price">Custom</p>
            <p className="desc">For large estates & developers</p>

            <ul>
              <li>Estate & community management</li>
              <li>Visitor & parking management</li>
              <li>Dedicated account manager</li>
              <li>Custom integrations</li>
            </ul>

            <Link href="/contact" className="btn secondary">
              Contact Sales
            </Link>
          </div>
        </section>

        {/* FOOTNOTE */}
        <section className="footnote">
          <p>
            All plans include secure data storage, system updates, and access
            across devices.
          </p>
        </section>
      </div>

      {/* PURE INTERNAL CSS */}
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
        }

        .page {
          background: #f4f4f3;
          padding: 80px 20px;
        }

        .header {
          text-align: center;
          margin-bottom: 60px;
        }

        .header h1 {
          font-size: 2.2rem;
          margin-bottom: 10px;
          color: #111;
        }

        .header p {
          font-size: 1rem;
          color: #555;
        }

        .pricing {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .card {
          background: #fff;
          border-radius: 18px;
          padding: 32px 28px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          position: relative;
          display: flex;
          flex-direction: column;
          text-align: center;
        }

        .featured {
          border: 2px solid #0f2a33;
          transform: translateY(-10px);
        }

        .badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #0f2a33;
          color: white;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .card h3 {
          font-size: 1.4rem;
          margin-bottom: 10px;
        }

        .price {
          font-size: 1.8rem;
          font-weight: 700;
          margin: 10px 0;
          color: #0f2a33;
        }

        .price span {
          font-size: 0.8rem;
          font-weight: 400;
          color: #555;
        }

        .desc {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 22px;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0 0 30px 0;
          text-align: left;
        }

        ul li {
          padding: 8px 0;
          font-size: 0.9rem;
          color: #333;
          border-bottom: 1px solid #eee;
        }

        .btn {
          display: inline-block;
          padding: 14px;
          background: #0f2a33;
          color: #fff;
          border-radius: 10px;
          font-weight: 600;
          text-decoration: none;
          margin-top: auto;
        }

        .btn:hover {
          background: #0b1f26;
        }

        .secondary {
          background: #e5e7eb;
          color: #111;
        }

        .secondary:hover {
          background: #d1d5db;
        }

        .footnote {
          text-align: center;
          margin-top: 50px;
          font-size: 0.85rem;
          color: #555;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .featured {
            transform: none;
          }

          .header h1 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </>
  );
}
