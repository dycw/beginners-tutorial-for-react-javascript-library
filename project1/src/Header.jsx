export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img
          src="./react-logo.png"
          alt="React logo"
          className="nav-logo"
          width={200}
          height={60}
        />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
