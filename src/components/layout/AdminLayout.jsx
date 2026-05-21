import { LogOut, Users, LayoutDashboard, Home } from "lucide-react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const adminNav = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/membros", label: "Membros", icon: Users },
];

export function AdminLayout() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <div>
            <p className="text-sm text-slate-500">Area administrativa</p>
            <h1 className="text-lg font-bold text-slate-950">Bem-vindo, {user?.name}</h1>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/" className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
              <Home size={18} /> Site
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800"
            >
              <LogOut size={18} /> Sair
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 lg:grid-cols-[220px_1fr]">
        <aside className="rounded-lg border border-slate-200 bg-white p-3">
          <nav className="grid gap-2" aria-label="Navegacao administrativa">
            {adminNav.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/admin"}
                  className={({ isActive }) =>
                    `inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${
                      isActive ? "bg-blue-700 text-white" : "text-slate-700 hover:bg-blue-50"
                    }`
                  }
                >
                  <Icon size={18} /> {item.label}
                </NavLink>
              );
            })}
          </nav>
        </aside>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
