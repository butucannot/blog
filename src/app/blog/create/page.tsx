"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreatePost() {
  const [formData, setFormData] = useState({
    name: "",
    content: "",
    image: null as File | null,
  });
  const [preview, setPreview] = useState<string | null>(null);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData({ ...formData, image: file });

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("content", formData.content);
    if (formData.image) {
      data.append("image", formData.image); 
    }

    try {
      const res = await fetch("http://localhost/api/posts/store", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        window.location.href = "/blog";
      } else {
        const error = await res.json();
        alert(`Ошибка: ${error.message || "Неизвестная ошибка"}`);
      }
    } catch (err) {
      alert("Сетевая ошибка: " + (err as Error).message);
    }
  };

 return (
  <>
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-md mx-auto min-h-screen items-center px-4"
    >
      <input
        type="text"
        placeholder="Заголовок"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="border border-white bg-transparent text-white p-2 rounded w-full"
        required
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="border border-white bg-transparent text-white p-2 rounded w-full"
        required
      />

      {preview && (
        <div className="mt-2">
          <img src={preview} alt="Превью" className="max-w-xs h-auto rounded" />
        </div>
      )}

      <textarea
        placeholder="Контент"
        value={formData.content}
        onChange={(e) =>
          setFormData({ ...formData, content: e.target.value })
        }
        className="border border-white bg-transparent text-white p-2 rounded w-full"
        required
        rows={5}
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Создать пост
      </button>
    </form>
  </>
);

}
