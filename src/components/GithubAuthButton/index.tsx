import { FaGithub } from "react-icons/fa6";
import { Button } from "../ui/button";
import { signIn } from "../../../auth";

export async function GithubAuthButton() {
  async function handleSignIn() {
    "use server";
    await signIn("github");
  }

  return (
    <Button
      variant="outline"
      className="w-full flex gap-2"
      onClick={handleSignIn}
    >
      Get Started with
      <FaGithub />
    </Button>
  );
}
