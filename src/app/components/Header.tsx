export default function Header() {
    return (
        <header className="header flex justify-center py-12 gap-4">
            <h1 className="text-3xl text-red-700">Upload files with nextjs to vercel blob</h1>
            <nav className="flex gap-4 text-emerald-400">
                <a href="/">Home</a>
                <a href="/upload">Upload</a>
            </nav>
        </header>
    );
}