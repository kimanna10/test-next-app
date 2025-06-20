import { use } from "react";

export default function PostId({ params }) {
  const { postId } = use(params);
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
