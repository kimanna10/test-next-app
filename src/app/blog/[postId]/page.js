"use client";
import { useParams } from "next/navigation";

export default function PostId() {
  const params = useParams();
  const postId = params?.postId;

  return (
    <main className="w-full">
      <section className="container mx-auto px-4">
        <div>
          <h1 className="text-xl font-bold mb-4">Blog id: {postId}</h1>
        </div>
      </section>
    </main>
  );
}
