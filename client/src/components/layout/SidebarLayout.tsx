import React from 'react';
import Navbar from './Navbar';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface SidebarLayoutProps {
  children: React.ReactNode;
  menuItems: {
    title: string;
    icon: React.ComponentType<any>;
    isActive?: boolean;
    onClick?: () => void;
  }[];
  title: string;
  subtitle?: string;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({
  children,
  menuItems,
  title,
  subtitle,
}) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center space-x-2 px-4 py-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">SecuritySentinel</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarMenu>
                {menuItems.map((item, index) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton
                      isActive={item.isActive}
                      onClick={item.onClick}
                      tooltip={item.title}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <div className="px-4 py-2 text-xs text-muted-foreground">
              <p>SecuritySentinel</p>
              <p>v1.0.0</p>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1 py-6 px-6">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h1 className="text-3xl font-bold">{title}</h1>
                    {subtitle && (
                      <p className="text-muted-foreground mt-1">{subtitle}</p>
                    )}
                  </div>
                  <SidebarTrigger />
                </div>
                {children}
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default SidebarLayout;
