function HeroSection() {
  return (
    <>
      
    
      <div className="heroSection">

        <h4 className="title1">Hi i'am kalki</h4>
        <h1 className="title2">
          Lorem ipsum dolor <br />
          <span className="hello">sit amet consectetur.</span>
        </h1>
      </div>

      <div className="advertizing">

      <div className="contact">

       <div> <img className="callicon" src="src/assets/call-icon.png" alt="callicon" /></div>
        <div className="contactbox"><h3>Need Dental Services ?</h3>
        <p>call on: 8317667454</p></div>
      </div>

      <div className="timings"></div>

      <div className="appointment"></div>


      <div className="contact">

       <div> <img className="callicon" src="src/assets/timer.png" alt="callicon" /></div>
        <div className="contactbox"><h3>Opening Hours</h3>
        <p>Mon to Sat 9:00AM to 9:00PM</p></div>
      </div>

      <div className="timings"></div>

      <div className="appointment"></div>


      <div className="contactButton">

       
       <button>Book Appointment</button>
      </div>

      <div className="timings"></div>

      <div className="appointment"></div>


      </div>
    </>
  );
}

export default HeroSection;
