import React, { useState } from 'react';
import {
  Users,
  Database,
  BarChart,
  Shield,
  ArrowUp,
  ArrowDown,
  Settings,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import UsersTable from '@/components/admin/UserTable';
import ModelTraining from '@/components/admin/ModelTraining';
import SidebarLayout from '@/components/layout/SidebarLayout';
import { CustomBadge } from '@/components/ui/custom-badge';

// Mock data for the admin dashboard stats
const stats = [
  {
    title: 'Total Users',
    value: '524',
    change: { value: 8, type: 'increase' as const },
  },
  {
    title: 'Total Scans',
    value: '28,645',
    change: { value: 12, type: 'increase' as const },
  },
  {
    title: 'Detection Rate',
    value: '98.7%',
    change: { value: 0.5, type: 'increase' as const },
  },
  {
    title: 'False Positives',
    value: '0.8%',
    change: { value: 0.2, type: 'decrease' as const },
  },
];

const Admin = () => {
  const [activeTab, setActiveTab] = useState('users');

  const menuItems = [
    {
      title: 'Users',
      icon: Users,
      isActive: activeTab === 'users',
      onClick: () => setActiveTab('users'),
    },
    {
      title: 'Models',
      icon: Database,
      isActive: activeTab === 'models',
      onClick: () => setActiveTab('models'),
    },
    {
      title: 'Analytics',
      icon: BarChart,
      isActive: activeTab === 'analytics',
      onClick: () => setActiveTab('analytics'),
    },
    {
      title: 'Security',
      icon: Shield,
      isActive: activeTab === 'security',
      onClick: () => setActiveTab('security'),
    },
    {
      title: 'Settings',
      icon: Settings,
      isActive: activeTab === 'settings',
      onClick: () => setActiveTab('settings'),
    },
  ];

  return (
    <SidebarLayout
      menuItems={menuItems}
      title="Admin Dashboard"
      subtitle="Manage users and configure security models"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              {stat.change && (
                <div className="flex items-center mt-1">
                  <CustomBadge
                    variant={
                      stat.change.type === 'increase'
                        ? 'success'
                        : 'destructive'
                    }
                    className="text-xs"
                  >
                    {stat.change.type === 'increase' ? (
                      <ArrowUp className="h-3 w-3 mr-1" />
                    ) : (
                      <ArrowDown className="h-3 w-3 mr-1" />
                    )}
                    {Math.abs(stat.change.value)}%
                  </CustomBadge>
                  <span className="text-xs text-muted-foreground ml-2">
                    from last month
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <TabsList>
          <TabsTrigger value="users" className="gap-2">
            <Users className="h-4 w-4" />
            Users
          </TabsTrigger>
          <TabsTrigger value="models" className="gap-2">
            <Database className="h-4 w-4" />
            Models
          </TabsTrigger>
          <TabsTrigger value="analytics" className="gap-2">
            <BarChart className="h-4 w-4" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="security" className="gap-2">
            <Shield className="h-4 w-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="settings" className="gap-2">
            <Settings className="h-4 w-4" />
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-4">
          <UsersTable />
        </TabsContent>

        <TabsContent value="models" className="space-y-4">
          <ModelTraining />
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This section will contain detailed analytics and reporting.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This section will contain system security settings.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Admin Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Configure global system settings and notifications.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </SidebarLayout>
  );
};

export default Admin;
