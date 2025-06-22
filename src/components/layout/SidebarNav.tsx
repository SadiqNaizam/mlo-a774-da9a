import React from 'react';
import {
  LayoutGrid,
  Users,
  UserSquare,
  FileText,
  FileStack,
  ShoppingBasket,
  Mail,
  Archive,
  CalendarDays,
  Settings,
  HelpCircle,
  type LucideIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  active?: boolean;
}

const mainNavItems: NavItem[] = [
  { href: '#', label: 'Dashboard', icon: LayoutGrid, active: true },
  { href: '#', label: 'Leads', icon: Users, active: false },
  { href: '#', label: 'Customers', icon: UserSquare, active: false },
  { href: '#', label: 'Proposals', icon: FileText, active: false },
  { href: '#', label: 'Invoices', icon: FileStack, active: false },
  { href: '#', label: 'Items', icon: ShoppingBasket, active: false },
  { href: '#', label: 'Mail', icon: Mail, active: false },
  { href: '#', label: 'Shoebox', icon: Archive, active: false },
  { href: '#', label: 'Calendar', icon: CalendarDays, active: false },
];

const secondaryNavItems: NavItem[] = [
  { href: '#', label: 'Settings', icon: Settings, active: false },
  { href: '#', label: 'Help', icon: HelpCircle, active: false },
];

const SidebarNav: React.FC = () => {
  return (
    <aside className="w-64 flex flex-col border-r bg-background">
      <div className="flex flex-col justify-between h-full p-6">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm">
              bo
            </div>
            <button className="p-1.5 rounded-md hover:bg-secondary">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
            </button>
          </div>
          <nav className="flex flex-col gap-1">
            {mainNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium',
                  item.active
                    ? 'bg-secondary text-primary-foreground' 
                    : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
        <nav className="flex flex-col gap-1">
          {secondaryNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-secondary/50 hover:text-foreground',
                item.active && 'bg-secondary text-foreground'
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default SidebarNav;
