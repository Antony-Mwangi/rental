export default function PropertyCard({ property }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "15px",
      margin: "10px",
      width: "250px",
      textAlign: "center"
    }}>
      <img src={property.image} alt={property.name} style={{ width: "100%", borderRadius: "10px" }} />
      <h3>{property.name}</h3>
      <p>Price: ${property.price}/day</p>
      <button style={{
        padding: "5px 10px",
        backgroundColor: "#0070f3",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}>Rent Now</button>
    </div>
  );
}
