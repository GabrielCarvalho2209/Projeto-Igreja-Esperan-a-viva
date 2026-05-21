import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminLayout } from "../components/layout/AdminLayout";
import { Layout } from "../components/layout/Layout";
import { ProtectedRoute } from "./ProtectedRoute";
import { Dashboard } from "../pages/admin/Dashboard";
import { Login } from "../pages/admin/Login";
import { MemberForm } from "../pages/admin/MemberForm";
import { MembersList } from "../pages/admin/MembersList";
import { About } from "../pages/public/About";
import { Contact } from "../pages/public/Contact";
import { Donations } from "../pages/public/Donations";
import { EventDetails } from "../pages/public/EventDetails";
import { EventRegistration } from "../pages/public/EventRegistration";
import { Events } from "../pages/public/Events";
import { Home } from "../pages/public/Home";
import { Location } from "../pages/public/Location";
import { NotFound } from "../pages/public/NotFound";
import { Participants } from "../pages/public/Participants";
import { Schedules } from "../pages/public/Schedules";
import { SocialProjects } from "../pages/public/SocialProjects";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<About />} />
          <Route path="/horarios" element={<Schedules />} />
          <Route path="/localizacao" element={<Location />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/eventos/:id" element={<EventDetails />} />
          <Route path="/eventos/:id/inscricao" element={<EventRegistration />} />
          <Route path="/eventos/:id/participantes" element={<Participants />} />
          <Route path="/projetos-sociais" element={<SocialProjects />} />
          <Route path="/doacoes" element={<Donations />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/membros" element={<MembersList />} />
            <Route path="/admin/membros/novo" element={<MemberForm />} />
            <Route path="/admin/membros/:id/editar" element={<MemberForm />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
