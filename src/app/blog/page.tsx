"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 

type Data = {
  id: number;
  name: string;
  image: string;
  content: string;
  is_liked: boolean;
  created_at: string | null;
  updated_at: string | null;
};

export default function Blog() {
  const [posts, setPosts] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); 

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("http://localhost/api/posts");
        if (!res.ok) throw new Error(`error: ${res.status}`);
        const data: Data[] = await res.json();
        setPosts(data);
      } catch (err: any) {
        setError(err.message || "error");
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) {
    return <main className="text-white p-10">Загрузка...</main>;
  }

  if (error) {
    return <main className="text-red-500 p-10">Ошибка: {error}</main>;
  }

  return (
    <main className="bg-[#1D0202] p-10 min-h-screen">
      <h1 className="text-[#FFFFFF] text-[36px] mb-[20px]">BLOG</h1>
      <div className="grid grid-cols-3 gap-20">
        {posts.map((post) => (
          <div
            key={post.id}
            onClick={() => router.push(`/blog/${post.id}`)}
            className="bg-[#D9D9D9] h-[300px] rounded-[30px] p-[20px] overflow-hidden hover:bg-[#D9DFD9] cursor-pointer transition duration-300 hover:scale-[1.01]"
          >
            <img
              className="h-[140px] w-full rounded-[30px] object-cover mb-3"
              src={`http://localhost${post.image}`}
              alt={post.name}
            />
            <div className="text-[20px] font-bold text-black text-center mb-2">
              {post.name}
            </div>
            <div className="text-black line-clamp-3">{post.content}</div>
          </div>
        ))}
      </div>
      <div>
        <button
        onClick={() => router.push(`/blog/create`)
        }
        className="mt-4 px-6 py-2 bg-white hover:bg-[#599DFF] text-black rounded-xl transition duration-200 cursor-pointer">Create post</button>
      </div>
    </main>
  );
}
