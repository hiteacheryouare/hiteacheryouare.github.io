import Link from 'next/link'
import Image from 'next/image';
const Footer = () => {
    var year = new Date().getFullYear()
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex content-center justify-center p-4">
          <Image src='/white.png' alt='the ryan enterprises logo' width={100} height={100} draggable={false}></Image>
        </div>
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          <div className="px-5 py-2">
            <Link href="/" className="text-gray-400 hover:text-white">
              Home
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/blog" className="text-gray-400 hover:text-white">
              Blog
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="https://github.com/hiteacheryouare"
              className="text-gray-400 hover:text-white"
            >
              GitHub
            </Link>
          </div>
        </nav>
        <p className="mt-8 text-center text-gray-400">
          &copy; {year} The RyanEnterprises Team. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
