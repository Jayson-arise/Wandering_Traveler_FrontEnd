import { useState, useEffect } from "react";
import cartCSS from "./Cart.module.css";
import { BACKEND_URL } from "../config/constants";
import PaymentPage from "./Payment/Payment";

function Cart() {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [notification, setNotification] = useState("");
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);

  const parsePrice = (price) => parseFloat(price.toString().replace(/[$,]/g, ""));

  useEffect(() => {
    const fetchBookings = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      const localBookings = (JSON.parse(localStorage.getItem("bookings")) || []).map((booking) => ({
        ...booking,
        price: parsePrice(booking.price),
        bookingTime: booking.booking_time || booking.bookingTime || null,
      }));

      setBookings(localBookings);

      if (user) {
        try {
          const response = await fetch(`${BACKEND_URL}/api/bookings?user_id=${user.id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });

          const data = await response.json();
          if (response.ok) {
            const fetchedBookings = data.map((booking) => ({
              ...booking,
              price: parsePrice(booking.price),
            }));

            const allBookings = [...fetchedBookings, ...localBookings];
            setBookings(allBookings);
            localStorage.setItem("bookings", JSON.stringify(allBookings));
          } else {
            alert(data.message || "Failed to fetch bookings");
          }
        } catch (error) {
          console.log(error);
          alert("Error connecting to server");
        }
      }
    };

    fetchBookings();
  }, []);

  useEffect(() => {
    const handleBookingConfirmation = (event) => {
      const { index } = event.detail;
      setNotification("You have successfully booked");

      setTimeout(() => {
        const updatedBookings = bookings.filter((_, i) => i !== index);
        setBookings(updatedBookings);
        localStorage.setItem("bookings", JSON.stringify(updatedBookings));
        setNotification("");
      }, 1000);
    };

    window.addEventListener("bookingConfirmed", handleBookingConfirmation);
    return () => {
      window.removeEventListener("bookingConfirmed", handleBookingConfirmation);
    };
  }, [bookings]);

  const handleRemoveBooking = (e, index) => {
    e.stopPropagation();
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  const handleSelectBooking = (booking) => {
    setSelectedBooking(booking);
    setIsDetailsDialogOpen(true);
  };

  const handleBooked = (e, index) => {
    e.stopPropagation();
    const bookingWithIndex = { ...bookings[index], index }; // attach index
    setSelectedBooking(bookingWithIndex);
    setIsPaymentOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDetailsDialogOpen(false);
    setSelectedBooking(null);
  };

  const handleClosePayment = () => {
    setIsPaymentOpen(false);
    setSelectedBooking(null);
  };

  const handlePaymentSuccess = (index) => {
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    setNotification("You have successfully booked");
    setIsPaymentOpen(false);
    setSelectedBooking(null);
  };

  return (
    <div className={cartCSS.cartWrapper}>
      <h2>Your Bookings</h2>
      {bookings?.length === 0 ? (
        <p className={cartCSS.noBookings}>No bookings added.</p>
      ) : (
        <ul className={cartCSS.bookingList}>
          {bookings.map((booking, index) => (
            <li key={index} onClick={() => handleSelectBooking(booking)} className={cartCSS.bookingCard}>
              <div className={cartCSS.bookingDetails}>
                <p className={cartCSS.bookingTitle}>{booking.destination || booking.title}</p>
                <p>${booking.price.toFixed(2)}</p>
                <p>
                  Booked On:{" "}
                  {(booking.bookingTime || booking.booking_time)
                    ? new Date(booking.bookingTime || booking.booking_time).toLocaleString()
                    : "N/A"}
                </p>
              </div>
              <div className={cartCSS.buttonGroup}>
                <button className={cartCSS.bookedButton} onClick={(e) => handleBooked(e, index)}>Booked</button>
                <button className={cartCSS.removeButton} onClick={(e) => handleRemoveBooking(e, index)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {isDetailsDialogOpen && selectedBooking && (
        <div className={cartCSS.dialogOverlay} onClick={handleCloseDialog}>
          <div className={cartCSS.dialogContent} onClick={(e) => e.stopPropagation()}>
            <h3>Booking Details</h3>
            <p>Destination: {selectedBooking.title}</p>
            <p>Price: ${selectedBooking.price.toFixed(2)}</p>
            <img src={selectedBooking.img} alt={selectedBooking.title} />
            <button onClick={handleCloseDialog}>Close</button>
          </div>
        </div>
      )}

      {isPaymentOpen && selectedBooking && (
        <PaymentPage
          place={selectedBooking.title}
          price={selectedBooking.price}
          image={selectedBooking.img}
          onClose={handleClosePayment}
          bookingIndex={selectedBooking.index}
          onPaymentSuccess={handlePaymentSuccess} // passed to PaymentPage
        />
      )}

      {notification && (
        <div className={cartCSS.notification}>
          <p>{notification}</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
