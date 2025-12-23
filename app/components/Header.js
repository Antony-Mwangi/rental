import Link from "next/link";

export default function Header() {  
    return (
        <header
        style={{
            backgroundColor: "#0f172a",
            padding: "20px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white"
        }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src="/slq.PNG"
          alt="Silqu Logo"
          style={{ height: "40px", width: "auto" }}
        />
        <h2 style={{ margin: 0 }}>SILQU</h2>
      </div>

            <nav style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <Link href="/" style={{ 
                    padding: "8px 16px",
                    backgroundColor: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"}}>Home</Link>

                <Link href="#" style={{ 
                    padding: "8px 16px",
                    backgroundColor: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                    }}>About</Link>

                <Link href="#" style={{
                    padding: "8px 16px",
                    backgroundColor: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                     }}>Pricing</Link>

                <Link href="#" style={{ 
                    padding: "8px 16px",
                    backgroundColor: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer" 
                    }}>Contact</Link>

                <button
                style={{
                    padding: "8px 16px",
                    backgroundColor: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
                >Login</button>
                
            </nav>
        </header>
    );
}