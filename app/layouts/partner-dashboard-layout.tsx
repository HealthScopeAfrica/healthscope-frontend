import { Outlet } from "react-router";

export default function PartnerDashboardLayout() {
  return (
    <>
      {/* Partner Dashboard Navigation */}
      <nav className="bg-white border-b">
        <div className="container flex items-center justify-between py-4">
          <img src="/images/logo.png" alt="HealthScope" className="h-10" />
          <div className="flex items-center gap-6">
            <a href="/partner" className="hover:text-gray-600">Dashboard</a>
            <a href="/partner/content" className="hover:text-gray-600">Content</a>
            <a href="/partner/profile" className="hover:text-gray-600">Profile</a>
            <button className="text-red-600 hover:text-red-800">Logout</button>
          </div>
        </div>
      </nav>
      
      <main>
        <Outlet />
      </main>
    </>
  );
}