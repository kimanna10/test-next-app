"use client";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  return (
    <div>
      <h1>Profile page</h1>
      <button onClick={() => router.push("/profile/1234")}>Click me</button>
      <button onClick={() => router.back()}>Back</button>
    </div>
  );
}
