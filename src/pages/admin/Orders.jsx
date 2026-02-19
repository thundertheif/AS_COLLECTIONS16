export default function Orders() {
  return (
    <div>
      <h1>Orders Panel</h1>

      <table style={table}>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#1001</td>
            <td>Ramki</td>
            <td>Pending</td>
            <td>₹3500</td>
          </tr>
          <tr>
            <td>#1002</td>
            <td>Sita</td>
            <td>Delivered</td>
            <td>₹2200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const table = { width: "100%", background: "#fff", borderCollapse: "collapse" };
