import PropTypes from 'prop-types';
import TripDialogCSS from './TripDialog.module.css';
import { addBooking } from '../../api/bookingApi';

function formatDateToSQL(datetime) {
  const date = new Date(datetime);
  const pad = (n) => (n < 10 ? '0' + n : n);

  return (
    date.getFullYear() +
    '-' +
    pad(date.getMonth() + 1) +
    '-' +
    pad(date.getDate()) +
    ' ' +
    pad(date.getHours()) +
    ':' +
    pad(date.getMinutes()) +
    ':' +
    pad(date.getSeconds())
  );
}

function TripDialog({ trip, onClose }) {
  if (!trip) return null;

  const handleAddToCart = async () => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    const bookingWithTime = {
      ...trip,
      booking_time: formatDateToSQL(new Date()),
    };

    const updatedBookings = [...storedBookings, bookingWithTime];
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.id) {
      console.error("User not logged in.");
      return;
    }

    try {
      await addBooking(bookingWithTime, user.id);
      console.log("Booking sent to backend.");
    } catch (err) {
      console.error("Booking API error:", err);
    }

    onClose();
  };

  return (
    <div className={TripDialogCSS.dialogOverlay}>
      <div className={TripDialogCSS.dialog}>
        <h2>{trip.title}</h2>
        <img src={trip.img} alt={trip.title} />
        <p>{trip.details.join(', ')}</p>
        <p>{trip.price}</p>
        <div className={TripDialogCSS.buttonGroup}>
          <button onClick={handleAddToCart}>Add to Booking</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

TripDialog.propTypes = {
  trip: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export default TripDialog;
