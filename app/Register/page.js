"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleRegister() {
    setLoading(true);

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, phone, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      router.push("/Login");
    } else {
      alert(data.error || "Something went wrong");
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

            <h1>Create your account</h1>

            <div className="field">
              <label>Email</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="field">
              <label>Phone Number</label>
              <input
                type="tel"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="field">
              <label>Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="btn" onClick={handleRegister} disabled={loading}>
              {loading ? "Creating account..." : "Create Account"}
            </button>

            <p className="login-link">
              Already have an account? <Link href="/Login">Login</Link>
            </p>
          </div>
        </div>
      </div>

      {/* 🔒 STYLING LEFT EXACTLY AS YOU PROVIDED */}
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
      `}</style>
    </>
  );
}
