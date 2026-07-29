function GuestGreeting() {
  return (
    <div>
      <h1>Please sign up.</h1>

      <h3>Flight Details</h3>

      <table border="1">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Fare</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Delhi</td>
            <td>Mumbai</td>
            <td>₹4500</td>
          </tr>

          <tr>
            <td>6E205</td>
            <td>Hyderabad</td>
            <td>Chennai</td>
            <td>₹3200</td>
          </tr>
        </tbody>
      </table>

      <p>Login to book tickets.</p>
    </div>
  );
}

export default GuestGreeting;