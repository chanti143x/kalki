import "../index.css";

function Navbar() {
  function redirect() {
    window.open("https://www.example.com/", "_blank");
  }

  return (
    <>
      <div className="navbar">
        <div className="logo-div">
          <img className="logo" src="src/assets/image.png" alt="logo" />
        </div>
        <div className="navnames">
          <h4>Home</h4>

          <h4>About us</h4>

          <h4>Service</h4>

          <h4>Contact us</h4>
        </div>
        <div className="book-appointment">
          <button onClick={redirect}>Book Appointment</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
