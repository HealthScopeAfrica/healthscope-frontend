import { Outlet } from "react-router";
import Navigation from "~/components/navigation";
import Footer from "~/components/footer";

export default function PublicLayout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}