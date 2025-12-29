export default function PrivacyPolicy() {
  return (
    <main style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>Privacy Policy</h1>

        <p style={styles.text}>
          SILQU is committed to protecting your privacy. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your
          information when you use our property management platform.
        </p>

        <h2 style={styles.heading}>Information We Collect</h2>
        <p style={styles.text}>
          We may collect personal information including your name, email
          address, phone number, payment details, and property-related data
          when you register or use our services.
        </p>

        <h2 style={styles.heading}>How We Use Your Information</h2>
        <p style={styles.text}>
          Your information is used to operate and improve our services,
          process transactions, communicate updates, provide customer
          support, and comply with legal obligations.
        </p>

        <h2 style={styles.heading}>Sharing of Information</h2>
        <p style={styles.text}>
          We do not sell your personal information. We may share information
          with trusted third-party service providers who assist in operating
          our platform, processing payments, or delivering services, subject
          to confidentiality obligations.
        </p>

        <h2 style={styles.heading}>Data Security</h2>
        <p style={styles.text}>
          We implement reasonable administrative, technical, and physical
          security measures to protect your personal information. However,
          no method of transmission over the internet is completely secure.
        </p>

        <h2 style={styles.heading}>Data Retention</h2>
        <p style={styles.text}>
          We retain personal information only for as long as necessary to
          fulfill the purposes outlined in this policy, unless a longer
          retention period is required by law.
        </p>

        <h2 style={styles.heading}>Your Rights</h2>
        <p style={styles.text}>
          You have the right to access, update, or request deletion of your
          personal information. You may also object to certain processing
          activities where permitted by law.
        </p>

        <h2 style={styles.heading}>Changes to This Policy</h2>
        <p style={styles.text}>
          We may update this Privacy Policy from time to time. Any changes
          will be effective immediately upon posting on this page.
        </p>

        <h2 style={styles.heading}>Contact Us</h2>
        <p style={styles.text}>📍 Ridgeways Off Kiambu Road, Nairobi, Kenya</p>
        <p style={styles.text}>📞 +254 787 888 828</p>
        <p style={styles.text}>✉ info@silqu.com</p>
      </div>
    </main>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  wrapper: {
    backgroundColor: "#f8fafc",
    minHeight: "100vh",
    padding: "60px 20px"
  },

  container: {
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.7",
    color: "#1e293b"
  },

  title: {
    textAlign: "center",
    fontSize: "34px",
    marginBottom: "30px",
    color: "#0f172a"
  },

  heading: {
    fontSize: "22px",
    marginTop: "30px",
    marginBottom: "10px",
    color: "#0f172a"
  },

  text: {
    fontSize: "16px",
    marginBottom: "12px",
    color: "#334155"
  }
};
