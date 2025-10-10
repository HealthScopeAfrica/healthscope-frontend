import { Outlet } from "react-router";
import Navigation from "~/components/navigation";
import Footer from "~/components/footer";
import { PublicAuthProvider } from "~/marketing/components/auth/public-auth-provider";

export default function PublicLayout() {
  return (
    <PublicAuthProvider>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </PublicAuthProvider>
  );
}