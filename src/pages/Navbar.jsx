import "../index.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo-div">
          <img className="logo" src="src/assets/image.png" alt="logo" />
        </div>
        <div className="navnames">
          <h4>home</h4>

          <h4>about us</h4>

          <h4>service</h4>

          <h4>contact us</h4>
        </div>
        <div className="book-appointment">
          <button>Hello</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
