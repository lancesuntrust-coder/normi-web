export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 sm:px-10 py-16">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm" style={{ color: "var(--muted)" }}>
        <p>© {new Date().getFullYear()} Normi. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline" style={{ color: "var(--muted)" }}>Terms</a>
          <a href="#" className="hover:underline" style={{ color: "var(--muted)" }}>Privacy</a>
          <a href="#" className="hover:underline" style={{ color: "var(--muted)" }}>Contact</a>
        </div>
      </div>
    </footer>
  );
}
