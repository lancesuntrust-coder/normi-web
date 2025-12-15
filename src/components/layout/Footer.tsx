import "@/styles/layout/footer.css";

export function Footer() {
  return (
    <footer className="section-footer footer">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm footer-muted">
        <p>© {new Date().getFullYear()} Normi. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline footer-muted">Terms</a>
          <a href="#" className="hover:underline footer-muted">Privacy</a>
          <a href="#" className="hover:underline footer-muted">Contact</a>
        </div>
      </div>
    </footer>
  );
}
