import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--color-secondary)]/80 bg-[color:var(--color-secondary)]/90 text-[color:var(--color-accent)] shadow-md border-b border-[color:var(--color-secondary-light)]">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-xl font-semibold text-[color:var(--color-primary)] hover:text-[color:var(--color-primary-light)] transition-colors"
        >
          Helal Aljaberi
        </NavLink>
        <nav className="flex items-center gap-2">
          <NavItem to="/">Home</NavItem>

          <NavItem to="/programs">Programs</NavItem>
          <NavItem to="/pricing">Pricing</NavItem>
          <CTAItem to="/contact">Contact</CTAItem>
        </nav>
      </div>
    </header>
  );
}

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "px-3 py-2 rounded-md text-sm font-medium tracking-wide transition-colors",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--color-primary)] focus-visible:ring-offset-[color:var(--color-secondary)]",
          "hover:bg-[color:var(--color-secondary-light)] hover:text-[color:var(--color-primary-light)]",
          isActive
            ? "text-[color:var(--color-primary)]"
            : "text-[color:var(--color-accent)]",
        ].join(" ")
      }
      end={to === "/"}
    >
      {children}
    </NavLink>
  );
}

function CTAItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "relative inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-semibold tracking-wide",
          "transition-all duration-300",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--color-primary)] focus-visible:ring-offset-[color:var(--color-secondary)]",
          "bg-[color:var(--color-primary)] text-[color:var(--color-accent)]",
          "hover:bg-[color:var(--color-primary-dark)]",
          "after:absolute after:inset-0 after:rounded-xl after:opacity-0 after:transition-opacity after:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.25),rgba(255,255,255,0))] hover:after:opacity-100",
          isActive ? "ring-1 ring-[color:var(--color-primary-light)]" : "",
        ].join(" ")
      }
    >
      {children}
      <span className="ml-2 inline-block h-2 w-2 rounded-full bg-[color:var(--color-accent)] animate-pulse"></span>
    </NavLink>
  );
}
