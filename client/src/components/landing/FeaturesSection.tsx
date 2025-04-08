import React from 'react';
import { Shield, Mail, Link2, Clock, Bell, Database } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: 'Advanced Threat Detection',
    description:
      'AI-powered analysis to detect sophisticated phishing and malware threats.',
  },
  {
    icon: <Mail className="h-10 w-10 text-primary" />,
    title: 'Email Scanning',
    description:
      'Deep analysis of email content, headers, and attachments to detect threats.',
  },
  {
    icon: <Link2 className="h-10 w-10 text-primary" />,
    title: 'URL Analysis',
    description:
      'Check URLs for malicious content, phishing attempts, and suspicious behavior.',
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: 'Real-time Protection',
    description:
      'Instant scanning and immediate alerts when threats are detected.',
  },
  {
    icon: <Bell className="h-10 w-10 text-primary" />,
    title: 'Customizable Alerts',
    description:
      'Configure notifications for different threat levels and attack vectors.',
  },
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: 'Comprehensive Reports',
    description:
      'Detailed analytics and reporting on scanned content and detected threats.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Powerful Protection Features</h2>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our comprehensive security tools protect you from the latest digital
            threats
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-border shadow-card hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
