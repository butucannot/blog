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

export default function Post({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<Data | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`http://localhost/api/posts/${params.slug}`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error(`Ошибка сети: ${res.status}`);
        const data: Data = await res.json();
        setPost(data);
      } catch (err: any) {
        setError(err.message || "Ошибка загрузки данных");
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [params.slug]);
  
  async function handleDelete(){
    if(!confirm("Are you sure that you want to delete this post")) return;
    try {
      const res = await fetch(`http://localhost/api/posts/${params.slug}`, {
        method: "DELETE"
      });
      if(!res.ok) {
        throw new Error(`Error: ${res.status}`)
      }
 router.push('/blog'); } 
      catch (err:any) {
        alert(err.message || "Can not delete this post")
      }
  }

  if (loading) return <main className="p-10 text-white">Загрузка...</main>;
  if (error) return <main className="p-10 text-red-500">Ошибка: {error}</main>;
  if (!post) return <main className="p-10 text-white">Пост не найден</main>;

  return (
    <main className="bg-[#1D0202] text-white p-10 min-h-screen">
      <h1 className="text-[36px] mb-[20px]">{post.name}</h1>
      <div>
        <img
          src={`http://localhost${post.image}`}
          alt={post.name}
          className="rounded-[30px] w-[1200px] h-[300px] mb-[20px] object-cover"
        />
      </div>
      <div>
        <h2 className="mb-[20px]">{post.content}</h2>
      </div>
      <div>
        <button className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl transition duration-200 cursor-pointer" onClick={handleDelete}>
          Delete this post
        </button>
      </div>
    </main>
  );
}
