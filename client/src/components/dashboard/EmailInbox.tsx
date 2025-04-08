import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Link, ExternalLink, Check, AlertTriangle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Mock data for emails
const mockEmails = [
  {
    id: 1,
    subject: 'Your Account Statement',
    sender: 'bank@example.com',
    date: '2025-04-06',
    scanned: true,
    isSafe: true,
    links: [
      { id: 1, url: 'https://example.com/statement', isSafe: true },
      { id: 2, url: 'https://example.com/support', isSafe: true },
    ],
  },
  {
    id: 2,
    subject: 'Limited Time Offer',
    sender: 'marketing@example.com',
    date: '2025-04-05',
    scanned: true,
    isSafe: false,
    links: [
      { id: 3, url: 'https://suspicious-site.com/offer', isSafe: false },
      { id: 4, url: 'https://example.com/unsubscribe', isSafe: true },
    ],
  },
  {
    id: 3,
    subject: 'Team Meeting Updates',
    sender: 'manager@company.com',
    date: '2025-04-04',
    scanned: false,
    links: [
      { id: 5, url: 'https://company.com/meeting', isSafe: null },
      { id: 6, url: 'https://docs.company.com/agenda', isSafe: null },
    ],
  },
];

const EmailInbox = () => {
  const [expandedEmail, setExpandedEmail] = useState<number | null>(null);

  const toggleEmailExpand = (emailId: number) => {
    setExpandedEmail(expandedEmail === emailId ? null : emailId);
  };

  const scanEmail = (emailId: number) => {
    // In a real app, this would trigger an API call to scan the email
    console.log(`Scanning email ID: ${emailId}`);
  };

  const scanLink = (linkId: number) => {
    // In a real app, this would trigger an API call to scan the link
    console.log(`Scanning link ID: ${linkId}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Mail className="h-5 w-5 text-primary" />
          Email Inbox
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockEmails.map((email) => (
            <div key={email.id} className="border rounded-lg overflow-hidden">
              <div
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-accent"
                onClick={() => toggleEmailExpand(email.id)}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{email.subject}</h3>
                    {email.scanned && (
                      <Badge variant={email.isSafe ? 'outline' : 'destructive'}>
                        {email.isSafe ? 'Safe' : 'Suspicious'}
                      </Badge>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground flex gap-3">
                    <span>{email.sender}</span>
                    <span>{email.date}</span>
                  </div>
                </div>
                {!email.scanned && (
                  <Button
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      scanEmail(email.id);
                    }}
                  >
                    <Check className="mr-1 h-4 w-4" />
                    Check Email
                  </Button>
                )}
              </div>

              {expandedEmail === email.id && (
                <div className="p-4 bg-accent/50">
                  <p className="text-sm mb-3">Detected Links:</p>
                  <div className="space-y-2">
                    {email.links.map((link) => (
                      <div
                        key={link.id}
                        className="flex items-center justify-between bg-background p-2 rounded-md"
                      >
                        <div className="flex items-center gap-2 text-sm">
                          <Link className="h-4 w-4 text-muted-foreground" />
                          <span className="truncate max-w-[240px]">
                            {link.url}
                          </span>
                          {link.isSafe !== null && (
                            <Badge
                              variant={link.isSafe ? 'outline' : 'destructive'}
                            >
                              {link.isSafe ? (
                                <Check className="h-3 w-3" />
                              ) : (
                                <AlertTriangle className="h-3 w-3" />
                              )}
                            </Badge>
                          )}
                        </div>
                        <div className="flex gap-2">
                          {link.isSafe === null && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => scanLink(link.id)}
                            >
                              Check Link
                            </Button>
                          )}
                          <Button size="sm" variant="ghost" asChild>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailInbox;
