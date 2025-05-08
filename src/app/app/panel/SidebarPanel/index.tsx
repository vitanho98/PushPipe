"use client";

import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarSection,
  useSidebar,
} from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SidebarTopics } from "./sidebarTopics";

export function SidebarPanel() {
  const { isCollapsed } = useSidebar();

  return (
    <Sidebar position="left" expandedWidth="300px" collapsedWidth="70px">
      <div className="w-full h-full flex flex-col gap-2 transition-opacity duration-300 ease-in-out">
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <Image
              src="/logo/pushpipe.jpeg"
              alt="PushPipe"
              width={30}
              height={30}
              className="rounded-full"
            />
            {!isCollapsed && (
              <h1 className="text-lg font-medium text-foreground">PushPipe</h1>
            )}
          </div>
        </SidebarHeader>

        <Separator className="bg-border" />

        <div className="flex flex-col justify-between h-full">
          <SidebarSection>
            <div className="w-full h-full flex flex-col">
              {!isCollapsed ? (
                <SidebarTopics />
              ) : (
                <div className="flex flex-col items-center">
                  <div className="w-full">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-10 h-10 rounded-md hover:bg-muted mx-auto"
                    >
                      <Users className="h-5 w-5 text-foreground" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </SidebarSection>

          {!isCollapsed && <div className="flex-grow"></div>}

          <SidebarFooter className="flex items-center justify-end">
            <ThemeToggle />
          </SidebarFooter>
        </div>
      </div>
    </Sidebar>
  );
}
