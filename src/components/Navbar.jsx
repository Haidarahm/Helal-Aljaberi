import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const { currentLanguage, toggleLanguage, isRTL } = useLanguage();
  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--color-secondary)]/80 bg-[color:var(--color-secondary)]/90 text-[color:var(--color-accent)] shadow-md border-b border-[color:var(--color-secondary-light)]">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-xl font-semibold text-[color:var(--color-primary)] hover:text-[color:var(--color-primary-light)] transition-colors"
        >
          Helal Aljaberi
        </NavLink>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          <NavItem to="/">{t("nav.home")}</NavItem>
          <NavItem to="/programs">{t("nav.programs")}</NavItem>
          <NavItem to="/pricing">{t("nav.pricing")}</NavItem>
          <CTAItem to="/contact">{t("nav.contact")}</CTAItem>
        </nav>

        {/* Language Toggle Button */}
        <button
          onClick={toggleLanguage}
          className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[color:var(--color-secondary-light)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] transition-colors"
          title={t("language.toggle")}
          aria-label={t("language.toggle")}
        >
          <Languages size={18} />
          <span className="text-sm font-medium">{t("language.switch_to")}</span>
        </button>
        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg hover:bg-[color:var(--color-secondary-light)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)]"
          onClick={toggle}
          aria-label="Toggle Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {/* Mobile menu panel */}
      <div
        className={[
          "md:hidden transition-all duration-300 overflow-hidden border-t border-[color:var(--color-secondary-light)]",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="px-4 py-3 flex flex-col gap-1 bg-[color:var(--color-secondary)]/95">
          <MobileNavItem to="/" onClick={close}>
            {t("nav.home")}
          </MobileNavItem>
          <MobileNavItem to="/programs" onClick={close}>
            {t("nav.programs")}
          </MobileNavItem>
          <MobileNavItem to="/pricing" onClick={close}>
            {t("nav.pricing")}
          </MobileNavItem>
          <MobileCTA to="/contact" onClick={close}>
            {t("nav.contact")}
          </MobileCTA>

          {/* Mobile Language Toggle */}
          <button
            onClick={() => {
              toggleLanguage();
              close();
            }}
            className="mt-2 px-3 py-2 rounded-lg hover:bg-[color:var(--color-secondary-light)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] transition-colors flex items-center gap-2"
            aria-label={t("language.toggle")}
          >
            <Languages size={18} />
            <span className="text-base font-medium">
              {t("language.switch_to")}
            </span>
          </button>
        </div>
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

function MobileNavItem({ to, onClick, children }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "px-3 py-2 rounded-md text-base font-medium tracking-wide transition-colors",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)]",
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

function MobileCTA({ to, onClick, children }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className="mt-1 inline-flex items-center justify-center px-4 py-2 rounded-xl text-base font-semibold bg-[color:var(--color-primary)] text-[color:var(--color-accent)] hover:bg-[color:var(--color-primary-dark)] transition-colors"
    >
      {children}
    </NavLink>
  );
}
