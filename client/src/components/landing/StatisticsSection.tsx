import React from 'react';
import { Shield, AlertTriangle, Zap, Users } from 'lucide-react';

const statistics = [
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    value: '10M+',
    label: 'Threats Blocked',
  },
  {
    icon: <AlertTriangle className="h-10 w-10 text-warning" />,
    value: '99.9%',
    label: 'Detection Rate',
  },
  {
    icon: <Zap className="h-10 w-10 text-success" />,
    value: '<500ms',
    label: 'Avg Response Time',
  },
  {
    icon: <Users className="h-10 w-10 text-secondary" />,
    value: '50K+',
    label: 'Active Users',
  },
];

const StatisticsSection = () => {
  return (
    <section className="w-full py-16 bg-accent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-card text-center"
            >
              <div className="mx-auto mb-4 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
