"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <>
      <div className="page">
        <div className="container">
        
          <div className="form-section">
            <h1>Contact Us</h1>
            <p className="intro">
              Have questions or need support? Send us a message and we’ll
              get back to you.
            </p>

            <form className="contact-form">
              <div className="field">
                <label>Name</label>
                <input type="text" placeholder="Your full name" />
              </div>

              <div className="field">
                <label>Email</label>
                <input type="email" placeholder="you@example.com" />
              </div>

              <div className="field">
                <label>Phone Number</label>
                <input type="tel" placeholder="+254 712 345 678" />
              </div>

              <div className="field">
                <label>Message</label>
                <textarea placeholder="How can we help you?" />
              </div>

              <button type="submit" className="btn">
                Send Message
              </button>
            </form>

            <div className="contact-info">
              <p>
                <strong>Support (24/7):</strong> info@silqu.com
              </p>
              <p>
                <strong>Sales Enquiry:</strong> +254 717 888 828
              </p>
              <p>
                <strong>General Phone:</strong> +254 787 888 828
              </p>
            </div>
          </div>

          
          <div className="image-section">
            <Image
              src="/contact-us1.jpg"
              alt="Contact Us"
              fill
              className="contact-img"
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
          font-family: system-ui, Arial, sans-serif;
        }

        .page {
          min-height: 100vh;
          background: #f4f4f3;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px 20px;
        }

        .container {
          max-width: 1100px;
          width: 100%;
          display: flex;
          gap: 50px;
          align-items: center;
        }

        .form-section {
          width: 100%;
          max-width: 500px;
        }

        h1 {
          margin-bottom: 8px;
          font-size: 1.8rem;
          color: #111;
        }

        .intro {
          font-size: 0.95rem;
          color: #555;
          margin-bottom: 24px;
        }

        .contact-form .field {
          margin-bottom: 18px;
        }

        label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 6px;
        }

        input,
        textarea {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 0.95rem;
          resize: vertical;
        }

        textarea {
          min-height: 100px;
        }

        .btn {
          width: 100%;
          background: #0f2a33;
          color: white;
          padding: 14px;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          margin-top: 8px;
        }

        .btn:hover {
          background: #0b1f26;
        }

        .contact-info {
          margin-top: 28px;
          font-size: 0.9rem;
          color: #333;
        }

        .contact-info p {
          margin: 6px 0;
        }

        .image-section {
          flex: 1;
          position: relative;
          min-height: 350px;
        }

        .contact-img {
          object-fit: contain;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .container {
            flex-direction: column;
            gap: 30px;
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
