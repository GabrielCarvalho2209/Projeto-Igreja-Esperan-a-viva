import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { churchInfo } from "../../data/mockData";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/historia", label: "Historia" },
  { to: "/horarios", label: "Horarios" },
  { to: "/eventos", label: "Eventos" },
  { to: "/projetos-sociais", label: "Projetos" },
  { to: "/doacoes", label: "Doacoes" },
  { to: "/contato", label: "Contato" },
];

function navClass({ isActive }) {
  return `rounded-md px-3 py-2 text-sm font-medium transition ${
    isActive
      ? "bg-blue-700 text-white"
      : "text-slate-700 hover:bg-blue-50 hover:text-blue-800"
  }`;
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-blue-700 font-bold text-white">
            IE
          </span>
          <span>
            <span className="block text-base font-bold text-slate-950">{churchInfo.name}</span>
            <span className="block text-xs text-slate-500">Sistema comunitario</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegacao principal">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navClass}>
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/admin/login" className={navClass}>
            Admin
          </NavLink>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden" aria-label="Menu mobile">
          <div className="mx-auto grid max-w-6xl gap-2">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navClass} onClick={() => setIsOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/admin/login" className={navClass} onClick={() => setIsOpen(false)}>
              Admin
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
}
