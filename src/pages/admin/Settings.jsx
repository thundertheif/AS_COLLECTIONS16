export default function Settings() {
  return (
    <div>
      <h1>Admin Settings</h1>

      <div style={box}>
        <input defaultValue="AS COLLECTIONS" placeholder="Company Name" />
        <input placeholder="Contact Email" />
        <input placeholder="Phone Number" />
        <input placeholder="Company Address" />
        <button>Save Settings</button>
      </div>
    </div>
  );
}

const box = { background: "#fff", padding: 20, display: "grid", gap: 10, width: 400 };
