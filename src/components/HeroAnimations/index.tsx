"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function HeroAnimation() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      ref={ref}
      className="relative mx-auto max-w-5xl overflow-hidden rounded-xl border bg-slate-50 shadow-xl dark:bg-slate-900"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col justify-center gap-4"
        >
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
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
                className="text-blue-600"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </div>
            <div className="font-medium">GitHub</div>
          </div>
          <div className="rounded-lg border bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm">
              <span className="font-semibold">@johndoe</span> created a new
              branch{" "}
              <span className="font-semibold text-blue-600">
                feature/user-auth
              </span>
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm">
              <span className="font-semibold">@sarahjones</span> opened a pull
              request{" "}
              <span className="font-semibold text-blue-600">
                #42: Add login page
              </span>
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm">
              <span className="font-semibold">@mikebrown</span> requested review
              from <span className="font-semibold text-blue-600">@johndoe</span>{" "}
              on PR <span className="font-semibold">#43</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col justify-center gap-4"
        >
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
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
            <div className="font-medium">Discord</div>
          </div>
          <motion.div
            variants={itemVariants}
            className="rounded-lg border bg-indigo-50 p-4 shadow-sm dark:bg-indigo-900/30"
          >
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xs">
                PP
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center">
                  <span className="font-semibold text-blue-700 dark:text-blue-400">
                    PushPipe Bot
                  </span>
                  <span className="ml-2 text-xs text-slate-500">
                    Today at 10:30 AM
                  </span>
                </div>
                <div className="rounded-md bg-white p-3 shadow-sm dark:bg-slate-800">
                  <p className="text-sm font-medium">🌿 New Branch</p>
                  <p className="text-sm mt-1">
                    <span className="font-semibold">@johndoe</span> created a
                    new branch{" "}
                    <span className="font-semibold text-blue-600">
                      feature/user-auth
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="rounded-lg border bg-indigo-50 p-4 shadow-sm dark:bg-indigo-900/30"
          >
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xs">
                PP
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center">
                  <span className="font-semibold text-blue-700 dark:text-blue-400">
                    PushPipe Bot
                  </span>
                  <span className="ml-2 text-xs text-slate-500">
                    Today at 11:15 AM
                  </span>
                </div>
                <div className="rounded-md bg-white p-3 shadow-sm dark:bg-slate-800">
                  <p className="text-sm font-medium">🔄 Pull Request</p>
                  <p className="text-sm mt-1">
                    <span className="font-semibold">@sarahjones</span> opened PR{" "}
                    <span className="font-semibold text-blue-600">
                      #42: Add login page
                    </span>
                  </p>
                  <p className="text-sm mt-1">
                    Reviewers: <span className="font-semibold">@johndoe</span>,{" "}
                    <span className="font-semibold">@mikebrown</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
