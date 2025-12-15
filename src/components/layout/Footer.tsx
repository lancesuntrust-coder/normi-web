import "@/styles/layout/footer.css";

export function Footer() {
  return (
    <footer className="section-footer footer">
      <div className="footer-inner footer-muted">
        <p>© {new Date().getFullYear()} Normi. All rights reserved.</p>
        <div className="footer-links">
          <a href="#" className="footer-link footer-muted">Terms</a>
          <a href="#" className="footer-link footer-muted">Privacy</a>
          <a href="#" className="footer-link footer-muted">Contact</a>
        </div>
      </div>
    </footer>
  );
}
