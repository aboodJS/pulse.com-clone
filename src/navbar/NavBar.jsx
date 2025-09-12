import styles from "./navbar.module.css";

function NavBar() {
  return (
    <nav id="nav-bar">
      <img src="https://pulseapp.com/img/pulse-logo.svg" alt="" />
      <ul>
        <li>Features</li>
        <li>Customer Stories</li>
        <li>Pricing</li>
        <li>Blog</li>
        <li>Sign Up</li>
      </ul>
      <img id="menu-svg" src="src/assets/menu.svg" alt="" />
    </nav>
  );
}

export default NavBar;
