"use client";
export default async function Post({ params }: any) {
  const posts: any = JSON.parse(localStorage.getItem("posts") || "[]");
//   console.log(params);
  const { slug } = await params;
//   console.log(slug);
  const post = posts.value("name");
  console.log(post);
  return (
    <main>
      <h1 className="text-[#FFFFFF] text-[36px] mb-[20px]">{slug}</h1>
    </main>
  );
}
