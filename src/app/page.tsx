import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GitBranch, GitPullRequest, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroAnimation from "@/components/HeroAnimations";
import FeatureCard from "@/components/FeatureCard";
import NotificationDemo from "@/components/NotificationDemo";
import Navbar from "@/components/Navbar";

export default function LandingPage() {
  return (
    <div className="w-full flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="flex flex-col gap-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="w-full flex flex-col items-center gap-4 text-center">
            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-800 dark:bg-emerald-800/30 dark:text-emerald-400">
              Introducing PipePush
            </div>
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
              Connect GitHub Actions <br className="hidden sm:inline" />
              to Discord Seamlessly
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Keep your dev team in the loop with real-time notifications about
              branches, pull requests, and more—directly in your Discord
              channels.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-blue-500 hover:bg-blue-700"
              >
                <Link href="#get-started">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-8 md:py-12 lg:py-24">
          <HeroAnimation />
        </section>

        <section
          id="features"
          className="w-full flex flex-col gap-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
        >
          <div className="w-full mx-auto flex max-w-[58rem] flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              Features
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Everything you need to keep your team informed about GitHub
              activities
            </p>
          </div>
          <div className="w-full mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <FeatureCard
              icon={<GitBranch className="h-10 w-10 text-blue-600" />}
              title="Branch Notifications"
              description="Get notified when someone creates a new branch, with details about who created it and when."
            />
            <FeatureCard
              icon={<GitPullRequest className="h-10 w-10 text-blue-600" />}
              title="Pull Request Alerts"
              description="Receive alerts for new pull requests, including who created them and who's been tagged for review."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-blue-600" />}
              title="Team Mentions"
              description="Automatically mention team members in Discord based on GitHub actions and assignments."
            />
            <FeatureCard
              icon={
                <Image
                  src="/logo/PipePush.jpeg"
                  alt="PipePush Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              }
              title="Customizable Notifications"
              description="Choose which events trigger notifications and how they appear in your Discord channels."
            />
            <FeatureCard
              icon={<GitBranch className="h-10 w-10 text-blue-600" />}
              title="GitHub Integration"
              description="Seamless integration with GitHub Actions without complex configuration."
            />
            <FeatureCard
              icon={<ArrowRight className="h-10 w-10 text-blue-600" />}
              title="One-Click Setup"
              description="Get up and running in minutes with our simple setup process."
            />
          </div>
        </section>

        <section
          id="how-it-works"
          className="w-full w-full py-8 md:py-12 lg:py-24"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              How It Works
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              See how PipePush keeps your team informed with real-time GitHub
              notifications
            </p>
          </div>

          <div className="mt-16">
            <NotificationDemo />
          </div>
        </section>

        <section
          id="get-started"
          className="w-full w-full py-8 md:py-12 lg:py-24"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              Ready to Connect?
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Sign up now and start receiving GitHub notifications in your
              Discord channels
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-blue-500 hover:bg-blue-700"
              >
                <Link href="/signup">
                  Sign Up Free <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/login">Log In</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-slate-50 py-6 dark:bg-transparent md:py-8">
        <div className="w-full flex flex-col items-center justify-between gap-4 md:flex-row px-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo/PipePush.jpeg"
              alt="PipePush Logo"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} PipePush. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
