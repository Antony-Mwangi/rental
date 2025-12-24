export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        <div style={styles.column}>
          <div style={styles.brand}>
            <img
              src="/slq.PNG"
              alt="Silqu Logo"
              style={{ height: "40px" }}
            />
            <h3 style={{ margin: 0 }}>SILQU</h3>
          </div>
          <p style={styles.text}>
            SILQU is a smart property management system that simplifies
            rent collection, tenant management, and estate operations.
          </p>
        </div>

        
        <div style={styles.column}>
          <h4 style={styles.heading}>Quick Links</h4>
          <ul style={styles.list}>
            <li>Login</li>
            <li>Contact</li>
            <li>home</li>
            
          </ul>
        </div>

        
        <div style={styles.column}>
          <h4 style={styles.heading}>Contact</h4>
          <p style={styles.text}>Ridgeways Off Kiambu Road, Nairobi</p>
          <p style={styles.text}>📞 +254 787 888 828</p>
          <p style={styles.text}>✉ info@silqu.com</p>

          <div style={styles.socials}>
            {/* <span>📸</span> */}
            {/* <span>📘</span>
            <span>💬</span> */}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div style={styles.bottom}>
        © 2025 SILQU — All rights reserved
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#0f172a",
    color: "#e5e7eb",
    padding: "60px 40px 20px"
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "40px"
  },

  column: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },

  brand: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },

  heading: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "white"
  },

  text: {
    fontSize: "14px",
    color: "#cbd5f5",
    lineHeight: "1.6"
  },

  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    fontSize: "14px",
    cursor: "pointer"
  },

  socials: {
    display: "flex",
    gap: "12px",
    fontSize: "20px",
    marginTop: "10px",
    cursor: "pointer"
  },

  bottom: {
    marginTop: "40px",
    paddingTop: "20px",
    borderTop: "1px solid #1e293b",
    textAlign: "center",
    fontSize: "14px",
    color: "#94a3b8"
  }
};
