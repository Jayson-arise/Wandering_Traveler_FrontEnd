import { useState } from "react";
import PropTypes from "prop-types";
import TripCSS from "./Trips.module.css";
import TripDialog from "./../TripDialog/TripDialog";
// import PaymentPage from "./../Payment/Payment";
import trip1 from "../../assets/Trip1.webp";
import trip2 from "../../assets/Trip2.webp";
import trip3 from "../../assets/Trip3.webp";
import trip4 from "../../assets/Trip4.jpg";
import trip5 from "../../assets/Trip5.jpg";
import trip6 from "../../assets/Trip6.jpg";
import trip7 from "../../assets/Trip7.webp";
import trip8 from "../../assets/Trip8.jpg";

function Trips({ setShowLoginModal }) {
  const [selectedTrip, setSelectedTrip] = useState(null);

  const handleBookNow = (trip) => {
    const sessionUser = sessionStorage.getItem("isLoggedIn");

    if (sessionUser === "true") {
      // Check for duplicate booking
      const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
      const alreadyBooked = existingBookings.some(
        (b) => b.id === trip.id || b.title === trip.title
      );

      if (alreadyBooked) {
        alert("You have already booked this trip.");
        return;
      }

      setSelectedTrip(trip);
    } else {
      setShowLoginModal(true);
    }
  };

  const handleDialogClose = () => {
    setSelectedTrip(null);
  };

  const handleDialogSubmit = () => {
    if (selectedTrip) {
      const bookingWithTime = {
        ...selectedTrip,
        booking_time: new Date().toISOString(),
      };

      const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
      localStorage.setItem("bookings", JSON.stringify([...existingBookings, bookingWithTime]));

      setSelectedTrip(null);
    }
  };

  const trips = [
    {
      id: 1,
      img: trip1,
      title: "Bali, Indonesia",
      details: ["5 Days", "3 Places", "Indonesia"],
      price: "$266.80",
      url: "https://www.airbnb.com/",
    },
    {
      id: 2,
      img: trip2,
      title: "Bora Bora, French Polynesia",
      details: ["7 Days", "5 Places", "French Polynesia"],
      price: "$5,778.63",
      url: "https://www.booking.com/",
    },
    {
      id: 3,
      img: trip3,
      title: "Cinque Terre, Italy",
      details: ["5 Days", "5 Places", "Italy"],
      price: "$1,217.07",
      url: "https://www.expedia.com/",
    },
    {
      id: 4,
      img: trip4,
      title: "Albuquerque, New Mexico",
      details: ["6 Days", "5 Places", "New Mexico"],
      price: "$1,596",
      url: "https://www.example.com/",
    },
    {
      id: 5,
      img: trip5,
      title: "Boracay",
      details: ["7 Days", "3 Places", "Malay, Aklan"],
      price: "$1,000",
      url: "https://www.tripadvisor.com/",
    },
    {
      id: 6,
      img: trip6,
      title: "Palawan",
      details: ["7 Days", "3 Places", "Palawan"],
      price: "$1,100",
      url: "https://www.travelocity.com/",
    },
    {
      id: 7,
      img: trip7,
      title: "Kruger National Park, South Africa",
      details: ["4 Days", "2 Places", "South Africa"],
      price: "$900",
      url: "https://www.safaritours.com/",
    },
    {
      id: 8,
      img: trip8,
      title: "Barcelona",
      details: ["6 Days", "5 Places", "Spain"],
      price: "$2,200",
      url: "https://www.spaintravel.com/",
    },
  ];

  return (
    <div className={`${TripCSS.trips_wrapper} section`} id="trips">
      <h2>Popular Trips</h2>

      <div className={TripCSS.cards}>
        {trips.map((trip, index) => (
          <div className={TripCSS.card} key={index}>
            <img src={trip.img} alt={trip.title} />
            <div className={TripCSS.TripContent}>
              <div className={TripCSS.rating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
              </div>

              <h3>{trip.title}</h3>

              <div className={TripCSS.TripDetails}>
                {trip.details.map((detail, i) => (
                  <span key={i}>
                    <i
                      className={
                        i === 0
                          ? "ri-calendar-line"
                          : i === 1
                          ? "ri-map-pin-line"
                          : "ri-flag-line"
                      }
                    ></i>{" "}
                    {detail}
                  </span>
                ))}
              </div>

              <div className={TripCSS.Pricing}>
                <span className={TripCSS.price}>{trip.price}</span>
                <button
                  className={TripCSS.book}
                  onClick={() => handleBookNow(trip)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <TripDialog
        trip={selectedTrip}
        onClose={handleDialogClose}
        onSubmit={handleDialogSubmit}
      />

      {/* If you use payment page later:
      {selectedTrip && (
        <PaymentPage
          place={selectedTrip.title}
          price={parseFloat(selectedTrip.price.replace(/[$,]/g, ""))}
          image={selectedTrip.img}
          onClose={handleDialogClose}
        />
      )} */}
    </div>
  );
}

Trips.propTypes = {
  setShowLoginModal: PropTypes.func.isRequired,
};

export default Trips;
