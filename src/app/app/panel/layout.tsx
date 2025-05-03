import { SidebarProvider } from "@/components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen">
      <SidebarProvider
        sidebarId="customer-information"
        position="left"
        defaultIsCollapsed={false}
      >
        <div className="flex-1 text-white">{children}</div>
      </SidebarProvider>
    </div>
  );
}
