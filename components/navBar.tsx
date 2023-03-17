import Link from 'next/link';
import Image from 'next/image';

const Navbar = (): JSX.Element => {
    return (
        <nav className="bg-gray-900 transition-all from-transparent to-current">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-white font-bold text-xl">
                                <>
                                    <Image src="/white.png" alt="the RyanEnterprises logo" width="100" height="100"></Image>
                                </>
                            </Link>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Link href="/" className="text-white font-bold text-xl">
                                    Home
                                </Link>
                                <Link href="/projects" className="text-white font-bold text-xl">
                                    Projects
                                </Link>
                                <Link href="/blog" className="text-white font-bold text-xl">
                                    Blog
                                </Link>
                                <Link href="https://github.com/hiteacheryouare" className="text-white font-bold text-xl">
                                    GitHub
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link href="/blog" className="text-white font-bold text-xl">
                        Home
                    </Link>
                    <Link href="/blog" className="text-white font-bold text-xl">
                        Blog
                    </Link>
                    <Link href="https://github.com/hiteacheryouare" className="text-white font-bold text-xl">
                        GitHub
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;