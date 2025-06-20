"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://dummyjson.com/posts");
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.error("Ошибка при загрузке постов:", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <main className="w-full">
      <div className="container mx-auto px-4">
        <section>
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
