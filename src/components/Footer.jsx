import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h4>Customer Care</h4>
          <p>Help Center</p>
          <p>Shipping & Returns</p>
          <p>Track Order</p>
          <p>Contact Us</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <p>About Us</p>
          <p>Blog</p>
          <p>Size Guide</p>
          <p>Gift Cards</p>
        </div>

        <div>
          <h4>Follow Us</h4>
          <p>Facebook Instagram YouTube</p>
        </div>
      </div>

      <p className="copyright">© 2026 Saree Style</p>
    </footer>
  );
}

export default Footer;
