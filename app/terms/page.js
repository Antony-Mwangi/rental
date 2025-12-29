export default function TermsAndConditions() {
  return (
    <main style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>Terms and Conditions</h1>

        <p style={styles.text}>
          These Terms and Conditions govern your use of the SILQU property management
          platform. By accessing or using our services, you agree to be bound by
          these terms. If you do not agree, please do not use our platform.
        </p>

        <h2 style={styles.sectionHeading}>1. Use of the Platform</h2>
        <p style={styles.text}>
          You agree to use our platform only for lawful purposes and in a way that
          does not infringe on the rights of others or restrict their use of the
          system. You are responsible for all activity conducted under your account.
        </p>

        <h2 style={styles.sectionHeading}>2. User Accounts & Security</h2>
        <p style={styles.text}>
          Users must provide accurate registration information and keep their
          login credentials secure. You are responsible for all activities that
          occur under your account.
        </p>

        <h2 style={styles.sectionHeading}>3. Payments & Billing</h2>
        <p style={styles.text}>
          Payments made through the platform are subject to applicable payment
          terms and fees. SILQU is not responsible for payment errors caused by
          third-party processors.
        </p>

        <h2 style={styles.sectionHeading}>4. Intellectual Property</h2>
        <p style={styles.text}>
          All content, logos, graphics, and software provided by SILQU are
          protected by intellectual property rights. You may not reproduce or
          redistribute our material without written permission.
        </p>

        <h2 style={styles.sectionHeading}>5. Limitation of Liability</h2>
        <p style={styles.text}>
          SILQU will not be liable for indirect, incidental, special, consequential,
          or punitive damages arising from your use of the platform.
        </p>

        <h2 style={styles.sectionHeading}>6. Termination</h2>
        <p style={styles.text}>
          SILQU reserves the right to suspend or terminate your access to the
          platform for violations of these Terms.
        </p>

        <h2 style={styles.sectionHeading}>7. Changes to Terms</h2>
        <p style={styles.text}>
          We may update these Terms and Conditions at any time. Continued use of
          the platform after changes constitutes acceptance of the new terms.
        </p>

        <h2 style={styles.sectionHeading}>8. Governing Law</h2>
        <p style={styles.text}>
          These terms are governed by the laws of Kenya and any dispute shall be
          subject to the exclusive jurisdiction of the courts in Kenya.
        </p>

        <h2 style={styles.sectionHeading}>Contact Information</h2>
        <p style={styles.text}>If you have questions about these terms, contact us at:</p>
        <p style={styles.text}>📧 info@silqu.com</p>
        <p style={styles.text}>📞 +254 787 888 828</p>
      </div>
    </main>
  );
}

const styles = {
  wrapper: {
    backgroundColor: "#f8fafc",
    minHeight: "100vh",
    padding: "60px 20px",
  },

  container: {
    maxWidth: "900px",
    margin: "auto",
    background: "#ffffff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.7,
    color: "#1e293b",
  },

  title: {
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "30px",
    color: "#0f172a",
  },

  sectionHeading: {
    fontSize: "22px",
    marginTop: "30px",
    marginBottom: "10px",
    fontWeight: "600",
    color: "#0f172a",
  },

  text: {
    fontSize: "16px",
    marginBottom: "15px",
    color: "#334155",
  },
};
