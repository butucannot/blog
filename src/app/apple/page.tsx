import React from "react";

export default function Apple({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="bg-white border-b border-gray-300">
        <nav>
          <div className="flex items-center justify-center h-12">
            <ul className="flex items-center justify-between gap-[25px] text-[15px]">
              <li>
                <div>
                  <svg
                    className="h-4 w-4 text-gray-800 cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </div>
              </li>
              <li>
                <a href="#" className=" text-gray-800 hover:text-gray-600">
                  Mac
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-sm text-gray-800 hover:text-gray-600"
                >
                  iPad
                </a>
              </li>
              <li>
                <a href="" className=" text-gray-800 hover:text-gray-600">
                  iPhone
                </a>
              </li>
              <li>
                <a href="" className=" text-gray-800 hover:text-gray-600">
                  Watch
                </a>
              </li>
              <li>
                <a href="" className=" text-gray-800 hover:text-gray-600">
                  AirPods
                </a>
              </li>
              <li>
                <a href="" className=" text-gray-800 hover:text-gray-600">
                  TV і Дім
                </a>
              </li>
              <li>
                <a href="" className="text-gray-800 hover:text-gray-600">
                  Сервіси
                </a>
              </li>
              <li>
                <a href="" className=" text-gray-800 hover:text-gray-600">
                  Підтримка
                </a>
              </li>
              <li>
                <a href="" className=" text-gray-800 hover:text-gray-600">
                  Де купити
                </a>
              </li>
              <li>
                <div>
                  <svg
                    className="h-4 w-4 text-gray-800 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <div className="bg-[#F1F1F3]">
          <div className="mb-[20px]">
            <img src="apple.jpg" alt="" />
          </div>
        </div>
        <div className="mb-[30px]">
          <div className="flex items-center justify-center">
            <h1 className="text-[64px] font-[600]">Служба підтримки Apple</h1>
          </div>
        </div>
        <div className="flex items-end justify-center gap-[40px] mb-[30px]">
          <a href="#" className="text-center hover:underline">
            <img
              src="/iphone.png"
              alt=""
              className="w-[34px] h-[68px] mx-auto"
            />
            <span>iPhone</span>
          </a>
          <a href="#" className="text-center hover:underline">
            <img src="/mac.png" alt="" className="w-[110px] h-[66px] mx-auto" />
            <span>Mac</span>
          </a>
          <a href="#" className="text-center hover:underline">
            <img src="/ipad.png" alt="" className="w-[68px] h-[48px] mx-auto" />
            <span>iPad</span>
          </a>
          <a href="#" className="text-center hover:underline">
            <img
              src="/watch.png"
              alt=""
              className="w-[42px] h-[68px] mx-auto"
            />
            <span>Watch</span>
          </a>
          <a href="#" className="text-center hover:underline">
            <img
              src="/airpods.png"
              alt=""
              className="w-[66px] h-[60px] mx-auto"
            />
            <span>AirPods</span>
          </a>
          <a href="#" className="text-center hover:underline">
            <img
              src="/music.png"
              alt=""
              className="w-[68px] h-[68px] mx-auto"
            />
            <span>Music</span>
          </a>
          <a href="#" className="text-center hover:underline">
            <img src="/tv.png" alt="" className="w-[72px] h-[68px] mx-auto" />
            <span>TV</span>
          </a>
        </div>
        <div>
            <div></div>
            <div></div>
        </div>
      </main>
    </>
  );
}
