"use client";

import {
  Sidebar,
  SidebarHeader,
  SidebarSection,
  useSidebar,
} from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Eye, Edit, Users } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export function SidebarPanel() {
  const { isCollapsed } = useSidebar();

  return (
    <Sidebar
      position="left"
      expandedWidth="300px"
      collapsedWidth="70px"
      className="bg-black"
    >
      <div className="w-full flex flex-col gap-2 transition-opacity duration-300 ease-in-out">
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
              <h1 className="text-lg font-medium text-gray-300">PushPipe</h1>
            )}
          </div>
        </SidebarHeader>

        <Separator />

        <SidebarSection>
          <div className="flex flex-col w-full">
            {!isCollapsed ? (
              <>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="times" className="border-0">
                    <AccordionTrigger className="py-2 px-3 hover:no-underline hover:bg-[#222222] rounded-md group">
                      <div className="flex items-center gap-3">
                        <Users className="h-4 w-4 text-gray-300" />
                        <span className="text-gray-200 text-base">Teams</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col relative pl-8 mt-1">
                        <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-700"></div>
                        <Button
                          variant="ghost"
                          className="justify-start h-9 px-3 text-gray-300 hover:text-white hover:bg-[#222222]"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Criar time
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start h-9 px-3 text-gray-300 hover:text-white hover:bg-[#222222]"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          Visualizar times
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start h-9 px-3 text-gray-300 hover:text-white hover:bg-[#222222]"
                        >
                          <Edit className="h-4 w-4 mr-2" />
                          Editar times
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </>
            ) : (
              <div className="flex flex-col items-center">
                <div className="w-full border-gray-800">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 rounded-md hover:bg-[#222222] mx-auto"
                  >
                    <Users className="h-5 w-5 text-gray-300" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </SidebarSection>
      </div>
    </Sidebar>
  );
}
