"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header style={styles.header}>
      {/* LOGO */}
      <div style={styles.logoBox}>
        <img src="/slq.PNG" alt="Silqu Logo" style={styles.logo} />
        <h2 style={{ margin: 0 }}>SILQU</h2>
      </div>

      {/* DESKTOP NAV */}
      {!isMobile && (
        <nav style={styles.nav}>
          <NavLink href="/Definition">Home</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Pricing</NavLink>
          <NavLink href="#">Contact</NavLink>

          {/* <button style={styles.loginBtn}>Login</button> */}
          <NavLink href="/Login">Login</NavLink>
        </nav>
      )}

      {/* MOBILE MENU ICON */}
      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={styles.menuBtn}
        >
          ☰
        </button>
      )}

      {/* MOBILE MENU */}
      {isMobile && menuOpen && (
        <div style={styles.mobileMenu}>
          <NavLink href="/Definition" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink href="#" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink href="#" onClick={() => setMenuOpen(false)}>Pricing</NavLink>
          <NavLink href="#" onClick={() => setMenuOpen(false)}>Contact</NavLink>

          <button style={styles.loginBtn}>Login</button>
        </div>
      )}
    </header>
  );
}

/* ------------------ REUSABLE LINK ------------------ */
function NavLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      style={styles.link}
    >
      {children}
    </Link>
  );
}

/* ------------------ STYLES ------------------ */
const styles = {
  header: {
    backgroundColor: "#0f172a",
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    position: "relative"
  },

  logoBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },

  logo: {
    height: "40px",
    width: "auto"
  },

  nav: {
    display: "flex",
    gap: "20px",
    alignItems: "center"
  },

  link: {
    padding: "8px 16px",
    backgroundColor: "#2563eb",
    color: "white",
    borderRadius: "5px",
    textDecoration: "none",
    fontSize: "14px"
  },

  loginBtn: {
    padding: "8px 16px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },

  menuBtn: {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "28px",
    cursor: "pointer"
  },

  mobileMenu: {
    position: "absolute",
    top: "80px",
    right: "20px",
    backgroundColor: "#020617",
    borderRadius: "10px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    zIndex: 1000,
    width: "200px"
  }
};
