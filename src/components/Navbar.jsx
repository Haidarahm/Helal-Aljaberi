import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[color:var(--color-secondary)] text-[color:var(--color-accent)] shadow-md border-b border-[color:var(--color-secondary-light)]">
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
          <NavItem to="/contact">Contact</NavItem>
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
