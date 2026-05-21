import { Lock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "../../components/common/ErrorMessage";
import { useAuth } from "../../contexts/AuthContext";

export function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({ email: "admin@igreja.com", password: "123456" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setCredentials((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!credentials.email || !credentials.password) {
      setError("Informe e-mail e senha.");
      return;
    }

    try {
      setIsSubmitting(true);
      await login(credentials);
      navigate("/admin");
    } catch {
      setError("Nao foi possivel entrar. Verifique os dados.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="mx-auto flex min-h-[calc(100vh-160px)] max-w-6xl items-center px-4 py-10">
      <div className="mx-auto w-full max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <Lock className="text-blue-700" size={30} />
        <h1 className="mt-4 text-2xl font-bold text-slate-950">Area administrativa</h1>
        <p className="mt-2 text-sm text-slate-600">Use o login demonstrativo para acessar o dashboard.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">E-mail</span>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={updateField}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Senha</span>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={updateField}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
            />
          </label>
          {error && <ErrorMessage message={error} />}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md bg-blue-700 px-4 py-2 font-medium text-white hover:bg-blue-800 disabled:bg-slate-400"
          >
            {isSubmitting ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </section>
  );
}
