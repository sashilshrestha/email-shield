import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Link as LinkIcon, Shield } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const EmailScanner = () => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState('');
  const [isScanning, setIsScanning] = React.useState(false);

  const handleScan = () => {
    if (!email) {
      toast({
        title: 'Please enter an email to scan',
        variant: 'destructive',
      });
      return;
    }

    setIsScanning(true);

    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
      toast({
        title: 'Scan Complete',
        description: 'Email appears to be safe.',
        variant: 'default',
      });
    }, 2000);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center gap-2">
          <Mail className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-medium">Email Scanner</h3>
        </div>

        <div className="flex items-center gap-2">
          <Input
            placeholder="Enter an email to scan"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleScan} disabled={isScanning}>
            {isScanning ? (
              <>
                <Shield className="h-4 w-4 mr-2 animate-scanning" />
                Scanning...
              </>
            ) : (
              <>Scan</>
            )}
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          Determine if an email contains phishing links, malware, or other
          threats.
        </p>
      </div>
    </div>
  );
};

const UrlScanner = () => {
  const { toast } = useToast();
  const [url, setUrl] = React.useState('');
  const [isScanning, setIsScanning] = React.useState(false);

  const handleScan = () => {
    if (!url) {
      toast({
        title: 'Please enter a URL to scan',
        variant: 'destructive',
      });
      return;
    }

    setIsScanning(true);

    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
      toast({
        title: 'Scan Complete',
        description: 'URL appears to be safe.',
        variant: 'default',
      });
    }, 2000);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center gap-2">
          <LinkIcon className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-medium">URL Scanner</h3>
        </div>

        <div className="flex items-center gap-2">
          <Input
            placeholder="Enter a URL to scan"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleScan} disabled={isScanning}>
            {isScanning ? (
              <>
                <Shield className="h-4 w-4 mr-2 animate-scanning" />
                Scanning...
              </>
            ) : (
              <>Scan</>
            )}
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          Check if a website is malicious, contains malware, or is a phishing
          attempt.
        </p>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="w-full hero-gradient grid-pattern py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Secure your communications from threats
            </h1>
            <p className="text-xl text-muted-foreground">
              Advanced protection against phishing, spam, and malicious content
              in emails and URLs.
            </p>
            <div className="flex gap-4 pt-2">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-xl shadow-card p-6 border border-border">
              <Tabs defaultValue="email" className="w-full">
                <TabsList className="w-full mb-6">
                  <TabsTrigger value="email" className="flex-1">
                    Email Scanner
                  </TabsTrigger>
                  <TabsTrigger value="url" className="flex-1">
                    URL Scanner
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="email">
                  <EmailScanner />
                </TabsContent>
                <TabsContent value="url">
                  <UrlScanner />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
