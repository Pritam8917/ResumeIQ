import Sidebar from "@/components/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>

      <Sidebar />

      <main className="md:ml-65 p-8 bg-slate-50 min-h-screen">
        {children}
      </main>

    </div>
  );
}