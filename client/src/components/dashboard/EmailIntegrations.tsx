import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Mock data
const integrations = [
  {
    id: 1,
    provider: 'Gmail',
    email: 'john.doe@gmail.com',
    status: 'active',
  },
  {
    id: 2,
    provider: 'Outlook',
    email: 'john.doe@outlook.com',
    status: 'active',
  },
];

const EmailIntegrations = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Mail className="h-5 w-5 text-primary" />
          Email Integrations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {integrations.map((integration) => (
            <div
              key={integration.id}
              className="flex items-center justify-between p-3 bg-accent rounded-lg"
            >
              <div>
                <p className="font-medium">{integration.provider}</p>
                <p className="text-sm text-muted-foreground">
                  {integration.email}
                </p>
              </div>
              <Badge
                variant={
                  integration.status === 'active' ? 'outline' : 'secondary'
                }
                className="capitalize"
              >
                {integration.status}
              </Badge>
            </div>
          ))}

          <Button variant="outline" className="w-full mt-4 gap-2">
            <Plus className="h-4 w-4" />
            Add New Integration
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailIntegrations;
