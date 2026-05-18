import Sidebar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#020617] via-[#0f172a] to-[#111827] text-white">
      
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="md:ml-69 min-h-screen p-6 md:pl-9">
        
        <div className=" border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/20 p-6 min-h-[calc(100vh-48px)]">
          {children}
        </div>

      </main>
    </div>
  );
}