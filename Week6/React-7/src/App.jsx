import officeImg from "./assets/office.jpg";

function App() {

  const office = {
    Name: "DBS Business Center",
    Rent: 55000,
    Address: "Hyderabad"
  };

  const officeList = [
    {
      Name: "DBS Business Center",
      Rent: 55000,
      Address: "Hyderabad"
    },
    {
      Name: "Regus Office",
      Rent: 75000,
      Address: "Bangalore"
    },
    {
      Name: "Tech Park",
      Rent: 65000,
      Address: "Chennai"
    }
  ];

  return (

    <div style={{ margin: "20px" }}>

      <h1>Office Space Rental App</h1>

      <img
        src={officeImg}
        alt="Office Space"
        width="400"
        height="250"
      />

      <h2>Single Office Details</h2>

      <p><b>Name:</b> {office.Name}</p>

      <p>
        <b>Rent:</b>{" "}
        <span
          style={{
            color: office.Rent < 60000 ? "red" : "green"
          }}
        >
          {office.Rent}
        </span>
      </p>

      <p><b>Address:</b> {office.Address}</p>

      <hr />

      <h2>Office Space List</h2>

      {
        officeList.map((item, index) => (

          <div
            key={index}
            style={{
              border: "1px solid gray",
              padding: "10px",
              marginBottom: "10px"
            }}
          >

            <p><b>Name:</b> {item.Name}</p>

            <p>
              <b>Rent:</b>{" "}
              <span
                style={{
                  color: item.Rent < 60000 ? "red" : "green"
                }}
              >
                {item.Rent}
              </span>
            </p>

            <p><b>Address:</b> {item.Address}</p>

          </div>

        ))
      }

    </div>

  );

}

export default App;