import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "../ThemeToggle";
import { GithubAuthButton } from "../GithubAuthButton";
import { FaGithub } from "react-icons/fa6";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex h-16 items-center">
        <div className="flex w-full items-center justify-between px-4">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo/pushpipe.jpeg"
                alt="PushPipe Logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full"
              />
              <span className="inline-block font-bold">PushPipe</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#features"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                How It Works
              </Link>
              <Link
                href="#pricing"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Pricing
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="hidden md:flex gap-4">
              <GithubAuthButton
                text="Get Started with"
                icon={{
                  Icon: FaGithub,
                  position: "right",
                  size: 20,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
