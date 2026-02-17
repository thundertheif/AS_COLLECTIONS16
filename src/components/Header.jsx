import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1>SAREE STYLE</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/sarees">Sarees</Link>
        <Link to="/tops">Tops</Link>
        <Link to="/kurtis">Kurtis</Link>
        <Link to="/materials">Materials</Link>
      </nav>
    </header>
  );
}