"use client";

import Image from "next/image";
import Link from "next/link";

export default function Register() {
  return (
    <>
      <div className="page">
        <div className="container">
          
          <div className="form-section">
            <Image
              src="/slq.PNG"
              alt="Silqu Logo"
              width={120}
              height={40}
              className="logo"
            />

            <h1>Create your account</h1>
            <p className="intro">
              Sign up to start managing your properties the smart way.
            </p>

            <div className="field">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" />
            </div>

            <div className="field">
              <label>Phone Number</label>
              <input type="tel" placeholder="+254 712 345 678" />
            </div>

            <div className="field">
              <label>Password</label>
              <input type="password" placeholder="••••••••" />
            </div>

            <button className="btn">Create Account</button>

            <p className="login-link">
              Already have an account?{" "}
              <Link href="/Login">Login</Link>
            </p>

            <footer>
              <p>Copyright © Silqu</p>
              <div className="footer-links">
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link>
              </div>
            </footer>
          </div>

          
          <div className="image-section">
            <Image
              src="/sc9.PNG"
              alt="Silqu platform preview"
              fill
              className="hero-image"
            />
          </div>
        </div>
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
          min-height: 100vh;
          background: #f4f4f3;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .container {
          display: flex;
          max-width: 1100px;
          width: 100%;
          gap: 60px;
          align-items: center;
        }

        /* FORM SECTION */
        .form-section {
          max-width: 420px;
          width: 100%;
        }

        .logo {
          margin-bottom: 20px;
        }

        h1 {
          margin-bottom: 8px;
          font-size: 1.6rem;
          color: #111;
        }

        .intro {
          color: #6b7280;
          font-size: 0.95rem;
          margin-bottom: 28px;
        }

        .field {
          margin-bottom: 18px;
        }

        label {
          display: block;
          font-weight: 600;
          font-size: 0.85rem;
          margin-bottom: 6px;
          color: #111;
        }

        input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 8px;
          border: 1px solid #d1d5db;
          font-size: 0.95rem;
        }

        input:focus {
          outline: none;
          border-color: #0f2a33;
        }

        .btn {
          width: 100%;
          background: #0f2a33;
          color: #ffffff;
          padding: 14px;
          border: none;
          border-radius: 10px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          margin-top: 10px;
        }

        .btn:hover {
          background: #0b1f26;
        }

        .login-link {
          margin-top: 22px;
          font-size: 0.85rem;
          color: #374151;
        }

        .login-link a {
          color: #0f2a33;
          font-weight: 600;
          text-decoration: none;
        }

        footer {
          margin-top: 40px;
          font-size: 0.75rem;
          color: #6b7280;
        }

        .footer-links {
          margin-top: 10px;
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .footer-links a {
          color: #6b7280;
          text-decoration: none;
        }

        /* IMAGE SECTION */
        .image-section {
          position: relative;
          flex: 1;
          min-height: 420px;
        }

        .hero-image {
          object-fit: contain;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .container {
            flex-direction: column;
            gap: 40px;
          }

          .image-section {
            width: 100%;
            min-height: 300px;
          }
        }

        @media (max-width: 480px) {
          .image-section {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
