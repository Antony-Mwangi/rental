export default function Features() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Section Title */}
        <div style={styles.heading}>
          <span style={styles.badge}>Estate Management</span>
          <h2 style={styles.title}>
            All-in-One Large Estate Management Solution
          </h2>
        </div>

        {/* Feature Cards */}
        <div style={styles.grid}>
          <FeatureCard
            icon="🏢"
            title="All-in-One Estate Solution"
            desc="Manage properties, tenants, security, and finances from one system."
          />
          <FeatureCard
            icon="👥"
            title="System User Portals"
            desc="Dedicated portals for admins, residents, staff, and agents."
          />
          <FeatureCard
            icon="🚗"
            title="Smart Visitor & Parking"
            desc="Control visitor access and parking allocation seamlessly."
          />
          <FeatureCard
            icon="💳"
            title="Billing Made Easy"
            desc="Automated invoicing, payments, and financial reporting."
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURE CARD ---------------- */
function FeatureCard({ icon, title, desc }) {
  return (
    <div style={styles.card}>
      <div style={styles.icon}>{icon}</div>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardDesc}>{desc}</p>
    </div>
  );
}

/* ---------------- STYLES ---------------- */
const styles = {
  section: {
    padding: "80px 40px",
    backgroundColor: "#ffffff"
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto"
  },

  heading: {
    textAlign: "center",
    marginBottom: "50px"
  },

  badge: {
    display: "inline-block",
    backgroundColor: "#e0e7ff",
    color: "#2563eb",
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "14px",
    marginBottom: "10px"
  },

  title: {
    fontSize: "36px",
    color: "#0f172a"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "24px"
  },

  card: {
    backgroundColor: "#f8fafc",
    borderRadius: "16px",
    padding: "30px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
  },

  icon: {
    fontSize: "32px",
    marginBottom: "15px"
  },

  cardTitle: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#0f172a"
  },

  cardDesc: {
    fontSize: "15px",
    color: "#475569"
  }
};
