"use client";

import { Button } from "@/components/ui/button";
import { SidebarPanel } from "./SidebarPanel";
import { useSidebar } from "@/components/Sidebar";

export default function PanelPage() {
  const { toggle, getToggleSidebarIcon } = useSidebar();

  return (
    <div className="flex h-screen w-screen">
      <SidebarPanel />
      <div className="relative bg-gray-400 text-white">
        {toggle && (
          <Button
            variant="outline"
            onClick={toggle}
            className={`absolute right-[-40px] top-2 flex items-center gap-2 z-10 h-8 w-8 p-0`}
          >
            {getToggleSidebarIcon(16)}
          </Button>
        )}
      </div>
    </div>
  );
}
