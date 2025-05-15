"use client";
import { useRouter } from 'next/navigation'

export default function Blog() {
  const router = useRouter();
  const posts = JSON.parse(localStorage.getItem("posts") || "[]");

  return (
    <>
      <main className="bg-[#1D0202]">
        <h1 className="text-[#FFFFFF] text-[36px] mb-[20px]">BLOG</h1>
        <div className="grid grid-cols-3 gap-20 ">
          {posts.map((obj, index) => (
              <div key={index} className="bg-[#D9D9D9] h-[300px] rounded-[30px] p-[20px] overflow-hidden hover:bg-[#D9DFD9] cursor-pointer transition duration-300 hover:scale-[1.01]" onClick={() => router.push(`/blog/${obj.name.toLowerCase().replace(/\s/g, '-')}`)}> 
                <img className="h-[140px] w-[100%] rounded-[30px]" src={obj.img}/>
                <div className="flex justify-center text-[20px] font-bold ">{obj.name}</div>
                <div>{obj.content}</div>
              </div>
          ))}
        </div>
      </main>
      <footer></footer> 
    </>
  );
}
