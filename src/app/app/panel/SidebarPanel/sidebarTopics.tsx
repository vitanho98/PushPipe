import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { LucideGitBranchPlus, Users } from "lucide-react";

export function SidebarTopics() {
  interface Topic {
    icon: React.ReactNode;
    name: string;
  }

  interface Section {
    title: string;
    icon: React.ReactNode;
  }

  const sections: Section[] = [
    {
      title: "Times",
      icon: <Users className="h-4 w-4 text-foreground" />,
    },
  ];

  const topics: Topic[] = [
    {
      icon: <Users className="h-4 w-4 text-foreground" />,
      name: "Criar time",
    },
    {
      icon: <LucideGitBranchPlus className="h-4 w-4 text-foreground" />,
      name: "Criar fluxo",
    },
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="times" className="border-0">
        <AccordionTrigger className="py-2 px-3 hover:no-underline hover:bg-muted rounded-md group cursor-pointer">
          <div className="flex items-center gap-3">
            {sections.map((section) => {
              return (
                <div className="flex items-center gap-3" key={section.title}>
                  {section.icon}
                  <span className="text-foreground text-base">
                    {section.title}
                  </span>
                </div>
              );
            })}
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col relative items-start justify-start pl-8 mt-1">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border"></div>
            {topics.map((topic) => {
              return (
                <Button
                  variant="ghost"
                  className="flex w-full justify-start"
                  key={topic.name}
                >
                  {topic.icon}
                  {topic.name}
                </Button>
              );
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
