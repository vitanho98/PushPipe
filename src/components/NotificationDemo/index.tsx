"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GitBranch, GitPullRequest, GitMerge, RefreshCw } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "branch",
    icon: <GitBranch className="h-5 w-5" />,
    title: "New Branch Created",
    content: "@johndoe created a new branch feature/user-auth",
    time: "2 minutes ago",
  },
  {
    id: 2,
    type: "pr",
    icon: <GitPullRequest className="h-5 w-5" />,
    title: "Pull Request Opened",
    content:
      "@sarahjones opened PR #42: Add login page and requested review from @johndoe",
    time: "5 minutes ago",
  },
  {
    id: 3,
    type: "merge",
    icon: <GitMerge className="h-5 w-5" />,
    title: "Branch Merged",
    content: "@mikebrown merged PR #41: Fix navigation bug into main",
    time: "10 minutes ago",
  },
];

export default function NotificationDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % notifications.length);
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [isPlaying]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "branch":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      case "pr":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      case "merge":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400";
    }
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex justify-center mb-8">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center gap-2"
        >
          {isPlaying ? "Pause Demo" : "Play Demo"}
          <RefreshCw className={`h-4 w-4 ${isPlaying ? "animate-spin" : ""}`} />
        </Button>
      </div>

      <div className="relative h-[300px] w-full rounded-xl border bg-slate-50 p-6 shadow-md dark:bg-slate-900">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center dark:bg-indigo-900/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-indigo-600"
            >
              <path d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"></path>
              <path d="m9 15 3-3 3 3"></path>
              <path d="M10 10h4"></path>
            </svg>
          </div>
          <div>
            <div className="font-medium">Discord</div>
            <div className="text-xs text-muted-foreground">
              #github-updates channel
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-3"
            >
              <div className="relative h-8 w-8 rounded-full overflow-hidden">
                <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xs">
                  PP
                </div>
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <div className="flex items-center">
                  <span className="font-semibold text-blue-700 dark:text-blue-400">
                    PushPipe Bot
                  </span>
                  <span className="ml-2 text-xs text-slate-500">
                    Today at 10:30 AM
                  </span>
                </div>
                <Card className="border-0 shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`rounded-full p-1 ${getTypeColor(
                          notifications[activeIndex].type
                        )}`}
                      >
                        {notifications[activeIndex].icon}
                      </div>
                      <h4 className="font-semibold">
                        {notifications[activeIndex].title}
                      </h4>
                    </div>
                    <p className="mt-2 text-sm">
                      {notifications[activeIndex].content}
                    </p>
                    <div className="mt-2 text-xs text-muted-foreground">
                      {notifications[activeIndex].time}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-6 left-0 right-0 flex justify-center">
          <div className="flex gap-2">
            {notifications.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === activeIndex
                    ? "bg-blue-500"
                    : "bg-slate-300 dark:bg-slate-700"
                }`}
                onClick={() => {
                  setActiveIndex(index);
                  setIsPlaying(false);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
