import { useState } from "react";
import LoginModal from "./LoginModal";

function Navbar() {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav className="navbar">

        <h2>BG Remover</h2>

        <ul className="nav-links">
          <li>Home</li>
          <li>Pricing</li>
          <li>About</li>
        </ul>

        <button
          onClick={() => setShowLogin(true)}
        >
          Login
        </button>

      </nav>

      <LoginModal
        show={showLogin}
        close={() => setShowLogin(false)}
      />
    </>
  );
}

export default Navbar;