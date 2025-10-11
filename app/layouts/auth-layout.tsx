import { Outlet, Link } from "react-router";
import Navigation from "~/components/navigation";

export default function AuthLayout() {
  return (
    <div className="min-h-screen">
      {/* Header with navigation */}
      <header className="bg-white border-b border-gray-50">
        <Navigation hideAuthButtons={true} showHomeButton={true} />
      </header>

      {/* Main auth content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
