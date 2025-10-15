import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[color:var(--color-secondary)] text-[color:var(--color-accent)] shadow-md">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-xl font-semibold text-[color:var(--color-primary)]"
        >
          Helal Aljaberi
        </NavLink>
        <nav className="flex gap-6">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
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
          "transition-colors",
          "hover:text-[color:var(--color-primary-light)]",
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
