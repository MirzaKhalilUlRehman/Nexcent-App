function Header() {
  return (
    <header className="header container">
      <a className="logo" href="#">
        <img src="/assets/logo.png" alt="Logo" />
        Nexcent
      </a>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Features</a>
        <a href="#">Product</a>
        <a href="#">Testimonials</a>
      </div>
      <div className="btns">
        <button className="signup-btn btn">Sign Up</button>
        <button className="login-btn btn">Log In</button>
      </div>
    </header>
  );
}
export default Header;
