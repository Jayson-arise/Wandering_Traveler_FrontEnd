import { useState } from "react";
import paymentCSS from "./../Payment/Payment.module.css";
import PropTypes from "prop-types";

function PaymentPage({ place, price, image, onClose, bookingIndex, onPaymentSuccess }) {
  const [amountPaid, setAmountPaid] = useState("");
  const [message, setMessage] = useState("");
  const [receipt, setReceipt] = useState(null);

  const handlePayment = () => {
    const paidAmount = parseFloat(amountPaid);

    if (isNaN(paidAmount)) {
      setMessage("Please enter a valid amount.");
      return;
    }

    if (paidAmount < price) {
      setMessage(`Amount is insufficient. Please pay at least $${price}.`);
    } else {
      const change = paidAmount - price;

      const receiptDetails = {
        place,
        price: price.toFixed(2),
        paid: paidAmount.toFixed(2),
        change: change > 0 ? change.toFixed(2) : "0.00",
        date: new Date().toLocaleString(),
      };

      setReceipt(receiptDetails);
      setMessage("");
    }
  };

  const handleDone = () => {
    onPaymentSuccess(bookingIndex); // ✅ Inform parent to remove item
  };

  return (
    <div className={paymentCSS.paymentWrapper}>
      <div className={paymentCSS.paymentContent}>
        <h3>Payment for {place}</h3>
        <p>Price: ${price.toFixed(2)}</p>

        <img src={image} alt={place} />

        {!receipt && (
          <>
            <input
              type="number"
              step="0.01"
              value={amountPaid}
              onChange={(e) => setAmountPaid(e.target.value)}
              placeholder="Enter amount to pay"
            />
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
              <button onClick={handlePayment}>Pay</button>
              <button onClick={onClose}>Cancel</button>
            </div>
            {message && <div className={paymentCSS.message}>{message}</div>}
          </>
        )}

        {receipt && (
          <div className={paymentCSS.receipt}>
            <h4>Payment Receipt</h4>
            <p><strong>Place:</strong> {receipt.place}</p>
            <p><strong>Price:</strong> ${receipt.price}</p>
            <p><strong>Amount Paid:</strong> ${receipt.paid}</p>
            <p><strong>Change:</strong> ${receipt.change}</p>
            <p><strong>Date:</strong> {receipt.date}</p>
            <button onClick={handleDone}>Done</button>
          </div>
        )}
      </div>
    </div>
  );
}

PaymentPage.propTypes = {
  place: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  bookingIndex: PropTypes.number.isRequired,
  onPaymentSuccess: PropTypes.func.isRequired, // added new required prop
};

export default PaymentPage;
