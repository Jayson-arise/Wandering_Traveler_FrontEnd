import './App.css';
import About from './Components/About/About';
import Destination from './Components/Destinations/Destination';
import CallToAction from './Components/Footer/CallToAction';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Memories from './Components/Memories/Memories';
import Nav from './Components/Nav';
import Search from './Components/Searches/Search';
import Testimonial from './Components/Testimonial/Testimonial';
import Trips from './Components/Trips/Trips';
import Cart from './Components/Cart';
import { useState } from 'react';

function App() {
  const [isLoggedIn] = useState(false); // State for user login
  const [showLoginModal, setShowLoginModal] = useState(false); // State for login modal
  // Determine the current path
  const currentPath = window.location.pathname;

  return (
    <>
      {currentPath === "/cart" ? (
        <Cart />
      ) : (
        <>
          <div className="main">
            <Nav />
            <Header />
            <Memories />
          </div>
          {/* Pass props to the Trips component */}
          <Trips 
            isLoggedIn={isLoggedIn} 
            setShowLoginModal={setShowLoginModal} 
          />
          <Search />
          <div className="main">
            <About />
          </div>
          <Testimonial />
          <Destination />
          <div className="main">
            <CallToAction />
          </div>
          <Footer />

          {/* Conditionally render the Login Modal */}
          {showLoginModal && (
            <div className="modal-overlay">
              <div className="modal-container">
                <h2>Login Required</h2>
                <p>Please log in to continue booking your trip.</p><br/>
                <div className="modal-actions">
                  <button
                    className="modal-login-btn"
                    onClick={() => {
                      setShowLoginModal(false);
                      window.location.href = "/login";
                    }}
                  >
                    Go to Login
                  </button>
                  <button
                    className="modal-close-btn"
                    onClick={() => setShowLoginModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

        </>
      )}
    </>
  );
}

export default App;
