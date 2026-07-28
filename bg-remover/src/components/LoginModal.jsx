function LoginModal({ show, close }) {

  if (!show) return null;

  return (
    <div className="modal-overlay">

      <div className="modal">

        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
        />

        <input
          type="password"
          placeholder="Enter Password"
        />

        <button className="login-btn">
          Login
        </button>

        <button
          className="close-btn"
          onClick={close}
        >
          Close
        </button>

      </div>

    </div>
  );
}

export default LoginModal;