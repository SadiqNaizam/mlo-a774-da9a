import React from 'react';
import SidebarNav from './SidebarNav';
import TopHeader from './TopHeader';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="grid min-h-screen w-full grid-cols-[256px_1fr]">
      <SidebarNav />
      <div className="flex flex-col">
        <TopHeader />
        <main className="flex-1 overflow-y-auto p-6 bg-background">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
