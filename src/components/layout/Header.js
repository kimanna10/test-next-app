import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </Link>
        <nav className="flex items-center flex-end gap-5">
          <Link href="/" className="py-5">
            Home
          </Link>
          <Link href="/about" className="py-5">
            About
          </Link>
          <Link href="/blog" className="py-5">
            Blog
          </Link>
          {/* <Link href="/profile" className="py-5">
            Profile
          </Link> */}
        </nav>
      </div>
    </header>
  );
}
