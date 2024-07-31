// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0d2327] text-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">Team::GPT</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/product">Product</Link></li>
            <li><Link href="/learn">Learn</Link></li>
            <li><Link href="/enterprise">Enterprise</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="hover:underline">Log in</Link>
          <Link href="/signup" className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500">
            Start free
          </Link>
        </div>
      </div>
    </header>
  );
}