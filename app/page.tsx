import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-screen">
      <div>Clerk User:</div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
