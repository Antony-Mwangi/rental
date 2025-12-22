"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#333", color: "#fff" }}>
      <Link href="/" style={{ marginRight: "15px", color: "#fff" }}>Home</Link>
      <Link href="/properties" style={{ marginRight: "15px", color: "#fff" }}>Properties</Link>
      <Link href="/login" style={{ marginRight: "15px", color: "#fff" }}>Login</Link>
      <Link href="/register" style={{ color: "#fff" }}>Register</Link>
    </nav>
  );
}
