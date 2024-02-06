import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-4 py-3 bg-gray-100 select-none">
            <Link href="/" className="text-4xl cursor-pointer">HS</Link>
            {/* <div>
                <Link href="/"><a className="mr-6">Home</a></Link>
                <Link href="/projects"><a className="mr-6">Projects</a></Link>
            </div> */}
        </nav>
    )
}