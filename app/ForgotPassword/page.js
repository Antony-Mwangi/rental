"use client";

import Link from "next/link";

export default function ForgotPassword() {
  return (
    <>
      <div className="page">
        <div className="card">
          <h1>Forgot Password?</h1>
          <p className="subtitle">
            Don’t worry! Enter your email and we’ll send you a password reset link.
          </p>

          <div className="field">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>

          <button className="btn">Send Reset Link</button>

          <p className="back-to-login">
            Remembered your password? <Link href="/Login">Login</Link>
          </p>
        </div>
      </div>

      {/* PURE INTERNAL CSS */}
      <style>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
          background: #f4f4f3;
        }

        .page {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 20px;
        }

        .card {
          background: #fff;
          padding: 36px 30px;
          border-radius: 14px;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
          width: 100%;
          max-width: 420px;
          text-align: center;
        }

        h1 {
          font-size: 1.6rem;
          margin-bottom: 8px;
          color: #111;
        }

        .subtitle {
          font-size: 0.95rem;
          margin-bottom: 24px;
          color: #555;
        }

        .field {
          text-align: left;
          margin-bottom: 20px;
        }

        label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 6px;
        }

        input {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 0.95rem;
        }

        input:focus {
          outline: none;
          border-color: #2563eb;
        }

        .btn {
          width: 100%;
          padding: 14px;
          background: #2563eb;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
        }

        .btn:hover {
          background: #1e40af;
        }

        .back-to-login {
          margin-top: 22px;
          font-size: 0.85rem;
          color: #555;
        }

        .back-to-login a {
          color: #2563eb;
          text-decoration: none;
          font-weight: 600;
        }
        .back-to-login a:hover {
          text-decoration: underline;
        }

        @media (max-width: 480px) {
          .card {
            padding: 30px 20px;
          }

          h1 {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </>
  );
}
