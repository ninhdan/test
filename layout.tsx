import React, { ReactNode } from 'react';
import Link from 'next/link';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header className="bg-gray-800 p-4 text-white text-center">
        <nav>
          <Link href="/" passHref><a className="mr-4">Home</a></Link>
          <Link href="/about" passHref><a>About</a></Link>
        </nav>
      </header>
      <main className="p-4">
        {children}
      </main>
      <footer className="bg-gray-800 p-4 text-white text-center">
        Footer
      </footer>
    </div>
  );
}

export default Layout;
