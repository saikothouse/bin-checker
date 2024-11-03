import './globals.css';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>BIN Checker</title>
        <meta name="description" content="Check BIN information easily with our BIN Checker tool." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-2">
          <header className="w-full p-4 bg-blue-500 text-white text-center">
            <h1 className="text-3xl font-bold">BIN Checker</h1>
          </header>
          <main className="w-full flex-1 flex flex-col items-center justify-center">
            {children}
          </main>
          <footer className="w-full p-4 bg-blue-500 text-white text-center">
            <p>&copy; 2024 BIN Checker. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
