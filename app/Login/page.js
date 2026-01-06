"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      localStorage.setItem("token", data.token);
      router.push("/dashboard");
    } else {
      alert(data.error || "Invalid login details");
    }
  }

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

            <p className="intro">
              To get started, enter your login details below.
            </p>

            <div className="field">
              <label>Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="field">
              <label>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="actions">
              <Link href="/ForgotPassword">Forgot Password?</Link>
            </div>

            <button className="btn" onClick={handleLogin} disabled={loading}>
              {loading ? "Signing in..." : "Proceed →"}
            </button>

            <p className="register">
              Not signed up? <Link href="/Register">Create an account</Link>
            </p>

            <footer>
              <p>Copyright © Silqu</p>
              <div className="footer-links">
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link>
              </div>
            </footer>
          </div>

          <div className="image-section">
            <Image
              src="/sc8.PNG"
              alt="Silqu Dashboard Preview"
              fill
              className="hero-image"
            />
          </div>
        </div>
      </div>

      {/* 🎨 STYLING UNCHANGED */}
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
          background: #f4f4f3;
          max-width: 1100px;
          width: 100%;
          gap: 60px;
          align-items: center;
        }

        .form-section {
          max-width: 420px;
          width: 100%;
        }

        .logo {
          margin-bottom: 20px;
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

        .actions {
          text-align: right;
          margin-bottom: 20px;
        }

        .actions a {
          font-size: 0.85rem;
          color: #0f2a33;
          text-decoration: none;
        }

        .btn {
          width: 100%;
          background: #0f2a33;
          color: #fff;
          padding: 14px;
          border: none;
          border-radius: 10px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
        }

        .btn:hover {
          background: #0b1f26;
        }

        .register {
          margin-top: 22px;
          font-size: 0.85rem;
          color: #374151;
        }

        .register a {
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

        .image-section {
          position: relative;
          flex: 1;
          min-height: 420px;
        }

        .hero-image {
          object-fit: contain;
        }

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
