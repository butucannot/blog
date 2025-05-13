export function Header() {

    return (
        <header className="flex items-center justify-between p-4 bg-[#D9D9D9] px-[20%]">
        <div className="text-[36px]">LOGO</div>
        <nav>
            <ul className="flex gap-[150px] space-x-4 text-[22px]">
            <li>
                <a href="/" className="hover:text-gray-400">
                HOME
                </a>
            </li>
            <li>
                <a href="/blog" className="hover:text-gray-400">
                BLOG
                </a>
            </li>
             <li>
                <a href="/about-us" className="hover:text-gray-400">
                ABOUT US
                </a>
            </li>
            </ul>
        </nav>
        </header>
    );
}