import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  AlertTriangle,
  FileText,
  Link,
  Shield,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CustomBadge } from '@/components/ui/custom-badge';

// Mock data for detected threats
const threats = [
  {
    id: 1,
    type: 'Phishing',
    source: 'Email',
    sourceName: 'promotion@mallstore.com',
    date: '10 min ago',
    severity: 'high',
    status: 'active',
  },
  {
    id: 2,
    type: 'Malware',
    source: 'URL',
    sourceName: 'download.freesoft.net/installer.exe',
    date: '2 hours ago',
    severity: 'critical',
    status: 'blocked',
  },
  {
    id: 3,
    type: 'Suspicious Link',
    source: 'Email',
    sourceName: 'security@bank-verify.com',
    date: '1 day ago',
    severity: 'medium',
    status: 'active',
  },
];

// Helper function to get the severity icon
const getSeverityIcon = (severity: string) => {
  switch (severity) {
    case 'critical':
      return <AlertTriangle className="h-4 w-4 text-destructive" />;
    case 'high':
      return <AlertTriangle className="h-4 w-4 text-destructive/80" />;
    case 'medium':
      return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
    default:
      return <AlertTriangle className="h-4 w-4 text-muted-foreground" />;
  }
};

// Helper function to get source icon
const getSourceIcon = (source: string) => {
  switch (source) {
    case 'Email':
      return <FileText className="h-4 w-4" />;
    case 'URL':
      return <Link className="h-4 w-4" />;
    default:
      return <Shield className="h-4 w-4" />;
  }
};

const ThreatsList = () => {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          Recent Threats Detected
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {threats.map((threat) => (
            <div
              key={threat.id}
              className="flex items-start justify-between p-3 bg-accent rounded-lg"
            >
              <div className="flex gap-3">
                <div className="mt-0.5">{getSeverityIcon(threat.severity)}</div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{threat.type}</h3>
                    <CustomBadge
                      variant={
                        threat.severity === 'critical'
                          ? 'destructive'
                          : threat.severity === 'high'
                          ? 'destructive'
                          : 'warning'
                      }
                      className="capitalize"
                    >
                      {threat.severity}
                    </CustomBadge>
                    <CustomBadge
                      variant={
                        threat.status === 'blocked' ? 'success' : 'outline'
                      }
                      className="capitalize"
                    >
                      {threat.status}
                    </CustomBadge>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                    {getSourceIcon(threat.source)}
                    <span className="ml-1">{threat.source}:</span>
                    <span className="font-mono text-xs truncate max-w-[200px]">
                      {threat.sourceName}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {threat.date}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          ))}

          <Button variant="outline" className="w-full mt-2">
            View All Threats
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ThreatsList;
