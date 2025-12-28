"use client";

import { useState } from "react";

export default function Dashboard() {
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Function to render pages dynamically
  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <DashboardPage />;
      case "properties":
        return <PropertiesPage />;
      case "tenants":
        return <TenantsPage />;
      case "finance":
        return <FinancePage />;
      case "maintenance":
        return <MaintenancePage />;
      case "parking":
        return <ParkingPage />;
      case "security":
        return <SecurityPage />;
      case "reports":
        return <ReportsPage />;
      case "settings":
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  const menuItems = [
    { label: "Dashboard", key: "dashboard", icon: "🏠" },
    { label: "Properties", key: "properties", icon: "🏢" },
    { label: "Tenants", key: "tenants", icon: "👥" },
    { label: "Finance", key: "finance", icon: "💰" },
    { label: "Maintenance", key: "maintenance", icon: "🛠" },
    { label: "Parking", key: "parking", icon: "🚗" },
    { label: "Security", key: "security", icon: "🔒" },
    { label: "Reports", key: "reports", icon: "📊" },
    { label: "Settings", key: "settings", icon: "⚙️" },
  ];

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={{ ...styles.sidebar, width: sidebarOpen ? "250px" : "60px" }}>
        <h2 style={styles.logo}>{sidebarOpen ? "PropManage" : "PM"}</h2>
        <nav style={styles.nav}>
          {menuItems.map((item) => (
            <a
              key={item.key}
              href="#"
              style={{
                ...styles.navItem,
                background: activePage === item.key ? "#34495e" : "transparent",
              }}
              onClick={() => setActivePage(item.key)}
            >
              {item.icon} {sidebarOpen && item.label}
            </a>
          ))}
        </nav>
        <button
          style={styles.toggleBtn}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "⬅" : "➡"}
        </button>
      </div>

      
      <div style={styles.main}>{renderPage()}</div>
    </div>
  );
}



function DashboardPage() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Overview of properties, tenants, and finances.</p>
    </div>
  );
}

function PropertiesPage() {
  return (
    <div>
      <h2>Properties</h2>
      <p>List of all properties, units, and occupancy status.</p>
    </div>
  );
}

function TenantsPage() {
  return (
    <div>
      <h2>Tenants</h2>
      <p>Tenant profiles, lease agreements, and contact info.</p>
    </div>
  );
}

function FinancePage() {
  return (
    <div>
      <h2>Finance</h2>
      <p>Rent collection, expenses, invoices, and financial reports.</p>
    </div>
  );
}

function MaintenancePage() {
  return (
    <div>
      <h2>Maintenance</h2>
      <p>Pending tasks, maintenance requests, and history.</p>
    </div>
  );
}

function ParkingPage() {
  return (
    <div>
      <h2>Parking</h2>
      <p>Vehicle logs and parking allocation.</p>
    </div>
  );
}

function SecurityPage() {
  return (
    <div>
      <h2>Security</h2>
      <p>Visitor logs and security alerts.</p>
    </div>
  );
}

function ReportsPage() {
  return (
    <div>
      <h2>Reports</h2>
      <p>Analytics, graphs, and KPIs for your properties.</p>
    </div>
  );
}

function SettingsPage() {
  return (
    <div>
      <h2>Settings</h2>
      <p>Update profile, property rules, and user roles.</p>
    </div>
  );
}



const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
    background: "#f4f6f8",
  },
  sidebar: {
    background: "#2c3e50",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    padding: "20px 10px",
    transition: "width 0.3s",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  navItem: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    padding: "5px 10px",
    borderRadius: "5px",
    transition: "background 0.2s",
    cursor: "pointer",
  },
  toggleBtn: {
    marginTop: "auto",
    background: "#34495e",
    border: "none",
    color: "#fff",
    padding: "10px",
    cursor: "pointer",
    borderRadius: "5px",
  },
  main: {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
  },
};
