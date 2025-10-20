export default function Footer() {
  return (
    <footer className="bg-[color:var(--color-secondary-light)] text-[color:var(--color-accent)] ">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[color:var(--color-text-light)]">
          © {new Date().getFullYear()} Helal Aljaberi. All rights reserved.
        </p>
        <div className="text-sm text-[color:var(--color-text-light)]">
          Sponsored By{" "}
          <a
            href="https://tikit.ae"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[color:var(--color-primary-light)] transition-colors font-semibold"
          >
            Tikit Agency
          </a>
        </div>
      </div>
    </footer>
  );
}
