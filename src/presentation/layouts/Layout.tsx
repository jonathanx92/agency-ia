import { ReactNode } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-background dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-4 sm:px-6 lg:px-10 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}; 