import { useState, useRef, useEffect } from "react";
import navCSS from "./Nav.module.css";
import { BACKEND_URL } from "../config/constants";

function Nav() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const menu = useRef();

  // Check if user is logged in on component mount
  useEffect(() => {
    const storedLoggedIn =
      localStorage.getItem("isLoggedIn") === "true" ||
      sessionStorage.getItem("isLoggedIn") === "true";
    const storedUser = localStorage.getItem("user");

    if (storedLoggedIn && storedUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const MenuHandler = () => {
    setMenuOpen(!menuOpen);
  };

  const closeModals = () => {
    setShowLoginModal(false);
    setShowSignupModal(false);
  };

  const handleSignup = async (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  const password_confirmation = event.target.password_confirmation.value;
  const first_name = event.target.first_name.value;
  const last_name = event.target.last_name.value;
  const gender = event.target.gender.value;

  try {
    const response = await fetch(`${BACKEND_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        password_confirmation,
        first_name,
        last_name,
        gender,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessages = data.errors
        ? Object.values(data.errors).flat().join("\n")
        : data.message || "Signup failed";
      alert(errorMessages);
      return;
    }

    alert("Signup successful! Please login.");
    setShowSignupModal(false);
  } catch (error) {
    alert("Error connecting to server");
  }
};


  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const response = await fetch(`${BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",

        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("token", data.token); // Store JWT token if provided
        localStorage.setItem("user", JSON.stringify(data.user)); // Store user object
        setIsLoggedIn(true);
        setShowLoginModal(false);
      } else {
        alert(data.message || "Invalid credentials");
      }
          // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("Error connecting to server");
    }
  };

  const handleLogout = async () => {
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    try {
      const response = await fetch(`${BACKEND_URL}/api/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ bookings, user_id: JSON.parse(localStorage.getItem("user")).id }),
      });
      console.log(JSON.stringify({ bookings, user_id: JSON.parse(localStorage.getItem("user")).id }));

      console.log(await response.json().message)
          // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("Error saving bookings to server");
    }

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("bookings");
    sessionStorage.removeItem("isLoggedIn"); // Optional: Clear session storage
    setIsLoggedIn(false);
    alert("You have been logged out.");
  };

  return (
    <div className={navCSS.Nav_wrapper}>
      <div className={navCSS.logo}>
        <a href="#">
          Traveler <span>.</span>
        </a>
      </div>

      <ul ref={menu} className={menuOpen ? navCSS.activeMenu : ""}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#trips">Trips</a>
        </li>
        <li>
          <a href="#searches">Searches</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#populardestinations">Popular Destinations</a>
        </li>
        <li>
          <a href="/cart">Booked</a>
        </li>
        <div className={navCSS.authButtonsSmall}>
          {isLoggedIn ? (
            <button onClick={handleLogout}>Log Out</button>
          ) : (
            <>
              <button onClick={() => setShowLoginModal(true)}>Log In</button>
              <button onClick={() => setShowSignupModal(true)}>Sign Up</button>
            </>
          )}
        </div>
      </ul>

      <div className={navCSS.nav_btns}>
        <div className={navCSS.search_wrapper}>
          <i className="ri-search-line"></i>
          <input type="text" placeholder="Search Places" />
        </div>
        <div className={navCSS.CallBtn}>
          <i className="ri-phone-line"></i>
          <p>
            +63 9615941459 <small>Call Your Travel Agent</small>
          </p>
        </div>
        <div className={navCSS.authButtonsLarge}>
          {isLoggedIn ? (
            <button onClick={handleLogout}>Log Out</button>
          ) : (
            <>
              <button onClick={() => setShowLoginModal(true)} >Log In</button>
              <button onClick={() => setShowSignupModal(true)}>Sign Up</button>
            </>
          )}
        </div>
        <i
          className="ri-menu-2-line"
          onClick={MenuHandler}
          id={navCSS.bars}
        ></i>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className={navCSS.modalOverlay} onClick={closeModals}>
          <div
            className={navCSS.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Log In</h2>
            <form onSubmit={handleLogin}>
              <input type="email" name="email" placeholder="Email" required />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <button type="submit" className="bts">Log In</button>
            </form>
            <button className={navCSS.closeBtn} onClick={closeModals}>
              &times;
            </button>

          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignupModal && (
        <div className={navCSS.modalOverlay} onClick={closeModals}>
          <div
            className={navCSS.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
              <input type="text" name="first_name" placeholder="First Name" required />
              <input type="text" name="last_name" placeholder="Last Name" required />
              <select name="gender">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <input type="email" name="email" placeholder="Email" required />
              <input type="password" name="password" placeholder="Password" required />
              <input type="password" name="password_confirmation" placeholder="Confirm Password" required></input>
              <button type="submit" className="bts">Sign Up</button>
            
            </form>
            <button className={navCSS.closeBtn} onClick={closeModals}>
              &times;
            </button>

          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
