export function Header() {

    return (
        <header className="flex items-center justify-between p-4 bg-[#D9D9D9]">
        <div className="text-lg font-bold">My Website</div>
        <nav>
            <ul className="flex space-x-4">
            <li>
                <a href="/" className="hover:text-gray-400">
                Home
                </a>
            </li>
            <li>
                <a href="/blog" className="hover:text-gray-400">
                Blog
                </a>
            </li>
            </ul>
        </nav>
        </header>
    );
}