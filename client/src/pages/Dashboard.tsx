import React, { useState } from 'react';
import {
  Shield,
  Mail,
  Eye,
  AlertTriangle,
  Inbox,
  BarChart,
  Settings,
  Link,
} from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import ThreatsList from '@/components/dashboard/ThreatsList';
import EmailIntegrations from '@/components/dashboard/EmailIntegrations';
import EmailInbox from '@/components/dashboard/EmailInbox';
import SidebarLayout from '@/components/layout/SidebarLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const menuItems = [
    {
      title: 'Overview',
      icon: BarChart,
      isActive: activeTab === 'overview',
      onClick: () => setActiveTab('overview'),
    },
    {
      title: 'Email Inbox',
      icon: Inbox,
      isActive: activeTab === 'inbox',
      onClick: () => setActiveTab('inbox'),
    },
    {
      title: 'Link Scanner',
      icon: Link,
      isActive: activeTab === 'links',
      onClick: () => setActiveTab('links'),
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
      title="Security Dashboard"
      subtitle="Monitor your security status and detected threats"
    >
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="inbox">Email Inbox</TabsTrigger>
          <TabsTrigger value="links">Link Scanner</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard
              title="Total Scans"
              value="1,452"
              icon={<Eye className="h-5 w-5 text-primary" />}
              change={{ value: 12, type: 'increase' }}
            />
            <StatCard
              title="Threats Detected"
              value="38"
              icon={<AlertTriangle className="h-5 w-5 text-warning" />}
              change={{ value: 5, type: 'decrease' }}
            />
            <StatCard
              title="Email Scans"
              value="983"
              icon={<Mail className="h-5 w-5 text-primary" />}
              change={{ value: 8, type: 'increase' }}
            />
            <StatCard
              title="Current Risk Level"
              value="Low"
              icon={<Shield className="h-5 w-5 text-success" />}
              description="Based on your recent scan history"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <ThreatsList />
            <EmailIntegrations />
          </div>
        </TabsContent>

        <TabsContent value="inbox">
          <EmailInbox />
        </TabsContent>

        <TabsContent value="links">
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-medium mb-4">Link Scanner</h2>
            <p className="text-muted-foreground">
              Scan URLs for potential security threats and phishing attempts.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="settings">
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-medium mb-4">Settings</h2>
            <p className="text-muted-foreground">
              Configure your security preferences and notification settings.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </SidebarLayout>
  );
};

export default Dashboard;
