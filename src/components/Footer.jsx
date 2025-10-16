export default function Footer() {
  return (
    <footer className="bg-[color:var(--color-secondary-light)] text-[color:var(--color-accent)] ">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[color:var(--color-text-light)]">
          © {new Date().getFullYear()} Helal Aljaberi. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm">
          <a
            href="#"
            className="hover:text-[color:var(--color-primary-light)] transition-colors"
          >
            Privacy
          </a>
          <a
            href="#"
            className="hover:text-[color:var(--color-primary-light)] transition-colors"
          >
            Terms
          </a>
          <a
            href="#"
            className="hover:text-[color:var(--color-primary-light)] transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
