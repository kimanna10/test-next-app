"use client";
import { useRouter } from "next/navigation";

async function getPosts() {
  const res = await fetch("https://dummyjson.com/posts", {
    next: { revalidate: 60 }, // SSG с ISR (обновление раз в 60 сек)
  });
  const data = await res.json();
  return data.posts;
}

export default async function Blog() {
  const router = useRouter();

  const posts = await getPosts();

  return (
    <main className="w-full">
      <div className="container mx-auto px-4">
        <section className="">
          <h1 className="text-xl font-bold mb-4">Blog Page</h1>

          {posts.map((post) => (
            <div key={post.id} className="flex items-center gap-10 mb-5">
              <button
                onClick={() => router.push(`/blog/${post.id}`)}
                className="px-8 py-4 bg-purple-300 rounded-full hover:bg-purple-100 cursor-pointer"
              >
                Перейти на страницу {post.title}
              </button>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
