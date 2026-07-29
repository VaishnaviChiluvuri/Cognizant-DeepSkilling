function UserGreeting() {
  return (
    <div>
      <h1>Welcome back</h1>

      <h3>Flight Booking</h3>

      <table border="1">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Fare</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Delhi</td>
            <td>Mumbai</td>
            <td>₹4500</td>
            <td><button>Book Ticket</button></td>
          </tr>

          <tr>
            <td>6E205</td>
            <td>Hyderabad</td>
            <td>Chennai</td>
            <td>₹3200</td>
            <td><button>Book Ticket</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserGreeting;