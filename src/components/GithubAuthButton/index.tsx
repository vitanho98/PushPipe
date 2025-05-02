import { Button } from "../ui/button";
import { signIn } from "../../../auth";

interface GithubAuthButtonProps {
  text: string;
  redirectTo?: string;
  icon: {
    Icon: React.ElementType;
    position?: "left" | "right";
    size?: number;
  };
}

export async function GithubAuthButton({
  text,
  redirectTo = "/app/panel",
  icon,
}: GithubAuthButtonProps) {
  async function handleSignIn() {
    "use server";
    await signIn("github", { redirectTo });
  }

  return (
    <Button
      variant="outline"
      className={`w-full flex gap-2 ${
        icon && icon.position === "right" ? "flex-row-reverse" : ""
      }`}
      onClick={handleSignIn}
    >
      {icon && <icon.Icon size={icon.size} />}
      {text}
    </Button>
  );
}
