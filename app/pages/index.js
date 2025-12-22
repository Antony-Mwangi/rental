import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h1>Welcome to the Rental System</h1>
        <p>Find your perfect property to rent easily.</p>
      </div>
      <Footer />
    </div>
  );
}
