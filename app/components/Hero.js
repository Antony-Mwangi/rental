"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // run on load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        padding: isMobile ? "60px 20px" : "80px 40px",
        backgroundColor: "#f8fafc"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "40px" : "60px",
          alignItems: "center"
        }}
      >
        
        <div style={{ textAlign: isMobile ? "center" : "left" }}>
         
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#e0e7ff",
              color: "#2563eb",
              padding: "6px 14px",
              borderRadius: "20px",
              fontSize: "14px",
              marginBottom: "20px"
            }}
          >
            🏦 Estate Management
          </div>

        
          <h1
            style={{
              fontSize: isMobile ? "36px" : "48px",
              lineHeight: "1.1",
              marginBottom: "20px",
              color: "#0f172a"
            }}
          >
            Estate Management,
            <br />
            <span style={{ color: "#2563eb" }}>Simplified.</span>
          </h1>

          
          <h3
            style={{
              fontSize: isMobile ? "18px" : "20px",
              fontWeight: "500",
              marginBottom: "15px",
              color: "#1e293b"
            }}
          >
            Empowering You to Manage Your Estate Effortlessly.
          </h3>


          <p
            style={{
              fontSize: "16px",
              color: "#475569",
              maxWidth: "520px",
              margin: isMobile ? "0 auto 30px" : "0 0 30px"
            }}
          >
            Your Partner in Large Estate Management Success. SILQU
            centralizes tasks, automates workflows, and provides valuable
            data insights that enable seamless operations.
          </p>

        
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: isMobile ? "center" : "flex-start",
              flexWrap: "wrap"
            }}
          >
            {/* <button
              style={{
                padding: "14px 24px",
                backgroundColor: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer"
              }}
            >
              ⬇ Download Proposal
            </button>*/}

            <button
              style={{
                padding: "14px 24px",
                backgroundColor: "white",
                color: "#0f172a",
                border: "1px solid #cbd5f5",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer"
              }}
            >
              Explore Features →
            </button> 
          </div>
        </div>

        <div
          style={{
            position: "relative",
            backgroundColor: "#eef2ff",
            borderRadius: "24px",
            padding: isMobile ? "20px" : "30px"
          }}
        >
         
          <img
            src="/sql4.jpeg"
            alt="Estate"
            style={{
              width: "100%",
              borderRadius: "20px"
            }}
          />

          
          <img
            src="/phone2.jpeg"
            alt="Dashboard"
            style={{
              position: "absolute",
              bottom: isMobile ? "-10px" : "-20px",
              right: isMobile ? "10px" : "20px",
              width: isMobile ? "100px" : "140px",
              borderRadius: "20px",
              boxShadow: "0 10px 20px rgba(0,0,0,0.15)"
            }}
          />
        </div>
      </div>
    </section>
  );
}
