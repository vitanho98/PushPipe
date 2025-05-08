import { SidebarProvider } from "@/components/Sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen bg-background">
      <ThemeProvider>
        <SidebarProvider
          sidebarId="customer-information"
          position="left"
          defaultIsCollapsed={false}
        >
          <div className="flex-1 text-foreground">{children}</div>
        </SidebarProvider>
      </ThemeProvider>
    </div>
  );
}
