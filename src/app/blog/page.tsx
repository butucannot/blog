"use client";
import { useRouter } from "next/navigation";

export default function Blog({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const router = useRouter();
  const posts: any = JSON.parse(localStorage.getItem("posts") || "[]");
  const defaultPage = 1;
  const itemsPerPage = 6;
  const totalPages: number = Math.ceil(posts.length / itemsPerPage);
  const pageNumbers: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  const page: number = Number(searchParams?.page ?? defaultPage);
  if (page < 1 || page > posts.length / itemsPerPage) console.log(posts.length);
  return (
    <>
      <main className="bg-[#1D0202]">
        <h1 className="text-[#FFFFFF] text-[36px] mb-[20px]">BLOG</h1>
        <div className="grid grid-cols-3 gap-20 ">
          {posts
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((obj: any, index: any) => (
              <div
                key={index}
                className="bg-[#D9D9D9] h-[300px] rounded-[30px] p-[20px] overflow-hidden hover:bg-[#D9DFD9] cursor-pointer transition duration-300 hover:scale-[1.01]"
                onClick={() => router.push(`/blog/${obj.id}`)}
              >
                <img
                  className="h-[140px] w-[100%] rounded-[30px]"
                  src={obj.img}
                />
                <div className="flex justify-center text-[20px] font-bold ">
                  {obj.name}
                </div>
                <div>{obj.content}</div>
              </div>
            ))}
        </div>
      </main>
      <footer className="">
        <div className="flex items-center justify-center space-x-4 mt-[30px]">
          <button
            onClick={() => router.push(`/blog?page=${page - 1}`)}
            disabled={page <= 1}
            className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white border border-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 330 330"
            >
              <path
                id="XMLID_92_"
                d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001  l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996  C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"
              />
            </svg>
          </button>
          {pageNumbers.map((obj: any, i: any) => (
            <button
              key={i}
              onClick={() => router.push(`/blog?page=${i + 1}`)}
              className={`w-14 h-14 flex items-center justify-center rounded-2xl  ${
                page === i + 1
                  ? "bg-[#FF854C] text-white"
                  : "bg-white border border-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => router.push(`/blog?page=${page + 1}`)}
            className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white border border-gray-200"
            disabled={page == Math.ceil(posts.length / itemsPerPage)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 330 330"
            >
              <path
                id="XMLID_222_"
                d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"
              />
            </svg>
          </button>
        </div>
      </footer>
    </>
  );
}
